import { Character } from "../../../types";
import { sum, total, flattenStatsFromEquipment } from "../../utils";

export const totalPercentDEXFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map((value) => value["percentDEX"])
    .reduce(sum, 0);

export const totalPercentDEX = (character: Character) =>
  totalPercentDEXFromEquipment(character);

export const totalFlatDEXFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map((value) => value["flatDEX"])
    .reduce(sum, 0);

export const totalFlatDEX = (character: Character) =>
  totalFlatDEXFromEquipment(character);

export const totalDEX = (character: Character) => {
  return total(
    character.DEX,
    totalPercentDEX(character),
    totalFlatDEX(character),
  );
};
