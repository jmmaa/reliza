import { Character } from "../../../types";
import {
  flashBlastTotalPercentUnsheatheAttack,
  godspeedTotalPercentUnsheatheAttack,
} from "../../dualSwordSkills";
import { flattenStatsFromEquipment, get, sum } from "../../utils";

export const totalPercentUnsheatheAttackFromEquipment = (
  character: Character,
) =>
  flattenStatsFromEquipment(character)
    .map(get("percentUnsheatheAttack"))
    .reduce(sum, 0);

export const totalPercentUnsheatheAttackFromSkills = (
  character: Character,
) =>
  godspeedTotalPercentUnsheatheAttack(character) +
  flashBlastTotalPercentUnsheatheAttack(character);

export const totalPercentUnsheatheAttack = (character: Character) =>
  totalPercentUnsheatheAttackFromEquipment(character) +
  totalPercentUnsheatheAttackFromSkills(character);

export const totalFlatUnsheatheAttack = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("flatUnsheatheAttack"))
    .reduce(sum, 0);
