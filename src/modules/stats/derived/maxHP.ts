import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
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

export const totalBaseMaxHP = (config: IntermediateConfig) =>
  93 +
  Math.floor((totalVIT(config) + 22.4) * (config["character.level"] / 3)); // need to confirm this

export const totalPercentMaxHPFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentMaxHP)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentMaxHPFromSkills = (config: IntermediateConfig) =>
  HPBoostTotalPercentMaxHP(config);

export const totalPercentMaxHP = (config: IntermediateConfig) =>
  totalPercentMaxHPFromEquipment(config) +
  totalPercentMaxHPFromSkills(config);

export const totalFlatMaxHPFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatMaxHP)
    .map((stat) => stat[1])
    .reduce(sum, 0) + maxHPBoostTotalFlatMaxMP(config);

export const totalFlatMaxHPFromSkills = (config: IntermediateConfig) =>
  bushidoTotalFlatMaxHP(config) +
  HPBoostTotalFlatMaxHP(config) +
  forceShieldTotalFlatMaxHP(config) +
  magicalShieldTotalFlatMaxHP(config);

export const totalFlatMaxHP = (config: IntermediateConfig) =>
  totalFlatMaxHPFromEquipment(config) + totalFlatMaxHPFromSkills(config);

export const totalMaxHP = (config: IntermediateConfig) =>
  total(
    totalBaseMaxHP(config),
    totalPercentMaxHP(config),
    totalFlatMaxHP(config),
  );
