import { Character } from "../../types";

export const halberdMasteryLevel = (character: Character) =>
  character.skills.halberdSkills.halberdMastery.level;

export const halberdMasteryTotalPercentATK = (character: Character) =>
  character.mainWeapon.type === "halberd" ?
    halberdMasteryLevel(character) >= 8 ? 3
    : halberdMasteryLevel(character) >= 3 ? 2
    : 1
  : 0;

export const halberdMasteryTotalPercentWeaponATK = (
  character: Character,
) =>
  character.mainWeapon.type === "halberd" ?
    halberdMasteryLevel(character) * 3
  : 0;
