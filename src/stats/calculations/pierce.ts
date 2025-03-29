import { type StatCalcConfig } from "../types";
import { add, flattenedStats } from "../utils";

export const totalMagicPierce = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.magicPierce)
    .reduce(add, 0);

export const totalPhysicalPierce = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.physicalPierce)
    .reduce(add, 0);

export const calculatePierce = (config: StatCalcConfig) => ({
  totalMagicPierce: totalMagicPierce(config),
  totalPhysicalPierce: totalPhysicalPierce(config),
});
