import { Character } from "../../types";

export const quickSlashTotalPercentASPD = (character: Character) => {
  const isMainOHS = character.mainWeapon.type === "one-handed-sword";
  const isMainTHS = character.mainWeapon.type === "two-handed-sword";
  const skillLevel = character.skills.bladeSkills.quickSlash.level;

  const total = isMainOHS || isMainTHS ? skillLevel : 0;
  return total;
};

export const quickSlashTotalFlatASPD = (character: Character) => {
  const isMainOHS = character.mainWeapon.type === "one-handed-sword";
  const isMainTHS = character.mainWeapon.type === "two-handed-sword";
  const skillLevel = character.skills.bladeSkills.quickSlash.level;

  const total = isMainOHS || isMainTHS ? skillLevel * 10 : 0;
  return total;
};
