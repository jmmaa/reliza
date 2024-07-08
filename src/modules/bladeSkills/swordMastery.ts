import type { IntermediateConfig } from "../../types";
import { isMainOHS, isMainTHS } from "../utils";

export const swordMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.bladeSkills.swordMastery.level"];

export const swordMasteryTotalPercentATK = (config: IntermediateConfig) =>
  isMainOHS(config) || isMainTHS(config) ?
    swordMasteryLevel(config) >= 8 ? 3
    : swordMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const swordMasteryTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  isMainOHS(config) || isMainTHS(config) ?
    swordMasteryLevel(config) * 3
  : 0;
