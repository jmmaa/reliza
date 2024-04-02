import { Character } from "../../types";

export const shieldMasteryPercentASPDPenaltyReduction = (
  character: Character
) => {
  const isSubShield = character.subWeapon.type === "shield";
  const skillLevel = character.skills.shield.shieldMastery.level;

  return isSubShield ? skillLevel * 5 : 0;
};
