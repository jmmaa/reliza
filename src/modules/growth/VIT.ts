import { get, sum, total } from "../../std/op";
import { Character } from "../../std/types";
import { flattenStatsFromEquipment } from "../utils";

export const totalPercentVIT = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("percentVIT"))
    .reduce(sum, 0);
};

export const totalFlatVIT = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatVIT"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalVIT = (character: Character) => {
  return total(
    character.VIT,
    totalPercentVIT(character),
    totalFlatVIT(character)
  );
};
