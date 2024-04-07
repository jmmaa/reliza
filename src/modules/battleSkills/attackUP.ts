import { Character } from "../../types";

export const attackUPTotalFlatATK = (character: Character) => {
  const skillLevel = character.skills.battleSkills.attackUP.level;
  const total = (character.level * (2.5 * skillLevel)) / 100;

  return total;
};
