import { type Config } from "../data";
import { add, dualSwordSkills, flattenedStats, total } from "../utils";

export const godSpeedFlatAGIPassive = (config: Config) => {
  const level = dualSwordSkills(config).godspeed.level;

  return (
    level === 1 ? 1
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
  totalFlatAGIFromEquipment(config) + godSpeedFlatAGIPassive(config);

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
