import { Character } from "../../types";
import { isDualWielder } from "../utils";

export const dualSwordMasteryPercentCriticalRatePenaltyReduction = (
  character: Character
) => {
  const skillLevel =
    character.skills.dualSwordSkills.dualSwordMastery.level;

  return isDualWielder(character) ? skillLevel * 3 : 0;
};

export const dualSwordMasteryPercentAccuracyPenaltyReduction = (
  character: Character
) => {
  const skillLevel =
    character.skills.dualSwordSkills.dualSwordMastery.level;

  return isDualWielder(character) ? skillLevel * 3 : 0;
};
