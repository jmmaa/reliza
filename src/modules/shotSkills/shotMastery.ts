import { Character } from "../../types";

export const shotMasteryTotalPercentATK = (character: Character) => {
  const skillLevel = character.skills.shotSkills.shotMastery.level;

  const total =
    character.mainWeapon.type === "bowgun" ||
    character.mainWeapon.type === "bow"
      ? skillLevel >= 8
        ? 3
        : skillLevel >= 3
        ? 2
        : 1
      : 0;

  return total;
};

export const shotMasteryTotalPercentWeaponATK = (character: Character) => {
  const skillLevel = character.skills.shotSkills.shotMastery.level;

  const total =
    character.mainWeapon.type === "bowgun" ||
    character.mainWeapon.type === "bow"
      ? skillLevel * 3
      : 0;
  return total;
};
