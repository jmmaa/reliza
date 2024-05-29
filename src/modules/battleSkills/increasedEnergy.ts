import type { Config } from "../../types";

export const increasedEnergyLevel = (config: Config) =>
  config["character.skills.battleSkills.increasedEnergy.level"];

export const increasedEnergyTotalFlatMATK = (config: Config) =>
  (config["character.level"] * (2.5 * increasedEnergyLevel(config))) / 100;
