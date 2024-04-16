import { Character } from "../../../types";
import { sum, total, flattenStatsFromEquipment, get } from "../../utils";

export const totalPercentVITFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentVIT"))
    .reduce(sum, 0);

export const totalPercentVIT = (character: Character) =>
  totalPercentVITFromEquipment(character);

export const totalFlatVITFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character).map(get("flatVIT")).reduce(sum, 0);

export const totalFlatVIT = (character: Character) =>
  totalFlatVITFromEquipment(character);

export const totalVIT = (character: Character) =>
  total(
    character.VIT,
    totalPercentVIT(character),
    totalFlatVIT(character),
  );
