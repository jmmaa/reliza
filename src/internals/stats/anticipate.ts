import { type Config } from "../data";
import { add, flattenedStats } from "../utils";

export const totalAnticipate = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "ANTICIPATE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateAnticipate = (config: Config) => ({
  totalAnticipate: totalAnticipate(config),
});
