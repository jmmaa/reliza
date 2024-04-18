import { Character } from "../../types";

export const magicMasteryLevel = (character: Character) =>
  character.skills.magicSkills.magicMastery.level;

export const magicMasteryTotalPercentMATK = (character: Character) =>
  (
    character.mainWeapon.type === "staff" ||
    character.mainWeapon.type === "magic-device"
  ) ?
    magicMasteryLevel(character) >= 8 ? 3
    : magicMasteryLevel(character) >= 3 ? 2
    : 1
  : 0;

export const magicMasteryTotalPercentWeaponATK = (character: Character) =>
  (
    character.mainWeapon.type === "staff" ||
    character.mainWeapon.type === "magic-device"
  ) ?
    magicMasteryLevel(character) * 3
  : 0;
