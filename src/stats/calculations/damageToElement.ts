import { type StatCalcConfig } from "../types";
import { add, flattenedStats } from "../utils";

export const totalMagicDamageToElementBasedFromINT = (
  config: StatCalcConfig,
) => Math.floor(config.properties.INT / 10);

export const totalDamageToDark = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.damageToDark)
    .reduce(add, 0);

export const totalDamageToLight = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.damageToLight)
    .reduce(add, 0);

export const totalDamageToFire = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.damageToFire)
    .reduce(add, 0);

export const totalDamageToEarth = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.damageToEarth)
    .reduce(add, 0);

export const totalDamageToWind = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.damageToWind)
    .reduce(add, 0);

export const totalDamageToWater = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.damageToWater)
    .reduce(add, 0);

export const totalDamageToNeutral = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.damageToNeutral)
    .reduce(add, 0);

export const calculateDamageToElement = (config: StatCalcConfig) => ({
  totalMagicDamageToElementBasedFromINT:
    totalMagicDamageToElementBasedFromINT(config),
  totalDamageToEarth: totalDamageToEarth(config),
  totalDamageToFire: totalDamageToFire(config),
  totalDamageToWater: totalDamageToWater(config),
  totalDamageToWind: totalDamageToWind(config),
  totalDamageToDark: totalDamageToDark(config),
  totalDamageToLight: totalDamageToLight(config),
  totalDamageToNeutral: totalDamageToNeutral(config),
});
