import { type StatCalcConfig } from "../types";
import { add, flattenedStats, survivalSkills, total } from "../utils";
import { totalMaxHP } from "./maxHP";

export const safeRestFlatSkillNHPRPassive = (config: StatCalcConfig) =>
  survivalSkills(config).safeRest.level * 10;

export const safeRestPercentSkillNHPRPassive = (config: StatCalcConfig) =>
  survivalSkills(config).safeRest.level * 10;

export const totalBaseNHPR = (config: StatCalcConfig) =>
  Math.floor(totalMaxHP(config) / 25) *
    (100 + totalPercentNHPRFromEquipment(config)) +
  10 +
  totalFlatNHPRFromEquipment(config);

export const totalPercentNHPRFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.percentNHPR)
    .reduce(add, 0);

export const totalFlatNHPRFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatNHPR)
    .reduce(add, 0);

export const totalPercentNHPRFromSkills = (config: StatCalcConfig) =>
  safeRestPercentSkillNHPRPassive(config);

export const totalFlatNHPRFromSkills = (config: StatCalcConfig) =>
  safeRestFlatSkillNHPRPassive(config);

export const totalNHPR = (config: StatCalcConfig) =>
  total(
    totalBaseNHPR(config),
    totalFlatNHPRFromSkills(config),
    totalFlatNHPRFromSkills(config),
  );

export const calculateNHPR = (config: StatCalcConfig) => ({
  totalBaseNHPR: totalBaseNHPR(config),
  totalPercentNHPRFromEquipment: totalPercentNHPRFromEquipment(config),
  totalPercentNHPRFromSkills: totalPercentNHPRFromSkills(config),
  totalFlatNHPRFromEquipment: totalFlatNHPRFromEquipment(config),
  totalFlatNHPRFromSkills: totalFlatNHPRFromSkills(config),
  totalNHPR: totalNHPR(config),
});

// TODO:
// - add state where the character is out from combat
