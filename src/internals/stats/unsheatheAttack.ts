import { type Config } from "../data";
import {
  add,
  dualSwordSkills,
  flattenedStats,
  isUsingDualSwords,
} from "../utils";

export const flashblastPercentUnsheathePassive = (config: Config) =>
  dualSwordSkills(config).flashblast.buffIsActive ?
    dualSwordSkills(config).flashblast.level
  : 0;

export const godspeedPercentUnsheathePassive = (config: Config) =>
  isUsingDualSwords(config) ?
    dualSwordSkills(config).godspeed.level + 15
  : dualSwordSkills(config).godspeed.level + 5;

export const totalPercentUnsheatheAttackFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_UNSHEATHE_ATTACK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentUnsheatheAttackFromSkills = (config: Config) =>
  godspeedPercentUnsheathePassive(config) +
  flashblastPercentUnsheathePassive(config);

export const totalPercentUnsheatheAttack = (config: Config) =>
  totalPercentUnsheatheAttackFromEquipment(config) +
  totalPercentUnsheatheAttackFromSkills(config);

export const totalFlatUnsheatheAttack = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_UNSHEATHE_ATTACK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateUnsheatheAttack = (config: Config) => ({
  totalFlatUnsheatheAttack: totalFlatUnsheatheAttack(config),
  totalPercentUnsheatheAttack: totalPercentUnsheatheAttack(config),
});
