import { type Config } from "../data";
import { bladeSkills, isUsingMainOHS, isUsingMainTHS } from "../utils";

export const astuteLevel = (config: Config) =>
  bladeSkills(config).astute.level;

export const astuteMPCost = (config: Config) =>
  isUsingMainOHS(config) ? 100 : 200;

export const astuteSkillMultiplier = (config: Config) =>
  150 + 10 * astuteLevel(config) + (isUsingMainTHS(config) ? 50 : 0);

export const astuteSkillConstant = (config: Config) =>
  150 + 5 * astuteLevel(config);

export const astuteHitCount = (config: Config) => 1;

export const astuteMotionSpeed = (config: Config) =>
  5 * astuteLevel(config);

export const astuteCriticalRateBuffAmount = (config: Config) =>
  isUsingMainTHS(config) ? 50 : 25;

export const astuteCriticalRateBuffDuration = (config: Config) =>
  astuteLevel(config) >= 1 && astuteLevel(config) <= 5 ?
    5
  : (config: Config) =>
      astuteLevel(config) >= 6 && astuteLevel(config) <= 10 ? 10 : 10;

export const calculateAstute = (config: Config) => ({
  astuteLevel: astuteLevel(config),
  astuteMPCost: astuteMPCost(config),
  astuteCriticalRateBuffAmount: astuteCriticalRateBuffAmount(config),
  astuteCriticalRateBuffDuration: astuteCriticalRateBuffDuration(config),
  astuteHitCount: astuteHitCount(config),
  astuteMotionSpeed: astuteMotionSpeed(config),
  astuteSkillConstant: astuteSkillConstant(config),
  astuteSkillMultiplier: astuteSkillMultiplier(config),
});
