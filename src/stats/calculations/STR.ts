import { type StatCalcConfig } from "../types";
import { add, flattenedStats, total } from "../utils";

export const totalPercentSTRFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.percentSTR)
    .reduce(add, 0);

export const totalPercentSTR = (config: StatCalcConfig) =>
  totalPercentSTRFromEquipment(config);

export const totalFlatSTRFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatSTR)
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
