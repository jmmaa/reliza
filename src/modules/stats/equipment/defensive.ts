import { Character } from "../../../types";

export const totalEquipmentDEF = (character: Character) =>
  (character.subWeapon.type === "shield" ? character.subWeapon.DEF : 0) +
  character.armor.DEF +
  character.additionalGear.DEF +
  character.specialGear.DEF;

export const totalRefinementReduction = (character: Character) =>
  ((
    character.subWeapon.type === "shield" ||
    (character.subWeapon.type === "magic-device" && // magic skin
      character.skills.magicBladeSkills.magicSkin.level > 0)
  ) ?
    character.subWeapon.refinement
  : 0) +
  character.armor.refinement +
  character.additionalGear.refinement;
