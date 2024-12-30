import { type Config } from "../data";
import { add, flattenedStats } from "../utils";

export const totalMagicDamageToElementBasedFromINT = (config: Config) =>
  Math.floor(config.properties.INT / 10);

export const totalDamageToDark = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_DARK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToLight = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_LIGHT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToFire = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_FIRE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToEarth = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_EARTH")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToWind = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_WIND")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToWater = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_WATER")
    .map((stat) => stat[1])
    .reduce(add, 0);
