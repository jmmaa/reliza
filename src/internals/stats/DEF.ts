import { type Config } from "../data";
import {
  add,
  battleSkills,
  bladeSkills,
  flattenedStats,
  isUsingDualSwords,
  isUsingMainOHS,
  isUsingSubShield,
  shieldSkills,
  total,
} from "../utils";

import { totalVIT } from "./VIT";
import { totalEquipmentDEF } from "./defensiveRelated";
import { subWeaponArrowPercentDEFModifier } from "./equipmentModifiers";

export const berserkPercentDEFReduction = (config: Config) =>
  bladeSkills(config).berserk.buffIsActive ?
    isUsingMainOHS(config) && !isUsingDualSwords(config) ?
      Math.floor((100 - bladeSkills(config).berserk.level) / 2)
    : 100 - bladeSkills(config).berserk.level
  : 0;

export const forceShieldFlatDEFPassive = (config: Config) =>
  isUsingSubShield(config) ?
    shieldSkills(config).forceShield.level * 2
  : 0;

export const forceShieldPercentDEFPassive = (config: Config) =>
  isUsingSubShield(config) ? shieldSkills(config).forceShield.level : 0;

export const defenseMasteryFlatDEFPassive = (config: Config) =>
  battleSkills(config).defenseMastery.level;

export const defenseUPFlatDEFPassive = (config: Config) =>
  battleSkills(config).defenseUP.level;

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
  berserkPercentDEFReduction(config) +
  forceShieldPercentDEFPassive(config);

export const totalPercentDEF = (config: Config) =>
  totalPercentDEFFromEquipment(config) + totalPercentDEFFromSkills(config);

export const totalFlatDEFFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_DEF")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatDEFFromSkills = (config: Config) =>
  forceShieldFlatDEFPassive(config) +
  defenseUPFlatDEFPassive(config) +
  defenseMasteryFlatDEFPassive(config);

export const totalFlatDEF = (config: Config) =>
  totalFlatDEFFromEquipment(config) + totalFlatDEFFromSkills(config);

export const totalDEF = (config: Config) =>
  total(
    totalBaseDEF(config),
    totalPercentDEF(config),
    totalFlatDEF(config),
  );

export const calculateDEF = (config: Config) => ({
  totalBaseDEF:
    bladeSkills(config).rampage.buffIsActive ? totalBaseDEF(config) : 0,
  totalPercentDEF:
    bladeSkills(config).rampage.buffIsActive ? totalPercentDEF(config) : 0,
  totalFlatDEF:
    bladeSkills(config).rampage.buffIsActive ? totalFlatDEF(config) : 0,
  totalDEF:
    bladeSkills(config).rampage.buffIsActive ? totalDEF(config) : 0,
});

// CONTINUE THIS
