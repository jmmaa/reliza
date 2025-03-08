import { type StatCalcConfig } from "../types";
import { add, flattenedStats, total } from "../utils";

export const totalPercentSTRFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_STR")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentSTR = (config: StatCalcConfig) =>
  totalPercentSTRFromEquipment(config);

export const totalFlatSTRFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_STR")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatSTR = (config: StatCalcConfig) =>
  totalFlatSTRFromEquipment(config);

export const totalSTR = (config: StatCalcConfig) =>
  total(
    config.properties.STR,
    totalPercentSTR(config),
    totalFlatSTR(config),
  );

export const calculateSTR = (config: StatCalcConfig) => ({
  totalBaseSTR: config.properties.STR,
  totalPercentSTR: totalPercentSTR(config),
  totalFlatSTR: totalFlatSTR(config),
  totalSTR: totalSTR(config),
});
