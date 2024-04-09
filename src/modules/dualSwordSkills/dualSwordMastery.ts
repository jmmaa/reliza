import { Character } from "../../types";
import { isDualWielder } from "../utils";

export const dualSwordMasteryTotalPercentCriticalRate = (
  character: Character,
) => {
  const skillLevel =
    character.skills.dualSwordSkills.dualSwordMastery.level;

  return isDualWielder(character) ? -55 + skillLevel * 3 : 0;
};

export const dualSwordMasteryTotalPercentAccuracy = (
  character: Character,
) => {
  const skillLevel =
    character.skills.dualSwordSkills.dualSwordMastery.level;

  return isDualWielder(character) ? -55 + skillLevel * 3 : 0;
};
