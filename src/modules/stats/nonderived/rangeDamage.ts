import { Config } from "../../../types";
import { get, sum, flattenedStats } from "../../utils";

export const totalLongRangeDamage = (config: Config) =>
  flattenedStats(config).map(get("longRangeDamage")).reduce(sum, 0);

export const totalShortRangeDamage = (config: Config) =>
  flattenedStats(config).map(get("shortRangeDamage")).reduce(sum, 0);
