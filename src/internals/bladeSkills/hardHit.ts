import { type Config } from "../data";
import { mainWeaponElement } from "../stats";
import {
  bladeSkills,
  isUsingDualSwords,
  isUsingMainOHS,
  isUsingMainTHS,
} from "../utils";

export const hardHitLevel = (config: Config) =>
  bladeSkills(config).hardhit.level;

export const hardHitMPCost = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ? 100 : 0;

export const hardHitSkillMultiplier = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    100 + 5 * hardHitLevel(config) + (isUsingMainTHS(config) ? 50 : 0)
  : 0;

export const hardHitSkillConstant = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    50 + 5 * hardHitLevel(config)
  : 0;

export const hardHitAilmentChance = (config: Config) => {
  const level = hardHitLevel(config);

  return (
    isUsingMainOHS(config) || isUsingMainTHS(config) ?
      level === 1 ? 9
      : level === 2 ? 14
      : level === 3 ? 19
      : level === 4 ? 23
      : level === 5 ? 27
      : level === 6 ? 32
      : level === 7 ? 37
      : level === 8 ? 41
      : level === 9 ? 45
      : level === 10 ? 50
      : 50 + (isUsingMainOHS(config) || isUsingDualSwords(config) ? 50 : 0)
    : 0
  );
};

export const hardHitHitCount = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ? 1 : 0;

export const hardHitElement = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    mainWeaponElement(config)
  : "NEUTRAL_ELEMENT";

export const calculateHardHit = (config: Config) => ({
  hardHitLevel: hardHitLevel(config),
  hardHitMPCost: hardHitMPCost(config),
  hardHitSkillMultiplier: hardHitSkillMultiplier(config),
  hardHitSkillConstant: hardHitSkillConstant(config),
  hardHitAilmentChance: hardHitAilmentChance(config),
  hardHitHitCount: hardHitHitCount(config),
  hardHitElement: hardHitElement(config),
});
