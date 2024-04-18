import { Character } from "../../types";

export const martialMasteryLevel = (character: Character) =>
  character.skills.martialSkills.martialMastery.level;

export const martialMasteryTotalPercentATK = (character: Character) =>
  character.mainWeapon.type === "knuckle" ?
    martialMasteryLevel(character) >= 8 ? 3
    : martialMasteryLevel(character) >= 3 ? 2
    : 1
  : 0;

export const martialMasteryTotalPercentWeaponATK = (
  character: Character,
) =>
  character.mainWeapon.type === "knuckle" ?
    martialMasteryLevel(character) * 3
  : 0;
