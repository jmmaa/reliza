import { type StatCalcConfig } from "../types";
import { add, flattenedStats } from "../utils";

export const totalAnticipate = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "ANTICIPATE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateAnticipate = (config: StatCalcConfig) => ({
  totalAnticipate: totalAnticipate(config),
});
