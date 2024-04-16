import { Character } from "../../../types";
import { sum, total, flattenStatsFromEquipment, get } from "../../utils";

export const totalPercentDEXFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentDEX"))
    .reduce(sum, 0);

export const totalPercentDEX = (character: Character) =>
  totalPercentDEXFromEquipment(character);

export const totalFlatDEXFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character).map(get("flatDEX")).reduce(sum, 0);

export const totalFlatDEX = (character: Character) =>
  totalFlatDEXFromEquipment(character);

export const totalDEX = (character: Character) =>
  total(
    character.DEX,
    totalPercentDEX(character),
    totalFlatDEX(character),
  );
