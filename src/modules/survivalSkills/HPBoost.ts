import { Character } from "../../types";

export const HPBoostLevel = (character: Character) =>
  character.skills.survivalSkills.HPBoost.level;

export const HPBoostTotalPercentMaxHP = (character: Character) =>
  HPBoostLevel(character) * 2;

export const HPBoostTotalFlatMaxHP = (character: Character) =>
  HPBoostLevel(character) * 100;
