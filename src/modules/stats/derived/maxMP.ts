import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
import { bushidoTotalFlatMaxMP } from "../../mononofuSkills";
import { maxMPBoostTotalFlatMaxMP } from "../../regislets";
import { MPBoostTotalFlatMaxMP } from "../../survivalSkills";
import { floor, get, sum, total, flattenedStats } from "../../utils";
import { totalINT } from "../basic";

export const totalBaseMaxMP = (config: IntermediateConfig) =>
  config["character.TEC"] > 0 ?
    floor(
      100 +
        config["character.level"] +
        totalINT(config) / 10 +
        (config["character.TEC"] - 1),
    )
  : floor(100 + config["character.level"] + totalINT(config) / 10);

export const totalPercentMaxMP = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentMaxMP)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatMaxMPFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatMaxMP)
    .map((stat) => stat[1])
    .reduce(sum, 0) + maxMPBoostTotalFlatMaxMP(config);

export const totalFlatMaxMPFromSkills = (config: IntermediateConfig) =>
  bushidoTotalFlatMaxMP(config) + MPBoostTotalFlatMaxMP(config);

export const totalFlatMaxMP = (config: IntermediateConfig) =>
  totalFlatMaxMPFromEquipment(config) + totalFlatMaxMPFromSkills(config);

export const totalMaxMP = (config: IntermediateConfig) =>
  total(
    totalBaseMaxMP(config),
    totalPercentMaxMP(config),
    totalFlatMaxMP(config),
  );
