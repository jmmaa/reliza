import { type StatCalcConfig } from "../types";
import {
  add,
  dualSwordSkills,
  flattenedStats,
  isUsingDualSwords,
} from "../utils";

export const flashblastPercentUnsheathePassive = (
  config: StatCalcConfig,
) =>
  dualSwordSkills(config).flashblast.buffIsActive ?
    dualSwordSkills(config).flashblast.level
  : 0;

export const godspeedPercentUnsheathePassive = (config: StatCalcConfig) =>
  isUsingDualSwords(config) ?
    dualSwordSkills(config).godspeed.level + 15
  : dualSwordSkills(config).godspeed.level + 5;

export const totalPercentUnsheatheAttackFromEquipment = (
  config: StatCalcConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_UNSHEATHE_ATTACK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentUnsheatheAttackFromSkills = (
  config: StatCalcConfig,
) =>
  godspeedPercentUnsheathePassive(config) +
  flashblastPercentUnsheathePassive(config);

export const totalPercentUnsheatheAttack = (config: StatCalcConfig) =>
  totalPercentUnsheatheAttackFromEquipment(config) +
  totalPercentUnsheatheAttackFromSkills(config);

export const totalFlatUnsheatheAttack = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_UNSHEATHE_ATTACK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateUnsheatheAttack = (config: StatCalcConfig) => ({
  totalFlatUnsheatheAttack: totalFlatUnsheatheAttack(config),
  totalPercentUnsheatheAttack: totalPercentUnsheatheAttack(config),
});
