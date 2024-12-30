import { type Config } from "../data";
import { add, flattenedStats } from "../utils";

export const totalGuardBreak = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "GUARD_BREAK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateGuardBreak = (config: Config) => ({
  totalGuardBreak: totalGuardBreak(config),
});
