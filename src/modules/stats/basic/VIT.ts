import { Character } from "../../../types";
import { sum, total, flattenStatsFromEquipment } from "../../utils";

export const totalPercentVITFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map((value) => value["percentVIT"])
    .reduce(sum, 0);

export const totalPercentVIT = (character: Character) =>
  totalPercentVITFromEquipment(character);

export const totalFlatVITFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map((value) => value["flatVIT"])
    .reduce(sum, 0);

export const totalFlatVIT = (character: Character) =>
  totalFlatVITFromEquipment(character);

export const totalVIT = (character: Character) => {
  return total(
    character.VIT,
    totalPercentVIT(character),
    totalFlatVIT(character),
  );
};
