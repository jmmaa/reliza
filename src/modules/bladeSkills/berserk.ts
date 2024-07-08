import type { IntermediateConfig } from "../../types";
import { floor, isDualWielder, isMainOHS, isMainTHS } from "../utils";

export const berserkIsActive = (config: IntermediateConfig) =>
  config["character.skills.bladeSkills.berserk.isActive"];
export const berserkLevel = (config: IntermediateConfig) =>
  config["character.skills.bladeSkills.berserk.level"];

export const berserkTotalPercentASPD = (config: IntermediateConfig) =>
  berserkIsActive(config) ? berserkLevel(config) * 10 : 0;

export const berserkTotalFlatASPD = (config: IntermediateConfig) =>
  berserkIsActive(config) ? berserkLevel(config) * 100 : 0;

export const berserkTotalFlatCriticalRate = (
  config: IntermediateConfig,
) => (berserkIsActive(config) ? floor(berserkLevel(config) * 2.5) : 0);

export const berserkTotalStability = (config: IntermediateConfig) =>
  berserkIsActive(config) ?
    isMainOHS(config) || isMainTHS(config) ?
      floor(berserkLevel(config) * 2.5)
    : berserkLevel(config) * 5
  : 0;

export const berserkTotalPercentDEF = (config: IntermediateConfig) =>
  berserkIsActive(config) ?
    isMainOHS(config) && !isDualWielder(config) ?
      floor((100 - berserkLevel(config)) / 2)
    : 100 - berserkLevel(config)
  : 0;

export const berserkTotalPercentMDEF = (config: IntermediateConfig) =>
  berserkIsActive(config) ?
    isMainOHS(config) && !isDualWielder(config) ?
      floor((100 - berserkLevel(config)) / 2)
    : 100 - berserkLevel(config)
  : 0;
