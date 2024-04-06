import { Character } from "../../types";

export const warCryTotalPercentATK = (character: Character) => {
  const warCry = character.skills.bladeSkills.warCry;
  const skillLevel = warCry.level;
  const isActive = warCry.isActive;

  const isMainTHS = character.mainWeapon.type === "two-handed-sword";

  const total = isActive
    ? isMainTHS
      ? skillLevel * 10 + 5
      : skillLevel * 10
    : 0;

  return total;
};
