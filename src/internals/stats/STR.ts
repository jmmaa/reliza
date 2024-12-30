import { type Config } from "../data";
import { flattenedStats, add, total } from "../utils";

export const totalPercentSTRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_STR")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentSTR = (config: Config) =>
  totalPercentSTRFromEquipment(config);

export const totalFlatSTRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_STR")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatSTR = (config: Config) =>
  totalFlatSTRFromEquipment(config);

export const totalSTR = (config: Config) =>
  total(
    config.properties.STR,
    totalPercentSTR(config),
    totalFlatSTR(config),
  );

export const calculateSTR = (config: Config) => ({
  totalBaseSTR: config.properties.STR,
  totalPercentSTR: totalPercentSTR(config),
  totalFlatSTR: totalFlatSTR(config),
  totalSTR: totalSTR(config),
});
