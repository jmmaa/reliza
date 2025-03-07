import { type Config } from "../data";
import { add, flattenedStats, survivalSkills, total } from "../utils";
import { totalMaxHP } from "./maxHP";

export const safeRestFlatSkillNHPRPassive = (config: Config) =>
  survivalSkills(config).safeRest.level * 10;

export const safeRestPercentSkillNHPRPassive = (config: Config) =>
  survivalSkills(config).safeRest.level * 10;

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

export const totalPercentNHPRFromSkills = (config: Config) =>
  safeRestPercentSkillNHPRPassive(config);

export const totalFlatNHPRFromSkills = (config: Config) =>
  safeRestFlatSkillNHPRPassive(config);

export const totalNHPR = (config: Config) =>
  total(
    totalBaseNHPR(config),
    totalFlatNHPRFromSkills(config),
    totalFlatNHPRFromSkills(config),
  );

export const calculateNHPR = (config: Config) => ({
  totalBaseNHPR: totalBaseNHPR(config),
  totalPercentNHPRFromEquipment: totalPercentNHPRFromEquipment(config),
  totalPercentNHPRFromSkills: totalPercentNHPRFromSkills(config),
  totalFlatNHPRFromEquipment: totalFlatNHPRFromEquipment(config),
  totalFlatNHPRFromSkills: totalFlatNHPRFromSkills(config),
  totalNHPR: totalNHPR(config),
});

// TODO:
// - add state where the character is out from combat
