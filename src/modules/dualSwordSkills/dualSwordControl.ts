import { Character } from "../../types";
import { isDualWielder } from "../utils";

export const dualSwordControlTotalPercentCriticalRate = (
  character: Character,
) => {
  const skillLevel =
    character.skills.dualSwordSkills.dualSwordControl.level;

  return isDualWielder(character) ? 5 + skillLevel * 3 : 0;
};

export const dualSwordControlTotalPercentAccuracy = (
  character: Character,
) => {
  const skillLevel =
    character.skills.dualSwordSkills.dualSwordControl.level;

  return isDualWielder(character) ? 5 + skillLevel * 3 : 0;
};

export const dualSwordControlTotalFlatASPD = (character: Character) => {
  const skillLevel =
    character.skills.dualSwordSkills.dualSwordControl.level;

  return isDualWielder(character) ? 50 * skillLevel : 0;
};
