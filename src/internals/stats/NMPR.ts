import {
  shortRestTotalFlatSkillNMPR,
  shortRestTotalPercentSkillNMPR,
} from "..";
import { type Config } from "../data";
import { add, flattenedStats, total } from "../utils";
import { totalMaxMP } from "./maxMP";

export const totalBaseNMPR = (config: Config) =>
  Math.floor(totalMaxMP(config) / 100) *
    ((100 + totalPercentNMPRFromEquipment(config)) / 100) +
  totalFlatNMPRFromEquipment(config);

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

export const totalNMPR = (config: Config) =>
  total(
    totalBaseNMPR(config),
    totalPercentNMPRFromSkills(config),
    totalFlatNMPRFromSkills(config),
  );

export const totalFlatNMPRFromSkills = (config: Config) =>
  shortRestTotalFlatSkillNMPR(config);

export const totalPercentNMPRFromSkills = (config: Config) =>
  shortRestTotalPercentSkillNMPR(config);

export const calculateNMPR = (config: Config) => ({
  totalBaseNMPR: totalBaseNMPR(config),
  totalPercentNMPRFromEquipment: totalPercentNMPRFromEquipment(config),
  totalFlatNMPRFromSkills: totalFlatNMPRFromSkills(config),
  totalPercentNMPRFromSkills: totalPercentNMPRFromSkills(config),
  totalFlatNMPRFromEquipment: totalFlatNMPRFromEquipment(config),
  totalNMPR,
});

// TODO:
// - add state where the character is out from combat
