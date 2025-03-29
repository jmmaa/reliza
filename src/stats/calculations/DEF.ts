import { type StatCalcConfig } from "../types";
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

export const berserkPercentDEFReduction = (config: StatCalcConfig) =>
  bladeSkills(config).berserk.buffIsActive ?
    isUsingMainOHS(config) && !isUsingDualSwords(config) ?
      Math.floor((100 - bladeSkills(config).berserk.level) / 2)
    : 100 - bladeSkills(config).berserk.level
  : 0;

export const forceShieldFlatDEFPassive = (config: StatCalcConfig) =>
  isUsingSubShield(config) ?
    shieldSkills(config).forceShield.level * 2
  : 0;

export const forceShieldPercentDEFPassive = (config: StatCalcConfig) =>
  isUsingSubShield(config) ? shieldSkills(config).forceShield.level : 0;

export const defenseMasteryFlatDEFPassive = (config: StatCalcConfig) =>
  battleSkills(config).defenseMastery.level;

export const defenseUPFlatDEFPassive = (config: StatCalcConfig) =>
  battleSkills(config).defenseUP.level;

export const normalArmorBaseDEF = (config: StatCalcConfig) =>
  config.properties.level + totalVIT(config) + totalEquipmentDEF(config);

export const lightArmorBaseDEF = (config: StatCalcConfig) =>
  Math.floor(
    config.properties.level * 0.8 +
      totalVIT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseDEF = (config: StatCalcConfig) =>
  Math.floor(
    config.properties.level * 1.2 +
      totalVIT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseDEF = (config: StatCalcConfig) =>
  Math.floor(
    config.properties.level * 0.4 +
      totalVIT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseDEF = (config: StatCalcConfig) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    lightArmorBaseDEF(config)
  : config.equipments.armor.type === "HEAVY_ARMOR" ?
    heavyArmorBaseDEF(config)
  : config.equipments.armor.type === "NORMAL_ARMOR" ?
    normalArmorBaseDEF(config)
  : noArmorBaseDEF(config);

export const totalPercentDEFFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.percentDEF)
    .reduce(add, 0) + subWeaponArrowPercentDEFModifier(config);

export const totalPercentDEFFromSkills = (config: StatCalcConfig) =>
  berserkPercentDEFReduction(config) +
  forceShieldPercentDEFPassive(config);

export const totalPercentDEF = (config: StatCalcConfig) =>
  totalPercentDEFFromEquipment(config) + totalPercentDEFFromSkills(config);

export const totalFlatDEFFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatDEF)
    .reduce(add, 0);

export const totalFlatDEFFromSkills = (config: StatCalcConfig) =>
  forceShieldFlatDEFPassive(config) +
  defenseUPFlatDEFPassive(config) +
  defenseMasteryFlatDEFPassive(config);

export const totalFlatDEF = (config: StatCalcConfig) =>
  totalFlatDEFFromEquipment(config) + totalFlatDEFFromSkills(config);

export const totalDEF = (config: StatCalcConfig) =>
  total(
    totalBaseDEF(config),
    totalPercentDEF(config),
    totalFlatDEF(config),
  );

export const calculateDEF = (config: StatCalcConfig) => ({
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
