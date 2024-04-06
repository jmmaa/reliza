import { Character } from "../../types";

export const magicSkinTotalRefinementReduction = (
  character: Character
) => {
  const subweapon = character.subWeapon;
  const isSubMD = subweapon.type === "magic-device";
  const skillLevel = character.skills.magicBladeSkills.magicSkin.level;

  const total = isSubMD && skillLevel > 0 ? subweapon.refinement : 0;

  return total;
};

// not included in calcs yet
