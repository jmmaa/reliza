import { type StatCalcConfig } from "../types";
import { add, flattenedStats } from "../utils";

export const totalMagicDamageToElementBasedFromINT = (
  config: StatCalcConfig,
) => Math.floor(config.properties.INT / 10);

export const totalDamageToDark = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_DARK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToLight = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_LIGHT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToFire = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_FIRE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToEarth = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_EARTH")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToWind = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_WIND")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToWater = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_WATER")
    .map((stat) => stat[1])
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
});
