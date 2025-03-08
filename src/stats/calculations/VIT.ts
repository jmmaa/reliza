import { type StatCalcConfig } from "../types";
import { add, flattenedStats, total } from "../utils";

export const totalPercentVITFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_VIT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentVIT = (config: StatCalcConfig) =>
  totalPercentVITFromEquipment(config);

export const totalFlatVITFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_VIT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatVIT = (config: StatCalcConfig) =>
  totalFlatVITFromEquipment(config);

export const totalVIT = (config: StatCalcConfig) =>
  total(
    config.properties.VIT,
    totalPercentVIT(config),
    totalFlatVIT(config),
  );

export const calculateVIT = (config: StatCalcConfig) => ({
  totalBaseVIT: config.properties.VIT,
  totalPercentVIT: totalPercentVIT(config),
  totalFlatVIT: totalFlatVIT(config),
  totalVIT: totalVIT(config),
});
