import { Character } from "../../types";

export const longRangeLevel = (character: Character) =>
  character.skills.shotSkills.longRange.level;

export const longRangeTotalDamageMultiplier = (character: Character) =>
  longRangeLevel(character);
