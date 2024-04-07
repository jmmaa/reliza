import { Character } from "../../types";

export const intimidatingPowerTotalFlatATK = (character: Character) => {
  const skillLevel = character.skills.battleSkills.intimidatingPower.level;
  const total = (character.level * (2.5 * skillLevel)) / 100;

  return total;
};
