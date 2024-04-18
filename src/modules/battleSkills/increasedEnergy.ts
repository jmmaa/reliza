import { Character } from "../../types";

export const increasedEnergyLevel = (character: Character) =>
  character.skills.battleSkills.increasedEnergy.level;

export const increasedEnergyTotalFlatMATK = (character: Character) =>
  (character.level * (2.5 * increasedEnergyLevel(character))) / 100;
