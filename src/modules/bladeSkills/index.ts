import { Character } from "../../types";

export const swordMasteryTotalPercentATK = (character: Character) => {
  const skillLevel = character.skills.blade.swordMastery.level;

  const total =
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "two-handed-sword"
      ? skillLevel >= 8
        ? 3
        : skillLevel >= 3
        ? 2
        : 1
      : 0;

  return total;
};

export const swordMasteryTotalPercentWeaponATK = (
  character: Character
) => {
  const skillLevel = character.skills.blade.swordMastery.level;

  const total =
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "two-handed-sword"
      ? skillLevel * 3
      : 0;
  return total;
};
