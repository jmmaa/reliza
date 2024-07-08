import type { IntermediateConfig } from "../../types";

export const increasedEnergyLevel = (config: IntermediateConfig) =>
  config["character.skills.battleSkills.increasedEnergy.level"];

export const increasedEnergyTotalFlatMATK = (config: IntermediateConfig) =>
  (config["character.level"] * (2.5 * increasedEnergyLevel(config))) / 100;
