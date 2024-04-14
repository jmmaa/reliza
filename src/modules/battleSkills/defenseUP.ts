import { Character } from "../../types";
import { floor } from "../utils";

export const defenseUPTotalFlatDEF = (character: Character) => {
  const skillLevel = character.skills.battleSkills.defenseUP.level;

  const total = floor(character.level * ((2.5 * skillLevel) / 100));

  return total;
};

export const defenseUPTotalFlatMDEF = (character: Character) => {
  const skillLevel = character.skills.battleSkills.defenseUP.level;

  const total = floor(character.level * ((2.5 * skillLevel) / 100));

  return total;
};
