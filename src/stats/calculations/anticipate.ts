import { type StatCalcConfig } from "../types";
import { add, flattenedStats } from "../utils";

export const totalAnticipate = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.anticipate)
    .reduce(add, 0);

export const calculateAnticipate = (config: StatCalcConfig) => ({
  totalAnticipate: totalAnticipate(config),
});
