import { Config } from "../../types";
import { isMainOHS, isMainTHS } from "../utils";

export const quickSlashLevel = (config: Config) =>
  config["character.skills.bladeSkills.quickSlash.level"];

export const quickSlashTotalPercentASPD = (config: Config) =>
  isMainOHS(config) || isMainTHS(config) ? quickSlashLevel(config) : 0;

export const quickSlashTotalFlatASPD = (config: Config) =>
  isMainOHS(config) || isMainTHS(config) ?
    quickSlashLevel(config) * 10
  : 0;
