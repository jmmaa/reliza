import { type Config } from "../data";
import { add, flattenedStats } from "../utils";
import { totalMaxHP } from "./maxHP";

export const totalBaseNHPR = (config: Config) =>
  Math.floor(totalMaxHP(config) / 25) *
    (100 + totalPercentNHPRFromEquipment(config)) +
  10 +
  totalFlatNHPRFromEquipment(config);

export const totalPercentNHPRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_NATURAL_HP_REGEN")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatNHPRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_NATURAL_HP_REGEN")
    .map((stat) => stat[1])
    .reduce(add, 0);

// export const totalNHPR = (config: Config) =>

export const calculateNHPR = (config: Config) => ({
  totalBaseNHPR: totalBaseNHPR(config),
  totalPercentNHPRFromEquipment: totalPercentNHPRFromEquipment(config),
  totalFlatNHPRFromEquipment: totalFlatNHPRFromEquipment(config),
});

// TODO:
// - add skill NHPR and total NHPR
