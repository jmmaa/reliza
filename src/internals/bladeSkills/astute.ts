import { type Config } from "../data";
import { mainWeaponElement } from "../stats";
import { bladeSkills, isUsingMainOHS, isUsingMainTHS } from "../utils";

export const astuteLevel = (config: Config) =>
  bladeSkills(config).astute.level;

export const astuteMPCost = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    isUsingMainOHS(config) ? 100
    : 200
  : 0;

export const astuteSkillMultiplier = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    150 + 10 * astuteLevel(config) + (isUsingMainTHS(config) ? 50 : 0)
  : 0;

export const astuteSkillConstant = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    150 + 5 * astuteLevel(config)
  : 0;

export const astuteHitCount = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ? 1 : 0;

export const astuteMotionSpeed = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    5 * astuteLevel(config)
  : 0;

export const astuteCriticalRateBuffAmount = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    isUsingMainTHS(config) ? 50
    : 25
  : 0;

export const astuteCriticalRateBuffDuration = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    astuteLevel(config) >= 1 && astuteLevel(config) <= 5 ?
      5
    : (config: Config) =>
        astuteLevel(config) >= 6 && astuteLevel(config) <= 10 ? 10 : 10
  : 0;

export const astuteElement = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    mainWeaponElement(config)
  : "NEUTRAL_ELEMENT";

export const calculateAstute = (config: Config) => ({
  astuteLevel: astuteLevel(config),
  astuteMPCost: astuteMPCost(config),
  astuteCriticalRateBuffAmount: astuteCriticalRateBuffAmount(config),
  astuteCriticalRateBuffDuration: astuteCriticalRateBuffDuration(config),
  astuteHitCount: astuteHitCount(config),
  astuteMotionSpeed: astuteMotionSpeed(config),
  astuteSkillConstant: astuteSkillConstant(config),
  astuteSkillMultiplier: astuteSkillMultiplier(config),
  astuteElement: astuteElement(config),
});
