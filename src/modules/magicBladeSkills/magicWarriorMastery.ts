import { Character } from "../../types";

export const magicWarriorMasteryTotalPercentATKPenaltyReduction = (
  character: Character
) => {
  const isSubMD = character.subWeapon.type === "magic-device";
  const isOHSmain = character.mainWeapon.type === "one-handed-sword";
  const skillLevel =
    character.skills.magicBladeSkills.magicWarriorMastery.level;

  return isSubMD ? skillLevel + (isOHSmain ? 5 : 0) : 0;
};

export const magicWarriorMasteryTotalFlatMATK = (character: Character) => {
  const skillLevel =
    character.skills.magicBladeSkills.magicWarriorMastery.level;

  const total =
    character.subWeapon.type === "magic-device"
      ? skillLevel * 2 + (skillLevel - 5 > 0 ? skillLevel - 5 : 0)
      : 0;

  return total;
};

export const magicWarriorMasteryTotalFlatCSPD = (character: Character) => {
  const skillLevel =
    character.skills.magicBladeSkills.magicWarriorMastery.level;

  const total =
    character.subWeapon.type === "magic-device" ? skillLevel * 10 : 0;

  return total;
};

export const magicWarriorMasteryTotalPercentCSPD = (
  character: Character
) => {
  const skillLevel =
    character.skills.magicBladeSkills.magicWarriorMastery.level;

  const total =
    character.subWeapon.type === "magic-device"
      ? skillLevel * 1 + Math.max(skillLevel - 5, 0)
      : 0;

  return total;
};
