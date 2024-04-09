import { Character } from "../../types";
import { floor } from "../utils";

export const criticalSpearTotalPercentCriticalRate = (
  character: Character,
) => {
  const skillLevel = character.skills.halberdSkills.criticalSpear.level;

  const total =
    character.mainWeapon.type === "halberd" ? floor(skillLevel * 0.5) : 0;

  return total;
};

export const criticalSpearTotalFlatCriticalRate = (
  character: Character,
) => {
  const skillLevel = character.skills.bladeSkills.swordMastery.level;

  const total =
    character.mainWeapon.type === "halberd"
      ? floor(skillLevel * 0.5 + 0.5)
      : 0;
  return total;
};
