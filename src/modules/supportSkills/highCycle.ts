import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const highCycleIsActive = (config: IntermediateConfig) =>
  config["character.skills.supportSkills.highCycle.isActive"];

export const highCycleLevel = (config: IntermediateConfig) =>
  config["character.skills.supportSkills.highCycle.level"];

export const highCycleTotalFlatCSPD = (config: IntermediateConfig) =>
  highCycleIsActive(config) ? 50 + highCycleLevel(config) * 50 : 0;

export const highCycleTotalPercentCSPD = (config: IntermediateConfig) =>
  highCycleIsActive(config) ? highCycleLevel(config) * 25 : 0;

export const highCycleTotalPercentNMPR = (config: IntermediateConfig) =>
  highCycleIsActive(config) ?
    floor(-50.5 - highCycleLevel(config) * 2.5)
  : 0;

export const highCycleTotalPercentAMPR = (config: IntermediateConfig) =>
  highCycleIsActive(config) ?
    floor(-90.5 - highCycleLevel(config) * 1.5)
  : 0;
