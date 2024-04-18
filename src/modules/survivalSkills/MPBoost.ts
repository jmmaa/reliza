import { Character } from "../../types";

export const MPBoostLevel = (character: Character) =>
  character.skills.survivalSkills.MPBoost.level;

export const MPBoostTotalFlatMaxMP = (character: Character) =>
  MPBoostLevel(character) * 30;
