import { Character } from "../../types";

export const ninjaSpiritTotalFlatDodge = (character: Character) => {
  const skillLevel = character.skills.ninjaSkills.ninjaSpirit.level;
  const total = skillLevel;

  return total;
};
