import { Character } from "../../types";

export const advancedEvasionTotalEvasionRecharge = (
  character: Character,
) => {
  const skillLevel = character.skills.guardSkills.advancedEvasion.level;
  const isLightArmored = character.armor.type === "light";

  const total = isLightArmored ? skillLevel : 0;

  return total;
};
