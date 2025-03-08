import { type StatCalcConfig } from "../types";
import { add, flattenedStats, total } from "../utils";

export const totalPercentINTFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_INT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentINT = (config: StatCalcConfig) =>
  totalPercentINTFromEquipment(config);

export const totalFlatINTFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_INT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatINT = (config: StatCalcConfig) =>
  totalFlatINTFromEquipment(config);

export const totalINT = (config: StatCalcConfig) =>
  total(
    config.properties.INT,
    totalPercentINT(config),
    totalFlatINT(config),
  );

export const calculateINT = (config: StatCalcConfig) => ({
  totalBaseINT: config.properties.INT,
  totalPercentINT: totalPercentINT(config),
  totalFlatINT: totalFlatINT(config),
  totalINT: totalINT(config),
});
