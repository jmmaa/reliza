import { type StatCalcConfig } from "../types";
import { add, flattenedStats, total } from "../utils";

export const totalPercentDEXFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_DEX")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentDEX = (config: StatCalcConfig) =>
  totalPercentDEXFromEquipment(config);

export const totalFlatDEXFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_DEX")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatDEX = (config: StatCalcConfig) =>
  totalFlatDEXFromEquipment(config);

export const totalDEX = (config: StatCalcConfig) =>
  total(
    config.properties.DEX,
    totalPercentDEX(config),
    totalFlatDEX(config),
  );

export const calculateDEX = (config: StatCalcConfig) => ({
  totalBaseDEX: config.properties.DEX,
  totalPercentDEX: totalPercentDEX(config),
  totalFlatDEX: totalFlatDEX(config),
  totalDEX: totalDEX(config),
});
