import { type Config } from "../data";
import { flattenedStats, add, total } from "../utils";

export const totalPercentVITFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_VIT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentVIT = (config: Config) =>
  totalPercentVITFromEquipment(config);

export const totalFlatVITFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_VIT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatVIT = (config: Config) =>
  totalFlatVITFromEquipment(config);

export const totalVIT = (config: Config) =>
  total(
    config.properties.VIT,
    totalPercentVIT(config),
    totalFlatVIT(config),
  );

export const calculateVIT = (config: Config) => ({
  totalBaseVIT: config.properties.VIT,
  totalPercentVIT: totalPercentVIT(config),
  totalFlatVIT: totalFlatVIT(config),
  totalVIT: totalVIT(config),
});
