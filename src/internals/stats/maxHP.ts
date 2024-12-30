import { type Config } from "../data";
import { add, flattenedStats, total } from "../utils";

import { bushidoTotalFlatMaxHP } from "..";

import { HPBoostTotalFlatMaxHP, HPBoostTotalPercentMaxHP } from "..";

import {
  forceShieldTotalFlatMaxHP,
  magicalShieldTotalFlatMaxHP,
} from "..";

import { maxHPBoostTotalFlatMaxHP } from "..";

import { totalVIT } from "./VIT";

export const totalBaseMaxHP = (config: Config) =>
  93 +
  Math.floor((totalVIT(config) + 22.4) * (config.properties.level / 3)); // need to confirm this

export const totalPercentMaxHPFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_MAX_HP")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentMaxHPFromSkills = (config: Config) =>
  HPBoostTotalPercentMaxHP(config);

export const totalPercentMaxHP = (config: Config) =>
  totalPercentMaxHPFromEquipment(config) +
  totalPercentMaxHPFromSkills(config);

export const totalFlatMaxHPFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_MAX_HP")
    .map((stat) => stat[1])
    .reduce(add, 0) + maxHPBoostTotalFlatMaxHP(config);

export const totalFlatMaxHPFromSkills = (config: Config) =>
  bushidoTotalFlatMaxHP(config) +
  HPBoostTotalFlatMaxHP(config) +
  forceShieldTotalFlatMaxHP(config) +
  magicalShieldTotalFlatMaxHP(config);

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
