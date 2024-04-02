import { Character } from "../../../types";
import {
  dualSwordMasteryPercentAccuracyPenaltyReduction,
  dualSwordMasteryPercentCriticalRatePenaltyReduction,
} from "../../dualSwordSkills";
import { magicWarriorMasteryTotalPercentATKPenaltyReduction } from "../../magicBladeSkills";
import { shieldMasteryPercentASPDPenaltyReduction } from "../../shieldSkills";
import { isDualWielder } from "../../utils";

export const armorTypePercentASPDModifier = (character: Character) => {
  return character.armor.type === "light"
    ? 50
    : character.armor.type === "heavy"
    ? -50
    : 0;
};

export const subWeaponMagicDevicePercentATKModifier = (
  character: Character
) => {
  return character.subWeapon.type === "magic-device"
    ? -15 + magicWarriorMasteryTotalPercentATKPenaltyReduction(character)
    : 0;
};

export const subWeaponShieldPercentASPDModifier = (
  character: Character
) => {
  return character.subWeapon.type === "shield"
    ? -50 + shieldMasteryPercentASPDPenaltyReduction(character)
    : 0;
};

export const subWeaponKnucklePercentMATKModifier = (
  character: Character
) => {
  return character.subWeapon.type === "knuckle" ? -15 : 0;
};

export const subWeaponArrowPercentMDEFModifier = (
  character: Character
) => {
  return character.subWeapon.type === "arrow" ? -25 : 0;
};

export const subWeaponArrowPercentDEFModifier = (character: Character) => {
  return character.subWeapon.type === "arrow" ? -25 : 0;
};

export const dualSwordPercentAccuracyModifier = (character: Character) => {
  return isDualWielder(character)
    ? -55 + dualSwordMasteryPercentAccuracyPenaltyReduction(character)
    : 0;
};

export const dualSwordPercentCriticalRateModifier = (
  character: Character
) => {
  return isDualWielder(character)
    ? -55 + dualSwordMasteryPercentCriticalRatePenaltyReduction(character)
    : 0;
};
