import { Character } from "../../types";

export const magicUPTotalFlatMATK = (character: Character) => {
  const skillLevel = character.skills.battleSkills.magicUP.level;

  const total = (character.level * (2.5 * skillLevel)) / 100;

  return total;
};

export const increasedEnergyTotalFlatMATK = (character: Character) => {
  const skillLevel = character.skills.battleSkills.increasedEnergy.level;

  const total = (character.level * (2.5 * skillLevel)) / 100;

  return total;
};
