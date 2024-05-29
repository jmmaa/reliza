import type { Config } from "../../types";
import { floor } from "../utils";

export const highCycleIsActive = (config: Config) =>
  config["character.skills.supportSkills.highCycle.isActive"];

export const highCycleLevel = (config: Config) =>
  config["character.skills.supportSkills.highCycle.level"];

export const highCycleTotalFlatCSPD = (config: Config) =>
  highCycleIsActive(config) ? 50 + highCycleLevel(config) * 50 : 0;

export const highCycleTotalPercentCSPD = (config: Config) =>
  highCycleIsActive(config) ? highCycleLevel(config) * 25 : 0;

export const highCycleTotalPercentNMPR = (config: Config) =>
  highCycleIsActive(config) ?
    floor(-50.5 - highCycleLevel(config) * 2.5)
  : 0;

export const highCycleTotalPercentAMPR = (config: Config) =>
  highCycleIsActive(config) ?
    floor(-90.5 - highCycleLevel(config) * 1.5)
  : 0;
