import { Character } from "../../types";
import { floor, isDualWielder } from "../utils";

export const berserk = (character: Character) =>
  character.skills.bladeSkills.berserk;

export const berserkIsActive = (character: Character) =>
  berserk(character).isActive;
export const berserkLevel = (character: Character) =>
  berserk(character).level;

export const berserkTotalPercentASPD = (character: Character) =>
  berserkIsActive(character) ? berserkLevel(character) * 10 : 0;

export const berserkTotalFlatASPD = (character: Character) =>
  berserkIsActive(character) ? berserkLevel(character) * 100 : 0;

export const berserkTotalFlatCriticalRate = (character: Character) =>
  berserkIsActive(character) ? floor(berserkLevel(character) * 2.5) : 0;

export const berserkTotalStability = (character: Character) =>
  berserkIsActive(character) ?
    (
      character.mainWeapon.type === "one-handed-sword" ||
      character.mainWeapon.type === "two-handed-sword"
    ) ?
      floor(berserkLevel(character) * 2.5)
    : berserkLevel(character) * 5
  : 0;

export const berserkTotalPercentDEF = (character: Character) =>
  berserkIsActive(character) ?
    (
      character.mainWeapon.type === "one-handed-sword" &&
      !isDualWielder(character)
    ) ?
      floor((100 - berserkLevel(character)) / 2)
    : 100 - berserkLevel(character)
  : 0;

export const berserkTotalPercentMDEF = (character: Character) =>
  berserkIsActive(character) ?
    (
      character.mainWeapon.type === "one-handed-sword" &&
      !isDualWielder(character)
    ) ?
      floor((100 - berserkLevel(character)) / 2)
    : 100 - berserkLevel(character)
  : 0;
