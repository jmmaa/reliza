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

import { totalINT } from "./INT";
import { totalEquipmentDEF } from "./defensiveRelated";
import { subWeaponArrowPercentMDEFModifier } from "./equipmentModifiers";

export const berserkPercentMDEFReduction = (config: StatCalcConfig) =>
  bladeSkills(config).berserk.buffIsActive ?
    isUsingMainOHS(config) && !isUsingDualSwords(config) ?
      Math.floor((100 - bladeSkills(config).berserk.level) / 2)
    : 100 - bladeSkills(config).berserk.level
  : 0;

export const magicalShieldFlatMDEFPassive = (config: StatCalcConfig) =>
  isUsingSubShield(config) ?
    shieldSkills(config).magicalShield.level * 2
  : 0;

export const magicalShieldPercentMDEFPassive = (config: StatCalcConfig) =>
  isUsingSubShield(config) ? shieldSkills(config).magicalShield.level : 0;

export const defenseMasteryFlatMDEFPassive = (config: StatCalcConfig) =>
  battleSkills(config).defenseMastery.level;

export const defenseUPFlatMDEFPassive = (config: StatCalcConfig) =>
  battleSkills(config).defenseUP.level;

export const normalArmorBaseMDEF = (config: StatCalcConfig) =>
  config.properties.level + totalINT(config) + totalEquipmentDEF(config);

export const lightArmorBaseMDEF = (config: StatCalcConfig) =>
  Math.floor(
    config.properties.level * 0.8 +
      totalINT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseMDEF = (config: StatCalcConfig) =>
  Math.floor(
    config.properties.level * 1.2 +
      totalINT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseMDEF = (config: StatCalcConfig) =>
  Math.floor(
    config.properties.level * 0.4 +
      totalINT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseMDEF = (config: StatCalcConfig) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    lightArmorBaseMDEF(config)
  : config.equipments.armor.type === "HEAVY_ARMOR" ?
    heavyArmorBaseMDEF(config)
  : config.equipments.armor.type === "NORMAL_ARMOR" ?
    normalArmorBaseMDEF(config)
  : noArmorBaseMDEF(config);

export const totalPercentMDEFFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.percentMDEF)
    .reduce(add, 0) + subWeaponArrowPercentMDEFModifier(config);

export const totalPercentMDEFFromSkills = (config: StatCalcConfig) =>
  berserkPercentMDEFReduction(config) +
  magicalShieldPercentMDEFPassive(config);

export const totalPercentMDEF = (config: StatCalcConfig) =>
  totalPercentMDEFFromEquipment(config) +
  totalPercentMDEFFromSkills(config);

export const totalFlatMDEFFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatMDEF)
    .reduce(add, 0);

export const totalFlatMDEFFromSkills = (config: StatCalcConfig) =>
  magicalShieldFlatMDEFPassive(config) +
  defenseUPFlatMDEFPassive(config) +
  defenseMasteryFlatMDEFPassive(config);

export const totalFlatMDEF = (config: StatCalcConfig) =>
  totalFlatMDEFFromEquipment(config) + totalFlatMDEFFromSkills(config);

export const totalMDEF = (config: StatCalcConfig) =>
  total(
    totalBaseMDEF(config),
    totalPercentMDEF(config),
    totalFlatMDEF(config),
  );

export const calculateMDEF = (config: StatCalcConfig) => ({
  totalBaseMDEF:
    bladeSkills(config).rampage.buffIsActive ? totalBaseMDEF(config) : 0,
  totalPercentMDEF:
    bladeSkills(config).rampage.buffIsActive ?
      totalPercentMDEF(config)
    : 0,
  totalFlatMDEF:
    bladeSkills(config).rampage.buffIsActive ? totalFlatMDEF(config) : 0,
  totalMDEF:
    bladeSkills(config).rampage.buffIsActive ? totalMDEF(config) : 0,
});
