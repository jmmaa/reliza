import { type StatCalcConfig } from "../types";
import {
  add,
  flattenedStats,
  mononofuSkills,
  regislets,
  survivalSkills,
  total,
} from "../utils";

import { totalINT } from "./INT";

export const bushidoFlatMaxMPPassive = (config: StatCalcConfig) =>
  mononofuSkills(config).bushido.level * 10;

export const regisletMaxMPBoostFlatMaxMP = (config: StatCalcConfig) =>
  regislets(config).maxMPBoost.level;

export const MPBoostFlatMaxMPPassive = (config: StatCalcConfig) =>
  survivalSkills(config).MPBoost.level * 30;

export const totalBaseMaxMP = (config: StatCalcConfig) =>
  config.properties.personalStatName === "TEC" ?
    config.properties.personalStatValue > 0 ?
      Math.floor(
        100 +
          config.properties.level +
          totalINT(config) / 10 +
          (config.properties.personalStatValue - 1),
      )
    : Math.floor(100 + config.properties.level + totalINT(config) / 10)
  : 0;

export const totalPercentMaxMP = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.percentMaxMP)
    .reduce(add, 0);

export const totalFlatMaxMPFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatMaxMP)
    .reduce(add, 0) + regisletMaxMPBoostFlatMaxMP(config);

export const totalFlatMaxMPFromSkills = (config: StatCalcConfig) =>
  bushidoFlatMaxMPPassive(config) + MPBoostFlatMaxMPPassive(config);

export const totalFlatMaxMP = (config: StatCalcConfig) =>
  totalFlatMaxMPFromEquipment(config) + totalFlatMaxMPFromSkills(config);

export const totalMaxMP = (config: StatCalcConfig) =>
  total(
    totalBaseMaxMP(config),
    totalPercentMaxMP(config),
    totalFlatMaxMP(config),
  );

export const calculateMaxMP = (config: StatCalcConfig) => ({
  totalBaseMaxMP: totalBaseMaxMP(config),
  totalPercentMaxMP: totalPercentMaxMP(config),
  totalFlatMaxMP: totalFlatMaxMP(config),
  totalMaxMP: totalMaxMP(config),
});
