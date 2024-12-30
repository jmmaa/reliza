import { type Config } from "../data";
import { add, flattenedStats } from "../utils";

import { godspeedTotalPercentUnsheatheAttack } from "..";

import { flashBlastTotalPercentUnsheatheAttack } from "..";

export const totalPercentUnsheatheAttackFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_UNSHEATHE_ATTACK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentUnsheatheAttackFromSkills = (config: Config) =>
  godspeedTotalPercentUnsheatheAttack(config) +
  flashBlastTotalPercentUnsheatheAttack(config);

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
