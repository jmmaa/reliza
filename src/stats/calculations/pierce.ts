import { type StatCalcConfig } from "../types";
import { add, flattenedStats } from "../utils";

export const totalMagicPierce = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "MAGIC_PIERCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPhysicalPierce = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PHYSICAL_PIERCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculatePierce = (config: StatCalcConfig) => ({
  totalMagicPierce: totalMagicPierce(config),
  totalPhysicalPierce: totalPhysicalPierce(config),
});
