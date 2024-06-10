import { StatId, type Config } from "../../../types";
import { bushidoTotalFlatMaxHP } from "../../mononofuSkills";
import { maxHPBoostTotalFlatMaxMP } from "../../regislets";
import {
  forceShieldTotalFlatMaxHP,
  magicalShieldTotalFlatMaxHP,
} from "../../shieldSkills";
import {
  HPBoostTotalFlatMaxHP,
  HPBoostTotalPercentMaxHP,
} from "../../survivalSkills";
import { get, sum, total, flattenedStats } from "../../utils";
import { totalVIT } from "../basic";

export const totalBaseMaxHP = (config: Config) =>
  93 +
  Math.floor((totalVIT(config) + 22.4) * (config["character.level"] / 3)); // need to confirm this

export const totalPercentMaxHPFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentMaxHP)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentMaxHPFromSkills = (config: Config) =>
  HPBoostTotalPercentMaxHP(config);

export const totalPercentMaxHP = (config: Config) =>
  totalPercentMaxHPFromEquipment(config) +
  totalPercentMaxHPFromSkills(config);

export const totalFlatMaxHPFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatMaxHP)
    .map((stat) => stat[1])
    .reduce(sum, 0) + maxHPBoostTotalFlatMaxMP(config);

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
