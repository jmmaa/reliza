import { Character } from "../../types";

export const magicUPTotalFlatMATK = (character: Character) => {
  const skillLevel = character.skills.battle.magicUP.level;

  const total = (character.level * (2.5 * skillLevel)) / 100;

  return total;
};

export const increasedEnergyTotalFlatMATK = (character: Character) => {
  const skillLevel = character.skills.battle.increasedEnergy.level;

  const total = (character.level * (2.5 * skillLevel)) / 100;

  return total;
};
