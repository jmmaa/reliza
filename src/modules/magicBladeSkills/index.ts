import { Character } from "../../types";

import { totalMainWeaponATK } from "../stats";
import { floor } from "../utils";

export const magicWarriorMasteryTotalPercentATKPenaltyReduction = (
  character: Character
) => {
  const isSubMD = character.subWeapon.type === "magic-device";
  const isOHSmain = character.mainWeapon.type === "one-handed-sword";
  const skillLevel = character.skills.magicBlade.magicWarriorMastery.level;

  return isSubMD ? skillLevel + (isOHSmain ? 5 : 0) : 0;
};

export const magicWarriorMasteryTotalFlatMATK = (character: Character) => {
  const skillLevel = character.skills.magicBlade.magicWarriorMastery.level;

  const total =
    character.subWeapon.type === "magic-device"
      ? skillLevel * 2 + (skillLevel - 5 > 0 ? skillLevel - 5 : 0)
      : 0;

  return total;
};

export const magicWarriorMasteryTotalFlatCSPD = (character: Character) => {
  const skillLevel = character.skills.magicBlade.magicWarriorMastery.level;

  const total =
    character.subWeapon.type === "magic-device" ? skillLevel * 10 : 0;

  return total;
};

export const magicWarriorMasteryTotalPercentCSPD = (
  character: Character
) => {
  const skillLevel = character.skills.magicBlade.magicWarriorMastery.level;

  const total =
    character.subWeapon.type === "magic-device"
      ? skillLevel * 1 + Math.max(skillLevel - 5, 0)
      : 0;

  return total;
};

export const conversionTotalFlatMATK = (character: Character) => {
  const skillLevel = character.skills.magicBlade.conversion.level;

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
