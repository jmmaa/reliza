import { Character } from "../../../types";
import { sum, total, flattenStatsFromEquipment, get } from "../../utils";

export const totalPercentINTFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentINT"))
    .reduce(sum, 0);

export const totalPercentINT = (character: Character) =>
  totalPercentINTFromEquipment(character);

export const totalFlatINTFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character).map(get("flatINT")).reduce(sum, 0);

export const totalFlatINT = (character: Character) =>
  totalFlatINTFromEquipment(character);

export const totalINT = (character: Character) =>
  total(
    character.INT,
    totalPercentINT(character),
    totalFlatINT(character),
  );
