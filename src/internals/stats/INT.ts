import { type Config } from "../data";
import { flattenedStats, add, total } from "../utils";

export const totalPercentINTFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_INT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentINT = (config: Config) =>
  totalPercentINTFromEquipment(config);

export const totalFlatINTFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_INT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatINT = (config: Config) =>
  totalFlatINTFromEquipment(config);

export const totalINT = (config: Config) =>
  total(
    config.properties.INT,
    totalPercentINT(config),
    totalFlatINT(config),
  );

export const calculateINT = (config: Config) => ({
  totalBaseINT: config.properties.INT,
  totalPercentINT: totalPercentINT(config),
  totalFlatINT: totalFlatINT(config),
  totalINT: totalINT(config),
});
