import { Character } from "../../types";

export const accuracyUPTotalFlatAccuracy = (character: Character) => {
  const skillLevel = character.skills.battleSkills.accuracyUP.level;

  return skillLevel;
};
