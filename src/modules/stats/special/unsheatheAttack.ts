import { type IntermediateConfig } from "../../../types";
import {
  flashBlastTotalPercentUnsheatheAttack,
  godspeedTotalPercentUnsheatheAttack,
} from "../../dualSwordSkills";
import { StatId } from "../../utils";
import { flattenedStats, get, sum } from "../../utils";

export const totalPercentUnsheatheAttackFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentUnsheatheAttack)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentUnsheatheAttackFromSkills = (
  config: IntermediateConfig,
) =>
  godspeedTotalPercentUnsheatheAttack(config) +
  flashBlastTotalPercentUnsheatheAttack(config);

export const totalPercentUnsheatheAttack = (config: IntermediateConfig) =>
  totalPercentUnsheatheAttackFromEquipment(config) +
  totalPercentUnsheatheAttackFromSkills(config);

export const totalFlatUnsheatheAttack = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatUnsheatheAttack)
    .map((stat) => stat[1])
    .reduce(sum, 0);
