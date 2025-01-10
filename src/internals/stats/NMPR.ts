import { type Config } from "../data";
import { add, flattenedStats } from "../utils";
import { totalMaxMP } from "./maxMP";

export const totalBaseNMPR = (config: Config) =>
  Math.floor(totalMaxMP(config) / 100);

export const totalPercentNMPRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_NATURAL_MP_REGEN")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatNMPRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_NATURAL_MP_REGEN")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateNMPR = (config: Config) => ({
  totalBaseNMPR: totalBaseNMPR(config),
  totalPercentNMPRFromEquipment: totalPercentNMPRFromEquipment(config),
  totalFlatNMPRFromEquipment: totalFlatNMPRFromEquipment(config),
});

// TODO:
// - add skill NMPR and total NMPR
