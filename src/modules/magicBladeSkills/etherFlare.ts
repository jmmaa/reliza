import { Character } from "../../types";
import { floor } from "../utils";

export const etherFlareTotalFlatAMPR = (character: Character) => {
  const isSubMD = character.subWeapon.type === "magic-device";

  const skillLevel = character.skills.magicBladeSkills.etherFlare.level;

  const total = isSubMD
    ? 15 + floor(skillLevel / 6) * 5 + floor(skillLevel / 5) * 5
    : 0;

  return total;
};

// not included in calc yet!
