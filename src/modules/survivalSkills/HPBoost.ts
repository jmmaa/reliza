import { Character } from "../../types";

export const HPBoostTotalPercentMaxHP = (character: Character) => {
  const skillLevel = character.skills.survivalSkills.HPBoost.level;

  const total = skillLevel * 2;

  return total;
};

export const HPBoostTotalFlatMaxHP = (character: Character) => {
  const skillLevel = character.skills.survivalSkills.HPBoost.level;

  const total = skillLevel * 100;

  return total;
};
