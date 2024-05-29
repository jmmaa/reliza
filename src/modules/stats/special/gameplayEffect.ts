import type { Config } from "../../../types";
import { flattenedStats, get, sum } from "../../utils";

export const isFlinchUnavailable = (config: Config) =>
  flattenedStats(config)
    .map(get("flinchUnavailable"))
    .reduce((prev, next) => prev || next);

export const isStunUnavailable = (config: Config) =>
  flattenedStats(config)
    .map(get("stunUnavailable"))
    .reduce((prev, next) => prev || next);

export const isTumbleUnavailable = (config: Config) =>
  flattenedStats(config)
    .map(get("tumbleUnavailable"))
    .reduce((prev, next) => prev || next);

export const itemCooldown = (config: Config) =>
  10 - flattenedStats(config).map(get("itemCooldown")).reduce(sum, 0);

export const invincibleAid = (config: Config) =>
  flattenedStats(config).map(get("invincibleAid")).reduce(sum, 0);
