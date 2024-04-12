import { Character } from "../../types";

export const heavyArmorMasteryTotalGuardRecharge = (
  character: Character,
) => {
  const skillLevel = character.skills.guardSkills.heavyArmorMastery.level;
  const isHeavyArmored = character.armor.type === "heavy";

  const total = isHeavyArmored ? skillLevel : 0;

  return total;
};
