import { type StatCalcConfig } from "../types";
import { add, flattenedStats } from "../utils";

export const totalLongRangeDamage = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.longRangeDamage)
    .reduce(add, 0);

export const totalShortRangeDamage = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.shortRangeDamage)
    .reduce(add, 0);

export const calculateRangeDamage = (config: StatCalcConfig) => ({
  totalLongRangeDamage: totalLongRangeDamage(config),
  totalShortRangeDamage: totalShortRangeDamage(config),
});
