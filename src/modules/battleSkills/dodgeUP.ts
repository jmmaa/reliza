import { Character } from "../../types";

export const dodgeUPTotalFlatDodge = (character: Character) => {
  const skillLevel = character.skills.battleSkills.dodgeUP.level;

  return skillLevel;
};
