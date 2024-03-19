import { Character } from "../../../std/types";

export const totalEquipmentDEF = (character: Character) => {
  return (
    (character.subWeapon.type === "shield" ? character.subWeapon.DEF : 0) +
    character.armor.DEF +
    character.additionalGear.DEF +
    character.specialGear.DEF
  );
};

export const totalRefinementReduction = (character: Character) => {
  return (
    (character.subWeapon.type === "shield" ||
    (character.subWeapon.type === "magic-device" && // magic skin
      character.skills.magicBlade.magicSkin.level > 0)
      ? character.subWeapon.refinement
      : 0) +
    character.armor.refinement +
    character.additionalGear.refinement
  );
};
