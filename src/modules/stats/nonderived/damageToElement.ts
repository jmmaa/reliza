import { StatId, type Config } from "../../../types";
import { get, sum, flattenedStats, floor } from "../../utils";

export const totalMagicDamageToElementBasedFromINT = (config: Config) =>
  floor(config["character.INT"] / 10);

export const totalDamageToDark = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToDark)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalDamageToLight = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToLight)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalDamageToFire = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToFire)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalDamageToEarth = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToEarth)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalDamageToWind = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToWind)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalDamageToWater = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToWater)
    .map((stat) => stat[1])
    .reduce(sum, 0);
