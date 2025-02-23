import {
  magicWarriorMasteryTotalPercentATKPenaltyReduction,
  shieldMasteryPercentASPDPenaltyReduction,
} from "..";
import { type Config } from "../data";

export const armorTypePercentASPDModifier = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ? 50
  : config.equipments.armor.type === "HEAVY_ARMOR" ? -50
  : 0;

export const subWeaponMagicDevicePercentATKModifier = (config: Config) =>
  config.equipments.subweapon.type === "MAGIC_DEVICE" ?
    -15 + magicWarriorMasteryTotalPercentATKPenaltyReduction(config)
  : 0;

export const subWeaponShieldPercentASPDModifier = (config: Config) =>
  config.equipments.subweapon.type === "SHIELD" ?
    -50 + shieldMasteryPercentASPDPenaltyReduction(config)
  : 0;

export const subWeaponKnucklePercentMATKModifier = (config: Config) =>
  config.equipments.subweapon.type === "KNUCKLES" ? -15 : 0;

export const subWeaponArrowPercentMDEFModifier = (config: Config) =>
  config.equipments.subweapon.type === "ARROW" ? -25 : 0;

export const subWeaponArrowPercentDEFModifier = (config: Config) =>
  config.equipments.subweapon.type === "ARROW" ? -25 : 0;

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
