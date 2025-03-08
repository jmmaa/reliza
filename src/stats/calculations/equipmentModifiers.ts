import { type StatCalcConfig } from "../types";
import {
  isUsingMainOHS,
  isUsingSubArrow,
  isUsingSubKN,
  isUsingSubMD,
  isUsingSubShield,
  magicBladeSkills,
  shieldSkills,
} from "../utils";

export const shieldMasteryPercentASPDPenaltyReduction = (
  config: StatCalcConfig,
) =>
  isUsingSubShield(config) ?
    shieldSkills(config).shieldMastery.level * 5
  : 0;

export const magicWarriorMasteryPercentATKPenaltyReduction = (
  config: StatCalcConfig,
) =>
  isUsingSubMD(config) ?
    magicBladeSkills(config).magicWarriorMastery.level +
    (isUsingMainOHS(config) ? 5 : 0)
  : 0;

export const armorTypePercentASPDModifier = (config: StatCalcConfig) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ? 50
  : config.equipments.armor.type === "HEAVY_ARMOR" ? -50
  : 0;

export const subWeaponMagicDevicePercentATKModifier = (
  config: StatCalcConfig,
) =>
  isUsingSubMD(config) ?
    -15 + magicWarriorMasteryPercentATKPenaltyReduction(config)
  : 0;

export const subWeaponShieldPercentASPDModifier = (
  config: StatCalcConfig,
) =>
  isUsingSubShield(config) ?
    -50 + shieldMasteryPercentASPDPenaltyReduction(config)
  : 0;

export const subWeaponKnucklePercentMATKModifier = (
  config: StatCalcConfig,
) => (isUsingSubKN(config) ? -15 : 0);

export const subWeaponArrowPercentMDEFModifier = (
  config: StatCalcConfig,
) => (isUsingSubArrow(config) ? -25 : 0);

export const subWeaponArrowPercentDEFModifier = (
  config: StatCalcConfig,
) => (isUsingSubArrow(config) ? -25 : 0);

export const calculateEquipmentModifiers = (config: StatCalcConfig) => ({
  armorTypePercentASPDModifier: armorTypePercentASPDModifier(config),
  subWeaponMagicDevicePercentATKModifier:
    subWeaponMagicDevicePercentATKModifier(config),
  subWeaponKnucklePercentMATKModifier:
    subWeaponKnucklePercentMATKModifier(config),
  subWeaponArrowPercentDEFModifier:
    subWeaponArrowPercentDEFModifier(config),
  subWeaponArrowPercentMDEFModifier:
    subWeaponArrowPercentMDEFModifier(config),
  subWeaponShieldPercentASPDModifier:
    subWeaponShieldPercentASPDModifier(config),
});
