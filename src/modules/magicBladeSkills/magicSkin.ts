import { Character } from "../../types";

export const magicSkinLevel = (character: Character) =>
  character.skills.magicBladeSkills.magicSkin.level;

export const magicSkinTotalRefinementReduction = (character: Character) =>
  (
    character.subWeapon.type === "magic-device" &&
    magicSkinLevel(character) > 0
  ) ?
    character.subWeapon.refinement
  : 0;
