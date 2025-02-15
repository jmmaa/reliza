import { type Config } from "../data";
import { add, flattenedStats, total } from "../utils";

import { totalMaxMP } from "./maxMP";

import { aggravateTotalFlatAMPR } from "..";

import { etherFlareTotalFlatAMPR } from "..";

import { ultimaQiChargeTotalFlatAMPR } from "..";
import {
  rampageBuffIsActive,
  rampageFlatAMPRBuffAmount,
} from "../bladeSkills/rampage";
import {
  triggerSlashBuffIsActive,
  triggerSlashFlatAMPRBuffAmount,
} from "../bladeSkills/triggerSlash";

export const totalBaseAMPR = (config: Config) =>
  Math.floor(10 + totalMaxMP(config) / 100);

export const totalPercentAMPR = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ATTACK_MP_RECOVERY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAMPRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_ATTACK_MP_RECOVERY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAMPRFromSkills = (config: Config) =>
  aggravateTotalFlatAMPR(config) +
  etherFlareTotalFlatAMPR(config) + // edit this , shud be same to rampage skill pattern of code
  ultimaQiChargeTotalFlatAMPR(config) +
  (triggerSlashBuffIsActive(config) ?
    triggerSlashFlatAMPRBuffAmount(config)
  : 0) +
  (rampageBuffIsActive(config) ? rampageFlatAMPRBuffAmount(config) : 0);

export const totalFlatAMPR = (config: Config) =>
  totalFlatAMPRFromEquipment(config) + totalFlatAMPRFromSkills(config);

export const totalAMPR = (config: Config) =>
  total(
    totalBaseAMPR(config),
    totalPercentAMPR(config),
    totalFlatAMPR(config),
  );

export const calculateAMPR = (config: Config) => ({
  totalBaseAMPR: totalBaseAMPR(config),
  totalFlatAMPR: totalFlatAMPR(config),
  totalAMPR: totalAMPR(config),
});
