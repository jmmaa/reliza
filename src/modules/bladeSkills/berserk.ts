import type { Config } from "../../types";
import { floor, isDualWielder, isMainOHS, isMainTHS } from "../utils";

export const berserkIsActive = (config: Config) =>
  config["character.skills.bladeSkills.berserk.isActive"];
export const berserkLevel = (config: Config) =>
  config["character.skills.bladeSkills.berserk.level"];

export const berserkTotalPercentASPD = (config: Config) =>
  berserkIsActive(config) ? berserkLevel(config) * 10 : 0;

export const berserkTotalFlatASPD = (config: Config) =>
  berserkIsActive(config) ? berserkLevel(config) * 100 : 0;

export const berserkTotalFlatCriticalRate = (config: Config) =>
  berserkIsActive(config) ? floor(berserkLevel(config) * 2.5) : 0;

export const berserkTotalStability = (config: Config) =>
  berserkIsActive(config) ?
    isMainOHS(config) || isMainTHS(config) ?
      floor(berserkLevel(config) * 2.5)
    : berserkLevel(config) * 5
  : 0;

export const berserkTotalPercentDEF = (config: Config) =>
  berserkIsActive(config) ?
    isMainOHS(config) && !isDualWielder(config) ?
      floor((100 - berserkLevel(config)) / 2)
    : 100 - berserkLevel(config)
  : 0;

export const berserkTotalPercentMDEF = (config: Config) =>
  berserkIsActive(config) ?
    isMainOHS(config) && !isDualWielder(config) ?
      floor((100 - berserkLevel(config)) / 2)
    : 100 - berserkLevel(config)
  : 0;
