import type { IntermediateConfig } from "../../types";
import { isMainOHS, isMainTHS } from "../utils";

export const quickSlashLevel = (config: IntermediateConfig) =>
  config["character.skills.bladeSkills.quickSlash.level"];

export const quickSlashTotalPercentASPD = (config: IntermediateConfig) =>
  isMainOHS(config) || isMainTHS(config) ? quickSlashLevel(config) : 0;

export const quickSlashTotalFlatASPD = (config: IntermediateConfig) =>
  isMainOHS(config) || isMainTHS(config) ?
    quickSlashLevel(config) * 10
  : 0;
