import { Character } from "../../../types";
import { magicWarriorMasteryTotalPercentATKPenaltyReduction } from "../../magicBladeSkills";
import { shieldMasteryPercentASPDPenaltyReduction } from "../../shieldSkills";

export const armorTypePercentASPDModifier = (character: Character) =>
  character.armor.type === "light" ? 50
  : character.armor.type === "heavy" ? -50
  : 0;

export const subWeaponMagicDevicePercentATKModifier = (
  character: Character,
) =>
  character.subWeapon.type === "magic-device" ?
    -15 + magicWarriorMasteryTotalPercentATKPenaltyReduction(character)
  : 0;

export const subWeaponShieldPercentASPDModifier = (
  character: Character,
) =>
  character.subWeapon.type === "shield" ?
    -50 + shieldMasteryPercentASPDPenaltyReduction(character)
  : 0;

export const subWeaponKnucklePercentMATKModifier = (
  character: Character,
) => (character.subWeapon.type === "knuckle" ? -15 : 0);

export const subWeaponArrowPercentMDEFModifier = (character: Character) =>
  character.subWeapon.type === "arrow" ? -25 : 0;

export const subWeaponArrowPercentDEFModifier = (character: Character) =>
  character.subWeapon.type === "arrow" ? -25 : 0;
