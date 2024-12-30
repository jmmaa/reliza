import { type Config } from "../data";
import { flattenedStats, add } from "../utils";

export const totalAilmentResistanceFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "AILMENT_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalAilmentResistanceFromMTL = (config: Config) =>
  config.properties.personalStatName === "MTL" ?
    Math.floor(config.properties.personalStatValue / 3.4)
  : 0;

export const totalAilmentResistance = (config: Config) =>
  totalAilmentResistanceFromEquipment(config) +
  totalAilmentResistanceFromMTL(config);

export const calcuateAilmentResistance = (config: Config) => ({
  totalAilmentResistanceFromEquipment:
    totalAilmentResistanceFromEquipment(config),
  totalAilmentResistanceFromMTL: totalAilmentResistanceFromMTL(config),
  totalAilmentResistance: totalAilmentResistance(config),
});
