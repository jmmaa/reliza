import { get, sum, total } from "../../std/op";
import { Character } from "../../std/types";
import { flattenStatsFromEquipment } from "../utils";

export const totalPercentINT = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("percentINT"))
    .reduce(sum, 0);
};

export const totalFlatINT = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatINT"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalINT = (character: Character) => {
  return total(
    character.INT,
    totalPercentINT(character),
    totalFlatINT(character)
  );
};
