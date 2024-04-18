import { Character } from "../../types";

export const quickSlashLevel = (character: Character) =>
  character.skills.bladeSkills.quickSlash.level;

export const quickSlashTotalPercentASPD = (character: Character) =>
  (
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "two-handed-sword"
  ) ?
    quickSlashLevel(character)
  : 0;

export const quickSlashTotalFlatASPD = (character: Character) =>
  (
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "two-handed-sword"
  ) ?
    quickSlashLevel(character) * 10
  : 0;
