import { Config } from "../../../types";
import {
  flashBlastTotalPercentUnsheatheAttack,
  godspeedTotalPercentUnsheatheAttack,
} from "../../dualSwordSkills";
import { flattenedStats, get, sum } from "../../utils";

export const totalPercentUnsheatheAttackFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("percentUnsheatheAttack")).reduce(sum, 0);

export const totalPercentUnsheatheAttackFromSkills = (config: Config) =>
  godspeedTotalPercentUnsheatheAttack(config) +
  flashBlastTotalPercentUnsheatheAttack(config);

export const totalPercentUnsheatheAttack = (config: Config) =>
  totalPercentUnsheatheAttackFromEquipment(config) +
  totalPercentUnsheatheAttackFromSkills(config);

export const totalFlatUnsheatheAttack = (config: Config) =>
  flattenedStats(config).map(get("flatUnsheatheAttack")).reduce(sum, 0);
