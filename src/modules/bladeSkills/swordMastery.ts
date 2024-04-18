import { Character } from "../../types";

export const swordMasteryLevel = (character: Character) =>
  character.skills.bladeSkills.swordMastery.level;

export const swordMasteryTotalPercentATK = (character: Character) =>
  (
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "two-handed-sword"
  ) ?
    swordMasteryLevel(character) >= 8 ? 3
    : swordMasteryLevel(character) >= 3 ? 2
    : 1
  : 0;

export const swordMasteryTotalPercentWeaponATK = (character: Character) =>
  (
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "two-handed-sword"
  ) ?
    swordMasteryLevel(character) * 3
  : 0;
