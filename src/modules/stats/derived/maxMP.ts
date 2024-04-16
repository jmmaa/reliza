import { Character } from "../../../types";
import { bushidoTotalFlatMaxMP } from "../../mononofuSkills";
import { MPBoostTotalFlatMaxMP } from "../../survivalSkills";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";
import { totalINT } from "../basic";

export const totalBaseMaxMP = (character: Character) =>
  character.TEC > 0 ?
    floor(
      100 +
        character.level +
        totalINT(character) / 10 +
        (character.TEC - 1),
    )
  : floor(100 + character.level + totalINT(character) / 10);

export const totalPercentMaxMP = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentMaxMP"))
    .reduce(sum, 0);

export const totalFlatMaxMPFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("flatMaxMP"))
    .reduce(sum, 0);

export const totalFlatMaxMPFromSkills = (character: Character) =>
  bushidoTotalFlatMaxMP(character) + MPBoostTotalFlatMaxMP(character);

export const totalFlatMaxMP = (character: Character) =>
  totalFlatMaxMPFromEquipment(character) +
  totalFlatMaxMPFromSkills(character);

export const totalMaxMP = (character: Character) =>
  total(
    totalBaseMaxMP(character),
    totalPercentMaxMP(character),
    totalFlatMaxMP(character),
  );
