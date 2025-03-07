import { type Config } from "../data";
import {
  add,
  flattenedStats,
  mononofuSkills,
  regislets,
  survivalSkills,
  total,
} from "../utils";

import { totalINT } from "./INT";

export const bushidoFlatMaxMPPassive = (config: Config) =>
  mononofuSkills(config).bushido.level * 10;

export const regisletMaxMPBoostFlatMaxMP = (config: Config) =>
  regislets(config).maxMPBoost.level;

export const MPBoostFlatMaxMPPassive = (config: Config) =>
  survivalSkills(config).MPBoost.level * 30;

export const totalBaseMaxMP = (config: Config) =>
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

export const totalPercentMaxMP = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_MAX_MP")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatMaxMPFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_MAX_MP")
    .map((stat) => stat[1])
    .reduce(add, 0) + regisletMaxMPBoostFlatMaxMP(config);

export const totalFlatMaxMPFromSkills = (config: Config) =>
  bushidoFlatMaxMPPassive(config) + MPBoostFlatMaxMPPassive(config);

export const totalFlatMaxMP = (config: Config) =>
  totalFlatMaxMPFromEquipment(config) + totalFlatMaxMPFromSkills(config);

export const totalMaxMP = (config: Config) =>
  total(
    totalBaseMaxMP(config),
    totalPercentMaxMP(config),
    totalFlatMaxMP(config),
  );

export const calculateMaxMP = (config: Config) => ({
  totalBaseMaxMP: totalBaseMaxMP(config),
  totalPercentMaxMP: totalPercentMaxMP(config),
  totalFlatMaxMP: totalFlatMaxMP(config),
  totalMaxMP: totalMaxMP(config),
});
