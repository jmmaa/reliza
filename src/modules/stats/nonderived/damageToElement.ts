import { type IntermediateConfig } from "../../../types";
import { StatId } from "../../utils";
import { get, sum, flattenedStats, floor } from "../../utils";

export const totalMagicDamageToElementBasedFromINT = (
  config: IntermediateConfig,
) => floor(config["character.INT"] / 10);

export const totalDamageToDark = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToDark)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalDamageToLight = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToLight)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalDamageToFire = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToFire)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalDamageToEarth = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToEarth)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalDamageToWind = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToWind)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalDamageToWater = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.damageToWater)
    .map((stat) => stat[1])
    .reduce(sum, 0);
