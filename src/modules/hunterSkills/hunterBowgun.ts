import { Character } from "../../types";
import { floor } from "../utils";

export const hunterBowgunTotalBaseATK = (character: Character) => {
  const skillLevel = character.skills.hunterSkills.hunterBowgun.level;
  const baseWeaponATK = character.mainWeapon.ATK;
  const isMainBWG = character.mainWeapon.type === "bowgun";
  const isSubArrow = character.subWeapon.type === "arrow";
  const isSubNone = character.subWeapon.type === "none";

  const total =
    isMainBWG && !(isSubArrow || isSubNone)
      ? (1 + (floor(skillLevel * 1.5) * 5) / 3 / 100) * baseWeaponATK
      : 0;

  return total;
};
