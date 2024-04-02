import { Character } from "../../types";

export const magicWarriorMasteryTotalPercentATKPenaltyReduction = (
  character: Character
) => {
  const isSubMD = character.subWeapon.type === "magic-device";
  const isOHSmain = character.mainWeapon.type === "one-handed-sword";
  const skillLevel = character.skills.magicBlade.magicWarriorMastery.level;

  return isSubMD ? skillLevel + (isOHSmain ? 5 : 0) : 0;
};
