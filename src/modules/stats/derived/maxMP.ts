import { Config } from "../../../types";
import { bushidoTotalFlatMaxMP } from "../../mononofuSkills";
import { maxMPBoostTotalFlatMaxMP } from "../../regislets";
import { MPBoostTotalFlatMaxMP } from "../../survivalSkills";
import { floor, get, sum, total, flattenedStats } from "../../utils";
import { totalINT } from "../basic";

export const totalBaseMaxMP = (config: Config) =>
  config["character.TEC"] > 0 ?
    floor(
      100 +
        config["character.level"] +
        totalINT(config) / 10 +
        (config["character.TEC"] - 1),
    )
  : floor(100 + config["character.level"] + totalINT(config) / 10);

export const totalPercentMaxMP = (config: Config) =>
  flattenedStats(config).map(get("percentMaxMP")).reduce(sum, 0);

export const totalFlatMaxMPFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("flatMaxMP")).reduce(sum, 0) +
  maxMPBoostTotalFlatMaxMP(config);

export const totalFlatMaxMPFromSkills = (config: Config) =>
  bushidoTotalFlatMaxMP(config) + MPBoostTotalFlatMaxMP(config);

export const totalFlatMaxMP = (config: Config) =>
  totalFlatMaxMPFromEquipment(config) + totalFlatMaxMPFromSkills(config);

export const totalMaxMP = (config: Config) =>
  total(
    totalBaseMaxMP(config),
    totalPercentMaxMP(config),
    totalFlatMaxMP(config),
  );
