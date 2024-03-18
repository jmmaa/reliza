import { get, sum, total } from "../../../std/op";
import { Character } from "../../../std/types";
import { flattenStatsFromEquipment } from "../../utils";

export const totalPercentSTR = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("percentSTR"))
    .reduce(sum, 0);
};

export const totalFlatSTR = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatSTR"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalSTR = (character: Character) => {
  return total(
    character.STR,
    totalPercentSTR(character),
    totalFlatSTR(character)
  );
};
