import { Character } from "../../../types";
import { sum, total, flattenStatsFromEquipment } from "../../utils";

export const totalPercentSTRFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map((value) => value["percentSTR"])
    .reduce(sum, 0);

export const totalPercentSTR = (character: Character) =>
  totalPercentSTRFromEquipment(character);

export const totalFlatSTRFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map((value) => value["flatSTR"])
    .reduce(sum, 0);

export const totalFlatSTR = (character: Character) =>
  totalFlatSTRFromEquipment(character);

export const totalSTR = (character: Character) => {
  return total(
    character.STR,
    totalPercentSTR(character),
    totalFlatSTR(character),
  );
};
