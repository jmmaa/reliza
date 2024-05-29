import type { Config } from "../../../types";
import { get, sum, flattenedStats, floor } from "../../utils";

export const totalMagicDamageToElementBasedFromINT = (config: Config) =>
  floor(config["character.INT"] / 10);

export const totalDamageToDark = (config: Config) =>
  flattenedStats(config).map(get("damageToDark")).reduce(sum, 0);

export const totalDamageToLight = (config: Config) =>
  flattenedStats(config).map(get("damageToLight")).reduce(sum, 0);

export const totalDamageToFire = (config: Config) =>
  flattenedStats(config).map(get("damageToFire")).reduce(sum, 0);

export const totalDamageToEarth = (config: Config) =>
  flattenedStats(config).map(get("damageToEarth")).reduce(sum, 0);

export const totalDamageToWind = (config: Config) =>
  flattenedStats(config).map(get("damageToWind")).reduce(sum, 0);

export const totalDamageToWater = (config: Config) =>
  flattenedStats(config).map(get("damageToWater")).reduce(sum, 0);
