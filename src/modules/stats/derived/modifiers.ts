import { Config } from "../../../types";
import { magicWarriorMasteryTotalPercentATKPenaltyReduction } from "../../magicBladeSkills";
import { shieldMasteryPercentASPDPenaltyReduction } from "../../shieldSkills";

export const armorTypePercentASPDModifier = (config: Config) =>
  config["character.armor.type"] === "light" ? 50
  : config["character.armor.type"] === "heavy" ? -50
  : 0;

export const subWeaponMagicDevicePercentATKModifier = (config: Config) =>
  config["character.subweapon.type"] === "magic-device" ?
    -15 + magicWarriorMasteryTotalPercentATKPenaltyReduction(config)
  : 0;

export const subWeaponShieldPercentASPDModifier = (config: Config) =>
  config["character.subweapon.type"] === "shield" ?
    -50 + shieldMasteryPercentASPDPenaltyReduction(config)
  : 0;

export const subWeaponKnucklePercentMATKModifier = (config: Config) =>
  config["character.subweapon.type"] === "knuckle" ? -15 : 0;

export const subWeaponArrowPercentMDEFModifier = (config: Config) =>
  config["character.subweapon.type"] === "arrow" ? -25 : 0;

export const subWeaponArrowPercentDEFModifier = (config: Config) =>
  config["character.subweapon.type"] === "arrow" ? -25 : 0;
