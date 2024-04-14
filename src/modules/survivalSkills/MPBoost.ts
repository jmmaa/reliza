import { Character } from "../../types";

export const MPBoostTotalFlatMaxMP = (character: Character) => {
  const skillLevel = character.skills.survivalSkills.MPBoost.level;

  const total = skillLevel * 30;

  return total;
};
