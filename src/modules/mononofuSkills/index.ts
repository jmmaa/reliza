import { Character } from "../../types";

export const bushidoTotalPercentATK = (character: Character) => {
  const skillLevel = character.skills.mononofuSkills.bushido.level;

  const total =
    character.mainWeapon.type === "katana"
      ? skillLevel >= 8
        ? 3
        : skillLevel >= 3
        ? 2
        : 1
      : 0;

  return total;
};

export const bushidoTotalPercentWeaponATK = (character: Character) => {
  const skillLevel = character.skills.mononofuSkills.bushido.level;

  const total =
    character.mainWeapon.type === "katana" ? skillLevel * 3 : 0;

  return total;
};
