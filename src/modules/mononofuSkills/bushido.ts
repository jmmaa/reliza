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

export const bushidoTotalFlatMaxHP = (character: Character) => {
  const skillLevel = character.skills.mononofuSkills.bushido.level;

  const total = skillLevel * 10;

  return total;
};

export const bushidoTotalFlatMaxMP = (character: Character) => {
  const skillLevel = character.skills.mononofuSkills.bushido.level;

  const total = skillLevel * 10;

  return total;
};

export const bushidoTotalFlatAccuracy = (character: Character) => {
  const skillLevel = character.skills.mononofuSkills.bushido.level;

  const total = skillLevel;

  return total;
};
