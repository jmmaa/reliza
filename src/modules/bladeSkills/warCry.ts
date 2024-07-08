import type { IntermediateConfig } from "../../types";
import { isMainTHS } from "../utils";

export const warCryLevel = (config: IntermediateConfig) =>
  config["character.skills.bladeSkills.warCry.level"];

export const warCryIsActive = (config: IntermediateConfig) =>
  config["character.skills.bladeSkills.warCry.isActive"];

export const warCryTotalPercentATK = (config: IntermediateConfig) =>
  warCryIsActive(config) ?
    isMainTHS(config) ? warCryLevel(config) * 10 + 5
    : warCryLevel(config) * 10
  : 0;
