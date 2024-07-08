import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
import { ultimaQiChargeTotalFlatAMPR } from "../../bareHandSkills";
import { etherFlareTotalFlatAMPR } from "../../magicBladeSkills";
import { aggravateTotalFlatAMPR } from "../../martialSkills";
import { flattenedStats, floor, get, sum } from "../../utils";
import { totalMaxMP } from "../derived";

export const totalBaseAMPR = (config: IntermediateConfig) =>
  floor(10 + totalMaxMP(config) / 100);

export const totalPercentAMPR = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentAttackMPRecovery)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatAMPRFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatAttackMPRecovery)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatAMPRFromSkills = (config: IntermediateConfig) =>
  aggravateTotalFlatAMPR(config) +
  etherFlareTotalFlatAMPR(config) +
  ultimaQiChargeTotalFlatAMPR(config);

export const totalFlatAMPR = (config: IntermediateConfig) =>
  totalFlatAMPRFromEquipment(config) + totalFlatAMPRFromSkills(config);
