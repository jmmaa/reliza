import { type Config } from "../data";
import { add, flattenedStats, total } from "../utils";

import { totalINT } from "./INT";
import { totalEquipmentDEF } from "./defensiveRelated";
import { subWeaponArrowPercentMDEFModifier } from "./equipmentModifiers";

import { berserkTotalPercentMDEF } from "..";

import {
  magicalShieldTotalFlatMDEF,
  magicalShieldTotalPercentMDEF,
} from "..";

import { defenseMasteryTotalFlatMDEF, defenseUPTotalFlatMDEF } from "..";
import { rampageBuffIsActive } from "../bladeSkills/rampage";

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
  berserkTotalPercentMDEF(config) + magicalShieldTotalPercentMDEF(config);

export const totalPercentMDEF = (config: Config) =>
  totalPercentMDEFFromEquipment(config) +
  totalPercentMDEFFromSkills(config);

export const totalFlatMDEFFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_MDEF")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatMDEFFromSkills = (config: Config) =>
  magicalShieldTotalFlatMDEF(config) +
  defenseUPTotalFlatMDEF(config) +
  defenseMasteryTotalFlatMDEF(config);

export const totalFlatMDEF = (config: Config) =>
  totalFlatMDEFFromEquipment(config) + totalFlatMDEFFromSkills(config);

export const totalMDEF = (config: Config) =>
  total(
    totalBaseMDEF(config),
    totalPercentMDEF(config),
    totalFlatMDEF(config),
  );

export const calculateMDEF = (config: Config) => ({
  totalBaseMDEF: rampageBuffIsActive(config) ? totalBaseMDEF(config) : 0,
  totalPercentMDEF:
    rampageBuffIsActive(config) ? totalPercentMDEF(config) : 0,
  totalFlatMDEF: rampageBuffIsActive(config) ? totalFlatMDEF(config) : 0,
  totalMDEF: rampageBuffIsActive(config) ? totalMDEF(config) : 0,
});
