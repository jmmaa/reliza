import { StatId, type Config } from "../../../types";
import { get, sum, flattenedStats } from "../../utils";

export const totalLongRangeDamage = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.longRangeDamage)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalShortRangeDamage = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.shortRangeDamage)
    .map((stat) => stat[1])
    .reduce(sum, 0);
