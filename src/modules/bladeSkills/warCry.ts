import type { Config } from "../../types";
import { isMainTHS } from "../utils";

export const warCryLevel = (config: Config) =>
  config["character.skills.bladeSkills.warCry.level"];

export const warCryIsActive = (config: Config) =>
  config["character.skills.bladeSkills.warCry.isActive"];

export const warCryTotalPercentATK = (config: Config) =>
  warCryIsActive(config) ?
    isMainTHS(config) ? warCryLevel(config) * 10 + 5
    : warCryLevel(config) * 10
  : 0;
