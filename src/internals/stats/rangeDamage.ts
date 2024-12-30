import { type Config } from "../data";
import { add, flattenedStats } from "../utils";

export const totalLongRangeDamage = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "LONG_RANGE_DAMAGE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalShortRangeDamage = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "SHORT_RANGE_DAMAGE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateRangeDamage = (config: Config) => ({
  totalLongRangeDamage: totalLongRangeDamage(config),
  totalShortRangeDamage: totalShortRangeDamage(config),
});
