import { type StatCalcConfig } from "../types";
import {
  add,
  flattenedStats,
  isUsingSubShield,
  mononofuSkills,
  regislets,
  shieldSkills,
  survivalSkills,
  total,
} from "../utils";

import { totalVIT } from "./VIT";

export const bushidoFlatMaxHPPassive = (config: StatCalcConfig) =>
  mononofuSkills(config).bushido.level * 10;

export const HPBoostFlatMaxHPPassive = (config: StatCalcConfig) =>
  survivalSkills(config).HPBoost.level * 100;

export const HPBoostPercentMaxHPPassive = (config: StatCalcConfig) =>
  survivalSkills(config).HPBoost.level * 2;

export const forceShieldFlatMaxHPPassive = (config: StatCalcConfig) =>
  isUsingSubShield(config) ?
    shieldSkills(config).forceShield.level * 50
  : 0;

export const magicalShieldFlatMaxHPPassive = (config: StatCalcConfig) =>
  isUsingSubShield(config) ?
    shieldSkills(config).magicalShield.level * 50
  : 0;

export const regisletMaxHPBoostFlatMaxHP = (config: StatCalcConfig) =>
  regislets(config).maxHPBoost.level * 10;

export const totalBaseMaxHP = (config: StatCalcConfig) =>
  93 +
  Math.floor((totalVIT(config) + 22.4) * (config.properties.level / 3)); // need to confirm this

export const totalPercentMaxHPFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.percentMaxHP)
    .reduce(add, 0);

export const totalPercentMaxHPFromSkills = (config: StatCalcConfig) =>
  HPBoostPercentMaxHPPassive(config);

export const totalPercentMaxHP = (config: StatCalcConfig) =>
  totalPercentMaxHPFromEquipment(config) +
  totalPercentMaxHPFromSkills(config);

export const totalFlatMaxHPFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatMaxHP)
    .reduce(add, 0) + regisletMaxHPBoostFlatMaxHP(config);

export const totalFlatMaxHPFromSkills = (config: StatCalcConfig) =>
  bushidoFlatMaxHPPassive(config) +
  HPBoostFlatMaxHPPassive(config) +
  forceShieldFlatMaxHPPassive(config) +
  magicalShieldFlatMaxHPPassive(config);

export const totalFlatMaxHP = (config: StatCalcConfig) =>
  totalFlatMaxHPFromEquipment(config) + totalFlatMaxHPFromSkills(config);

export const totalMaxHP = (config: StatCalcConfig) =>
  total(
    totalBaseMaxHP(config),
    totalPercentMaxHP(config),
    totalFlatMaxHP(config),
  );

export const calculateMaxHP = (config: StatCalcConfig) => ({
  totalBaseMaxHP: totalBaseMaxHP(config),
  totalPercentMaxHP: totalPercentMaxHP(config),
  totalFlatMaxHP: totalFlatMaxHP(config),
  totalMaxHP: totalMaxHP(config),
});
