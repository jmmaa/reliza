import { Character } from "../../types";

import { totalMainWeaponATK } from "../stats";
import { floor } from "../utils";

export const conversionTotalFlatMATK = (character: Character) => {
  const skillLevel = character.skills.magicBladeSkills.conversion.level;

  const isAllowed =
    character.mainWeapon.type === "two-handed-sword" ||
    character.mainWeapon.type === "bowgun" ||
    character.mainWeapon.type === "knuckle" ||
    character.mainWeapon.type === "one-handed-sword";

  const total = isAllowed
    ? floor(
        ((skillLevel * skillLevel) / 100) *
          (character.mainWeapon.type === "knuckle"
            ? totalMainWeaponATK(character) * 0.5
            : totalMainWeaponATK(character))
      )
    : 0;

  return total;
};
