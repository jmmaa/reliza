import { type Config } from "../data";
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
  config: Config,
) =>
  isUsingSubShield(config) ?
    shieldSkills(config).shieldMastery.level * 5
  : 0;

export const magicWarriorMasteryPercentATKPenaltyReduction = (
  config: Config,
) =>
  isUsingSubMD(config) ?
    magicBladeSkills(config).magicWarriorMastery.level +
    (isUsingMainOHS(config) ? 5 : 0)
  : 0;

export const armorTypePercentASPDModifier = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ? 50
  : config.equipments.armor.type === "HEAVY_ARMOR" ? -50
  : 0;

export const subWeaponMagicDevicePercentATKModifier = (config: Config) =>
  isUsingSubMD(config) ?
    -15 + magicWarriorMasteryPercentATKPenaltyReduction(config)
  : 0;

export const subWeaponShieldPercentASPDModifier = (config: Config) =>
  isUsingSubShield(config) ?
    -50 + shieldMasteryPercentASPDPenaltyReduction(config)
  : 0;

export const subWeaponKnucklePercentMATKModifier = (config: Config) =>
  isUsingSubKN(config) ? -15 : 0;

export const subWeaponArrowPercentMDEFModifier = (config: Config) =>
  isUsingSubArrow(config) ? -25 : 0;

export const subWeaponArrowPercentDEFModifier = (config: Config) =>
  isUsingSubArrow(config) ? -25 : 0;

export const calculateEquipmentModifiers = (config: Config) => ({
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
