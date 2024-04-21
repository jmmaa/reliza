import { Character } from "../../types";

export const warCry = (character: Character) =>
  character.skills.bladeSkills.warCry;

export const warCryLevel = (character: Character) =>
  warCry(character).level;

export const warCryIsActive = (character: Character) =>
  warCry(character).isActive;

export const warCryTotalPercentATK = (character: Character) =>
  warCryIsActive(character) ?
    character.mainWeapon.type === "two-handed-sword" ?
      warCryLevel(character) * 10 + 5
    : warCryLevel(character) * 10
  : 0;
