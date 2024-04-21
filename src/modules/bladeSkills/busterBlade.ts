import { Character } from "../../types";

export const busterBlade = (character: Character) =>
  character.skills.bladeSkills.busterBlade;

export const busterBladeLevel = (character: Character) =>
  busterBlade(character).level;

export const busterBladeIsActive = (character: Character) =>
  busterBlade(character).isActive;

export const busterBladeTotalPercentWeaponATK = (character: Character) =>
  (
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "two-handed-sword"
  ) ?
    busterBladeIsActive(character) ? busterBladeLevel(character)
    : 0
  : 0;
