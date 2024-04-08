import { Character } from "../../types";

export const magicMasteryTotalPercentMATK = (character: Character) => {
  const skillLevel = character.skills.magicSkills.magicMastery.level;

  const total =
    character.mainWeapon.type === "staff" ||
    character.mainWeapon.type === "magic-device"
      ? skillLevel >= 8
        ? 3
        : skillLevel >= 3
        ? 2
        : 1
      : 0;

  return total;
};

export const magicMasteryTotalPercentWeaponATK = (
  character: Character
) => {
  const skillLevel = character.skills.magicSkills.magicMastery.level;

  const total =
    character.mainWeapon.type === "staff" ||
    character.mainWeapon.type === "magic-device"
      ? skillLevel * 3
      : 0;
  return total;
};
