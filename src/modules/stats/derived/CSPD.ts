import { Character } from "../../../types";
import {
  magicWarriorMasteryTotalFlatCSPD,
  magicWarriorMasteryTotalPercentCSPD,
} from "../../magicBladeSkills";
import {
  highCycleTotalFlatCSPD,
  highCycleTotalPercentCSPD,
} from "../../supportSkills";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";
import { totalAGI, totalDEX } from "../basic";

export const totalBaseCSPD = (character: Character) =>
  floor(
    character.level +
      1.16 * totalAGI(character) +
      2.94 * totalDEX(character),
  );

export const totalPercentCSPDFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentCSPD"))
    .reduce(sum, 0);

export const totalPercentCSPDFromSkills = (character: Character) =>
  magicWarriorMasteryTotalPercentCSPD(character) +
  highCycleTotalPercentCSPD(character);

export const totalPercentCSPD = (character: Character) =>
  totalPercentCSPDFromEquipment(character) +
  totalPercentCSPDFromSkills(character);

export const totalFlatCSPDFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character).map(get("flatCSPD")).reduce(sum, 0);

export const totalFlatCSPDFromSkills = (character: Character) =>
  magicWarriorMasteryTotalFlatCSPD(character) +
  highCycleTotalFlatCSPD(character);

export const totalFlatCSPD = (character: Character) =>
  totalFlatCSPDFromEquipment(character) +
  totalFlatCSPDFromSkills(character);

export const totalCSPD = (character: Character) =>
  total(
    totalBaseCSPD(character),
    totalPercentCSPD(character),
    totalFlatCSPD(character),
  );
