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

import { totalINT } from "./INT";
import { totalEquipmentDEF } from "./defensiveRelated";
import { subWeaponArrowPercentMDEFModifier } from "./equipmentModifiers";

export const berserkPercentMDEFReduction = (config: Config) =>
  bladeSkills(config).berserk.buffIsActive ?
    isUsingMainOHS(config) && !isUsingDualSwords(config) ?
      Math.floor((100 - bladeSkills(config).berserk.level) / 2)
    : 100 - bladeSkills(config).berserk.level
  : 0;

export const magicalShieldFlatMDEFPassive = (config: Config) =>
  isUsingSubShield(config) ?
    shieldSkills(config).magicalShield.level * 2
  : 0;

export const magicalShieldPercentMDEFPassive = (config: Config) =>
  isUsingSubShield(config) ? shieldSkills(config).magicalShield.level : 0;

export const defenseMasteryFlatMDEFPassive = (config: Config) =>
  battleSkills(config).defenseMastery.level;

export const defenseUPFlatMDEFPassive = (config: Config) =>
  battleSkills(config).defenseUP.level;

export const normalArmorBaseMDEF = (config: Config) =>
  config.properties.level + totalINT(config) + totalEquipmentDEF(config);

export const lightArmorBaseMDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 0.8 +
      totalINT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseMDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 1.2 +
      totalINT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseMDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 0.4 +
      totalINT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseMDEF = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    lightArmorBaseMDEF(config)
  : config.equipments.armor.type === "HEAVY_ARMOR" ?
    heavyArmorBaseMDEF(config)
  : config.equipments.armor.type === "NORMAL_ARMOR" ?
    normalArmorBaseMDEF(config)
  : noArmorBaseMDEF(config);

export const totalPercentMDEFFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_MDEF")
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponArrowPercentMDEFModifier(config);

export const totalPercentMDEFFromSkills = (config: Config) =>
  berserkPercentMDEFReduction(config) +
  magicalShieldPercentMDEFPassive(config);

export const totalPercentMDEF = (config: Config) =>
  totalPercentMDEFFromEquipment(config) +
  totalPercentMDEFFromSkills(config);

export const totalFlatMDEFFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_MDEF")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatMDEFFromSkills = (config: Config) =>
  magicalShieldFlatMDEFPassive(config) +
  defenseUPFlatMDEFPassive(config) +
  defenseMasteryFlatMDEFPassive(config);

export const totalFlatMDEF = (config: Config) =>
  totalFlatMDEFFromEquipment(config) + totalFlatMDEFFromSkills(config);

export const totalMDEF = (config: Config) =>
  total(
    totalBaseMDEF(config),
    totalPercentMDEF(config),
    totalFlatMDEF(config),
  );

export const calculateMDEF = (config: Config) => ({
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
