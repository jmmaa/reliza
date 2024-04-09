import { Character } from "../../types";

export const halberdMasteryTotalPercentATK = (character: Character) => {
  const skillLevel = character.skills.halberdSkills.halberdMastery.level;

  const total =
    character.mainWeapon.type === "halberd"
      ? skillLevel >= 8
        ? 3
        : skillLevel >= 3
          ? 2
          : 1
      : 0;

  return total;
};

export const halberdMasteryTotalPercentWeaponATK = (
  character: Character,
) => {
  const skillLevel = character.skills.halberdSkills.halberdMastery.level;

  const total =
    character.mainWeapon.type === "halberd" ? skillLevel * 3 : 0;
  return total;
};
