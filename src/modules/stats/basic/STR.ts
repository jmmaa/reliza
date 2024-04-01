import { Character } from "../../../types";
import { get, sum, total, flattenStatsFromEquipment } from "../../utils";

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
