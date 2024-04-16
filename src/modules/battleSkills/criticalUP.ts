import { Character } from "../../types";
import { floor } from "../utils";

export const criticalUPTotalFlatCriticalRate = (character: Character) => {
  const skillLevel = character.skills.battleSkills.criticalUP.level;

  const total = floor(skillLevel / 2);

  return total;
};

export const criticalUPTotalPercentCriticalDamage = (
  character: Character,
) => {
  const skillLevel = character.skills.battleSkills.criticalUP.level;

  const total = floor(skillLevel / 2);

  return total;
};
