import { type Config } from "../data";
import { flattenedStats, add, total } from "../utils";

export const totalPercentDEXFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_DEX")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentDEX = (config: Config) =>
  totalPercentDEXFromEquipment(config);

export const totalFlatDEXFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_DEX")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatDEX = (config: Config) =>
  totalFlatDEXFromEquipment(config);

export const totalDEX = (config: Config) =>
  total(
    config.properties.DEX,
    totalPercentDEX(config),
    totalFlatDEX(config),
  );

export const calculateDEX = (config: Config) => ({
  totalBaseDEX: config.properties.DEX,
  totalPercentDEX: totalPercentDEX(config),
  totalFlatDEX: totalFlatDEX(config),
  totalDEX: totalDEX(config),
});
