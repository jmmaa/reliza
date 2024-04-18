import { Character } from "../../types";

export const forceShieldLevel = (character: Character) =>
  character.skills.shieldSkills.forceShield.level;

export const forceShieldTotalFlatDEF = (character: Character) =>
  character.subWeapon.type === "shield" ?
    forceShieldLevel(character) * 2
  : 0;

export const forceShieldTotalPercentDEF = (character: Character) =>
  character.subWeapon.type === "shield" ? forceShieldLevel(character) : 0;

export const forceShieldTotalFlatMaxHP = (character: Character) =>
  character.subWeapon.type === "shield" ?
    forceShieldLevel(character) * 50
  : 0;

export const forceShieldTotalPhysicalResistance = (
  character: Character,
) =>
  character.subWeapon.type === "shield" ? forceShieldLevel(character) : 0;
