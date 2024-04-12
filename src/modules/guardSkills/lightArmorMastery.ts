import { Character } from "../../types";

export const lightArmorMasteryTotalEvasionRecharge = (
  character: Character,
) => {
  const skillLevel = character.skills.guardSkills.lightArmorMastery.level;
  const isLightArmored = character.armor.type === "light";

  const total = isLightArmored ? skillLevel : 0;

  return total;
};
