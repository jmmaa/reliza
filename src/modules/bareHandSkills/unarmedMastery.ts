import { Character } from "../../types";
import { floor } from "../utils";

export const unarmedMasteryTotalFlatWeaponATK = (character: Character) => {
  const skillLevel = character.skills.bareHandSkills.unarmedMastery.level;
  const isMainBareHand = character.mainWeapon.type === "bare-hand";
  const isSubNone = character.subWeapon.type === "none";

  const total =
    isMainBareHand && isSubNone
      ? floor((character.level * skillLevel) / 10)
      : 0;

  return total;
};

export const unarmedMasteryTotalQiChargeLimit = (character: Character) => {
  const skillLevel = character.skills.bareHandSkills.unarmedMastery.level;
  const isMainBareHand = character.mainWeapon.type === "bare-hand";
  const isSubNone = character.subWeapon.type === "none";

  const total =
    isMainBareHand && isSubNone
      ? skillLevel < 10
        ? 10 + skillLevel * 10
        : 100 + character.level
      : 0;

  return total;
};
