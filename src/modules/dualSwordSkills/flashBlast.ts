import { Character } from "../../types";
import { isDualWielder } from "../utils";

export const flashBlastTotalPercentUnsheatheAttack = (
  character: Character,
) => {
  const skillLevel = character.skills.dualSwordSkills.flashBlast.level;

  const total = skillLevel;

  return total;
};

export const flashBlastTotalPercentMainWeaponATK = (
  character: Character,
) => {
  const skillLevel = character.skills.dualSwordSkills.flashBlast.level;

  const total = isDualWielder(character) && skillLevel > 0 ? 25 : 0;

  return total;
};
