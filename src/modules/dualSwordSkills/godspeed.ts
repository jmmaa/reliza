import { Character } from "../../types";
import { floor, isDualWielder } from "../utils";

export const godspeedTotalFlatAGI = (character: Character) => {
  const skillLevel = character.skills.dualSwordSkills.godspeed.level;

  const total = skillLevel + Math.max(skillLevel - 5, 0);

  return total;
};

export const godspeedTotalPercentUnsheatheAttack = (
  character: Character,
) => {
  const skillLevel = character.skills.dualSwordSkills.godspeed.level;

  const total = isDualWielder(character)
    ? skillLevel + 15
    : skillLevel + 5;

  return total;
};
