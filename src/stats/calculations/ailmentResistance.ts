import { type StatCalcConfig } from "../types";
import { add, D, flattenedStats } from "../utils";

export const totalAilmentResistanceFromEquipment = (
  config: StatCalcConfig,
) =>
  flattenedStats(config)
    .map((stat) => stat.ailmentResistance)
    .reduce(add, 0);

export const totalAilmentResistanceFromMTL = (config: StatCalcConfig) => {
  const PERSONAL_STAT = config.properties.personalStatName;
  const PERSONAL_STAT_VALUE = D(config.properties.personalStatValue);

  return PERSONAL_STAT === "MTL" ?
      D.floor(PERSONAL_STAT_VALUE.dividedBy(D(3.4))).toNumber()
    : 0;
};

export const totalAilmentResistance = (config: StatCalcConfig) =>
  totalAilmentResistanceFromEquipment(config) +
  totalAilmentResistanceFromMTL(config);

export const calculateAilmentResistance = (config: StatCalcConfig) => ({
  totalAilmentResistanceFromEquipment:
    totalAilmentResistanceFromEquipment(config),
  totalAilmentResistanceFromMTL: totalAilmentResistanceFromMTL(config),
  totalAilmentResistance: totalAilmentResistance(config),
});
