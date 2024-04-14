import { Character } from "../../types";
import { floor } from "../utils";

export const defenseMasteryTotalFlatDEF = (character: Character) => {
  const skillLevel = character.skills.battleSkills.defenseMastery.level;

  const total = floor(character.level * ((2.5 * skillLevel) / 100));

  return total;
};

export const defenseMasteryTotalFlatMDEF = (character: Character) => {
  const skillLevel = character.skills.battleSkills.defenseMastery.level;

  const total = floor(character.level * ((2.5 * skillLevel) / 100));

  return total;
};
