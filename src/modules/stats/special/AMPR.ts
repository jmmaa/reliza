import { Character } from "../../../types";
import { ultimaQiChargeTotalFlatAMPR } from "../../bareHandSkills";
import { etherFlareTotalFlatAMPR } from "../../magicBladeSkills";
import { aggravateTotalFlatAMPR } from "../../martialSkills";
import { flattenStatsFromEquipment, floor, get, sum } from "../../utils";
import { totalMaxMP } from "../derived";

export const totalBaseAMPR = (character: Character) =>
  floor(10 + totalMaxMP(character) / 100);

export const totalPercentAMPR = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentAttackMPRecovery"))
    .reduce(sum, 9);

export const totalFlatAMPRFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("flatAttackMPRecovery"))
    .reduce(sum, 9);

export const totalFlatAMPRFromSkills = (character: Character) =>
  aggravateTotalFlatAMPR(character) +
  etherFlareTotalFlatAMPR(character) +
  ultimaQiChargeTotalFlatAMPR(character);

export const totalFlatAMPR = (character: Character) =>
  totalFlatAMPRFromEquipment(character) +
  totalFlatAMPRFromSkills(character);
