import { type Config } from "../data";
import { add, flattenedStats, total } from "../utils";

import { dodgeUPTotalFlatDodge } from "..";
import { totalAGI } from "./AGI";

export const normalArmorBaseDodge = (config: Config) =>
  config.properties.level + totalAGI(config);

export const lightArmorBaseDodge = (config: Config) =>
  Math.floor(config.properties.level * 1.25 + totalAGI(config) * 1.75) +
  30;

export const heavyArmorBaseDodge = (config: Config) =>
  Math.floor(config.properties.level * 0.5 + totalAGI(config) * 0.75) - 15;

export const noArmorBaseDodge = (config: Config) =>
  Math.floor(config.properties.level * 1.5 + totalAGI(config) * 2) + 75;

export const totalBaseDodge = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    lightArmorBaseDodge(config)
  : config.equipments.armor.type === "HEAVY_ARMOR" ?
    heavyArmorBaseDodge(config)
  : config.equipments.armor.type === "NORMAL_ARMOR" ?
    normalArmorBaseDodge(config)
  : noArmorBaseDodge(config);

export const totalPercentDodge = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_DODGE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatDodge = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_DODGE")
    .map((stat) => stat[1])
    .reduce(add, 0) + dodgeUPTotalFlatDodge(config);

export const totalDodge = (config: Config) =>
  total(
    totalBaseDodge(config),
    totalPercentDodge(config),
    totalFlatDodge(config),
  );

export const calculateDodge = (config: Config) => ({
  totalBaseDodge: totalBaseDodge(config),
  totalPercentDodge: totalPercentDodge(config),
  totalFlatDodge: totalFlatDodge(config),
  totalDodge: totalDodge(config),
});
