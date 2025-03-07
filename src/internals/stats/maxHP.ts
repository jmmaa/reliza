import { type Config } from "../data";
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

export const bushidoFlatMaxHPPassive = (config: Config) =>
  mononofuSkills(config).bushido.level * 10;

export const HPBoostFlatMaxHPPassive = (config: Config) =>
  survivalSkills(config).HPBoost.level * 100;

export const HPBoostPercentMaxHPPassive = (config: Config) =>
  survivalSkills(config).HPBoost.level * 2;

export const forceShieldFlatMaxHPPassive = (config: Config) =>
  isUsingSubShield(config) ?
    shieldSkills(config).forceShield.level * 50
  : 0;

export const magicalShieldFlatMaxHPPassive = (config: Config) =>
  isUsingSubShield(config) ?
    shieldSkills(config).magicalShield.level * 50
  : 0;

export const regisletMaxHPBoostFlatMaxHP = (config: Config) =>
  regislets(config).maxHPBoost.level * 10;

export const totalBaseMaxHP = (config: Config) =>
  93 +
  Math.floor((totalVIT(config) + 22.4) * (config.properties.level / 3)); // need to confirm this

export const totalPercentMaxHPFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_MAX_HP")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentMaxHPFromSkills = (config: Config) =>
  HPBoostPercentMaxHPPassive(config);

export const totalPercentMaxHP = (config: Config) =>
  totalPercentMaxHPFromEquipment(config) +
  totalPercentMaxHPFromSkills(config);

export const totalFlatMaxHPFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_MAX_HP")
    .map((stat) => stat[1])
    .reduce(add, 0) + regisletMaxHPBoostFlatMaxHP(config);

export const totalFlatMaxHPFromSkills = (config: Config) =>
  bushidoFlatMaxHPPassive(config) +
  HPBoostFlatMaxHPPassive(config) +
  forceShieldFlatMaxHPPassive(config) +
  magicalShieldFlatMaxHPPassive(config);

export const totalFlatMaxHP = (config: Config) =>
  totalFlatMaxHPFromEquipment(config) + totalFlatMaxHPFromSkills(config);

export const totalMaxHP = (config: Config) =>
  total(
    totalBaseMaxHP(config),
    totalPercentMaxHP(config),
    totalFlatMaxHP(config),
  );

export const calculateMaxHP = (config: Config) => ({
  totalBaseMaxHP: totalBaseMaxHP(config),
  totalPercentMaxHP: totalPercentMaxHP(config),
  totalFlatMaxHP: totalFlatMaxHP(config),
  totalMaxHP: totalMaxHP(config),
});
