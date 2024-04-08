import { Character } from "../../types";

export const martialMasteryTotalPercentATK = (character: Character) => {
  const skillLevel = character.skills.martialSkills.martialMastery.level;

  const total =
    character.mainWeapon.type === "knuckle"
      ? skillLevel >= 8
        ? 3
        : skillLevel >= 3
        ? 2
        : 1
      : 0;

  return total;
};

export const martialMasteryTotalPercentWeaponATK = (
  character: Character
) => {
  const skillLevel = character.skills.martialSkills.martialMastery.level;

  const total =
    character.mainWeapon.type === "knuckle" ? skillLevel * 3 : 0;

  return total;
};
