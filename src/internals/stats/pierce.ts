import { type Config } from "../data";
import { add, flattenedStats } from "../utils";

export const totalMagicPierce = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "MAGIC_PIERCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPhysicalPierce = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PHYSICAL_PIERCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculatePierce = (config: Config) => ({
  totalMagicPierce: totalMagicPierce(config),
  totalPhysicalPierce: totalPhysicalPierce(config),
});
