import { type StatCalcConfig } from "../types";
import { add, dualSwordSkills, flattenedStats, total } from "../utils";

export const godSpeedFlatAGIPassive = (config: StatCalcConfig) => {
  const level = dualSwordSkills(config).godspeed.level;

  return (
    level <= 0 ? 0
    : level === 1 ? 1
    : level === 2 ? 2
    : level === 3 ? 3
    : level === 4 ? 4
    : level === 5 ? 5
    : level === 6 ? 7
    : level === 7 ? 9
    : level === 8 ? 11
    : level === 9 ? 13
    : level === 10 ? 15
    : 15
  );
};

export const totalPercentAGIFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.percentAGI)
    .reduce(add, 0);

export const totalPercentAGI = (config: StatCalcConfig) =>
  totalPercentAGIFromEquipment(config);

export const totalFlatAGIFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatAGI)
    .reduce(add, 0);

export const totalFlatAGI = (config: StatCalcConfig) =>
  totalFlatAGIFromEquipment(config) + godSpeedFlatAGIPassive(config);

export const totalAGI = (config: StatCalcConfig) =>
  total(
    config.properties.AGI,
    totalPercentAGI(config),
    totalFlatAGI(config),
  );

export const calculateAGI = (config: StatCalcConfig) => ({
  totalBaseAGI: config.properties.AGI,
  totalPercentAGI: totalPercentAGI(config),
  totalFlatAGI: totalFlatAGI(config),
  totalAGI: totalAGI(config),
});
