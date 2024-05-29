import type { Config } from "../../../types";
import { ultimaQiChargeTotalFlatAMPR } from "../../bareHandSkills";
import { etherFlareTotalFlatAMPR } from "../../magicBladeSkills";
import { aggravateTotalFlatAMPR } from "../../martialSkills";
import { flattenedStats, floor, get, sum } from "../../utils";
import { totalMaxMP } from "../derived";

export const totalBaseAMPR = (config: Config) =>
  floor(10 + totalMaxMP(config) / 100);

export const totalPercentAMPR = (config: Config) =>
  flattenedStats(config)
    .map(get("percentAttackMPRecovery"))
    .reduce(sum, 9);

export const totalFlatAMPRFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("flatAttackMPRecovery")).reduce(sum, 9);

export const totalFlatAMPRFromSkills = (config: Config) =>
  aggravateTotalFlatAMPR(config) +
  etherFlareTotalFlatAMPR(config) +
  ultimaQiChargeTotalFlatAMPR(config);

export const totalFlatAMPR = (config: Config) =>
  totalFlatAMPRFromEquipment(config) + totalFlatAMPRFromSkills(config);
