import { type StatCalcConfig } from "../types";
import { add, flattenedStats } from "../utils";

export const totalAilmentResistanceFromEquipment = (
  config: StatCalcConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "AILMENT_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalAilmentResistanceFromMTL = (config: StatCalcConfig) =>
  config.properties.personalStatName === "MTL" ?
    Math.floor(config.properties.personalStatValue / 3.4)
  : 0;

export const totalAilmentResistance = (config: StatCalcConfig) =>
  totalAilmentResistanceFromEquipment(config) +
  totalAilmentResistanceFromMTL(config);

export const calculateAilmentResistance = (config: StatCalcConfig) => ({
  totalAilmentResistanceFromEquipment:
    totalAilmentResistanceFromEquipment(config),
  totalAilmentResistanceFromMTL: totalAilmentResistanceFromMTL(config),
  totalAilmentResistance: totalAilmentResistance(config),
});
