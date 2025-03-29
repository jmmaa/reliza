import { type StatCalcConfig } from "../types";
import { add, battleSkills, flattenedStats, total } from "../utils";

import { totalAGI } from "./AGI";

export const dodgeUPFlatDodgePassive = (config: StatCalcConfig) =>
  battleSkills(config).dodgeUP.level;

export const normalArmorBaseDodge = (config: StatCalcConfig) =>
  config.properties.level + totalAGI(config);

export const lightArmorBaseDodge = (config: StatCalcConfig) =>
  Math.floor(config.properties.level * 1.25 + totalAGI(config) * 1.75) +
  30;

export const heavyArmorBaseDodge = (config: StatCalcConfig) =>
  Math.floor(config.properties.level * 0.5 + totalAGI(config) * 0.75) - 15;

export const noArmorBaseDodge = (config: StatCalcConfig) =>
  Math.floor(config.properties.level * 1.5 + totalAGI(config) * 2) + 75;

export const totalBaseDodge = (config: StatCalcConfig) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    lightArmorBaseDodge(config)
  : config.equipments.armor.type === "HEAVY_ARMOR" ?
    heavyArmorBaseDodge(config)
  : config.equipments.armor.type === "NORMAL_ARMOR" ?
    normalArmorBaseDodge(config)
  : noArmorBaseDodge(config);

export const totalPercentDodge = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.percentDodge)
    .reduce(add, 0);

export const totalFlatDodge = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatDodge)
    .reduce(add, 0) + dodgeUPFlatDodgePassive(config);

export const totalDodge = (config: StatCalcConfig) =>
  total(
    totalBaseDodge(config),
    totalPercentDodge(config),
    totalFlatDodge(config),
  );

export const calculateDodge = (config: StatCalcConfig) => ({
  totalBaseDodge: totalBaseDodge(config),
  totalPercentDodge: totalPercentDodge(config),
  totalFlatDodge: totalFlatDodge(config),
  totalDodge: totalDodge(config),
});
