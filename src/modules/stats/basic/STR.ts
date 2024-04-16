import { Character } from "../../../types";
import { sum, total, flattenStatsFromEquipment, get } from "../../utils";

export const totalPercentSTRFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentSTR"))
    .reduce(sum, 0);

export const totalPercentSTR = (character: Character) =>
  totalPercentSTRFromEquipment(character);

export const totalFlatSTRFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character).map(get("flatSTR")).reduce(sum, 0);

export const totalFlatSTR = (character: Character) =>
  totalFlatSTRFromEquipment(character);

export const totalSTR = (character: Character) =>
  total(
    character.STR,
    totalPercentSTR(character),
    totalFlatSTR(character),
  );
