import { Character } from "../../types";

export const magicalShieldLevel = (character: Character) =>
  character.skills.shieldSkills.magicalShield.level;

export const magicalShieldTotalFlatMDEF = (character: Character) =>
  character.subWeapon.type === "shield" ?
    magicalShieldLevel(character) * 2
  : 0;

export const magicalShieldTotalPercentMDEF = (character: Character) =>
  character.subWeapon.type === "shield" ?
    magicalShieldLevel(character)
  : 0;

export const magicalShieldTotalFlatMaxHP = (character: Character) =>
  character.subWeapon.type === "shield" ?
    magicalShieldLevel(character) * 50
  : 0;

export const magicalShieldTotalMagicalResistance = (
  character: Character,
) =>
  character.subWeapon.type === "shield" ?
    magicalShieldLevel(character)
  : 0;
