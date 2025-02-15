import { type Config } from "../data";
import { add, flattenedStats, total } from "../utils";

import { totalVIT } from "./VIT";
import { totalEquipmentDEF } from "./defensiveRelated";
import { subWeaponArrowPercentDEFModifier } from "./modifiers";

import { berserkTotalPercentDEF } from "..";

import { forceShieldTotalFlatDEF, forceShieldTotalPercentDEF } from "..";

import { defenseMasteryTotalFlatDEF, defenseUPTotalFlatDEF } from "..";
import { rampageBuffIsActive } from "../bladeSkills/rampage";

export const normalArmorBaseDEF = (config: Config) =>
  config.properties.level + totalVIT(config) + totalEquipmentDEF(config);

export const lightArmorBaseDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 0.8 +
      totalVIT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 1.2 +
      totalVIT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 0.4 +
      totalVIT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseDEF = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    lightArmorBaseDEF(config)
  : config.equipments.armor.type === "HEAVY_ARMOR" ?
    heavyArmorBaseDEF(config)
  : config.equipments.armor.type === "NORMAL_ARMOR" ?
    normalArmorBaseDEF(config)
  : noArmorBaseDEF(config);

export const totalPercentDEFFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_DEF")
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponArrowPercentDEFModifier(config);

export const totalPercentDEFFromSkills = (config: Config) =>
  berserkTotalPercentDEF(config) + forceShieldTotalPercentDEF(config);

export const totalPercentDEF = (config: Config) =>
  totalPercentDEFFromEquipment(config) + totalPercentDEFFromSkills(config);

export const totalFlatDEFFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_DEF")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatDEFFromSkills = (config: Config) =>
  forceShieldTotalFlatDEF(config) +
  defenseUPTotalFlatDEF(config) +
  defenseMasteryTotalFlatDEF(config);

export const totalFlatDEF = (config: Config) =>
  totalFlatDEFFromEquipment(config) + totalFlatDEFFromSkills(config);

export const totalDEF = (config: Config) =>
  total(
    totalBaseDEF(config),
    totalPercentDEF(config),
    totalFlatDEF(config),
  );

export const calculateDEF = (config: Config) => ({
  totalBaseDEF: rampageBuffIsActive(config) ? totalBaseDEF(config) : 0,
  totalPercentDEF:
    rampageBuffIsActive(config) ? totalPercentDEF(config) : 0,
  totalFlatDEF: rampageBuffIsActive(config) ? totalFlatDEF(config) : 0,
  totalDEF: rampageBuffIsActive(config) ? totalDEF(config) : 0,
});
