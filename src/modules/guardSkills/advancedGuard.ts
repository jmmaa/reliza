import { Character } from "../../types";
import { floor } from "../utils";

export const advancedGuardTotalGuardRecharge = (character: Character) => {
  const skillLevel = character.skills.guardSkills.advancedGuard.level;
  const isHeavyArmored = character.armor.type === "heavy";

  const total = isHeavyArmored ? skillLevel : 0;

  return total;
};

export const advancedGuardTotalGuardPower = (character: Character) => {
  const skillLevel = character.skills.guardSkills.advancedGuard.level;
  const isHeavyArmored = character.armor.type === "heavy";

  const total = isHeavyArmored ? floor((1 + skillLevel) / 2) : 0;

  return total;
};
