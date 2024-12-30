import { godspeedTotalFlatAGI } from "..";
import { type Config } from "../data";
import { flattenedStats, add, total } from "../utils";

export const totalPercentAGIFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_AGI")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentAGI = (config: Config) =>
  totalPercentAGIFromEquipment(config);

export const totalFlatAGIFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_AGI")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAGI = (config: Config) =>
  totalFlatAGIFromEquipment(config) + godspeedTotalFlatAGI(config);

export const totalAGI = (config: Config) =>
  total(
    config.properties.AGI,
    totalPercentAGI(config),
    totalFlatAGI(config),
  );

export const calculateAGI = (config: Config) => ({
  totalBaseAGI: config.properties.AGI,
  totalPercentAGI: totalPercentAGI(config),
  totalFlatAGI: totalFlatAGI(config),
  totalAGI: totalAGI(config),
});
