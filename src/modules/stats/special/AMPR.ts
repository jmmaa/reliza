import { StatId, type Config } from "../../../types";
import { ultimaQiChargeTotalFlatAMPR } from "../../bareHandSkills";
import { etherFlareTotalFlatAMPR } from "../../magicBladeSkills";
import { aggravateTotalFlatAMPR } from "../../martialSkills";
import { flattenedStats, floor, get, sum } from "../../utils";
import { totalMaxMP } from "../derived";

export const totalBaseAMPR = (config: Config) =>
  floor(10 + totalMaxMP(config) / 100);

export const totalPercentAMPR = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentAttackMPRecovery)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatAMPRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatAttackMPRecovery)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatAMPRFromSkills = (config: Config) =>
  aggravateTotalFlatAMPR(config) +
  etherFlareTotalFlatAMPR(config) +
  ultimaQiChargeTotalFlatAMPR(config);

export const totalFlatAMPR = (config: Config) =>
  totalFlatAMPRFromEquipment(config) + totalFlatAMPRFromSkills(config);
