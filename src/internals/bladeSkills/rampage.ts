import { type Config } from "../data";
import { remedialRampageLevel } from "../regislets";
import { bladeSkills, isUsingMainOHS, isUsingMainTHS } from "../utils";

export const rampage = (config: Config) => bladeSkills(config).rampage;

export const rampageLevel = (config: Config) => rampage(config).level;

export const rampageBuffIsActive = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    bladeSkills(config).astute.isActive
  : false;

export const rampageAutoAttackSkillMultiplier = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    10 +
    4 * rampageLevel(config) +
    (isUsingMainOHS(config) ? 5 * rampageLevel(config) : 0)
  : 0;

export const rampageFinalBlowSkillMultiplierForFirstTwoHits = (
  config: Config,
) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    50 + 5 * rampageLevel(config) + (isUsingMainTHS(config) ? 100 : 0)
  : 0;

export const rampageFinalBlowSkillMultiplierForThirdHit = (
  config: Config,
) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    250 + 5 * rampageLevel(config) + (isUsingMainTHS(config) ? 300 : 0)
  : 0;

export const rampageMPCost = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ? 500 : 0;

export const rampageFinalBlowSkillConstantForAllHits = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    300 + 20 * rampageLevel(config)
  : 0;

export const rampageFlatAMPRBuffAmount = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    Math.floor(2.5 * rampageLevel(config))
  : 0;

export const rampageBuffDurationInSeconds = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ? 600 : 0;

export const calculateRampage = (config: Config) => ({
  rampageLevel: rampageLevel(config),
  rampageAutoAttackSkillMultiplier:
    rampageAutoAttackSkillMultiplier(config),
  rampageBuffIsActive: rampageBuffIsActive(config),
  rampageFinalBlowSkillMultiplierForFirstTwoHits:
    remedialRampageLevel(config) <= 0 ?
      rampageFinalBlowSkillMultiplierForFirstTwoHits(config)
    : 0,
  rampageFinalBlowSkillMultiplierForThirdHit:
    remedialRampageLevel(config) <= 0 ?
      rampageFinalBlowSkillMultiplierForThirdHit(config)
    : 0,
  rampageMPCost: rampageMPCost(config),
  rampageFlatAMPRBuffAmount: rampageFlatAMPRBuffAmount(config),
});
