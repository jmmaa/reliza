import { Character } from "../../../types";
import { get, sum, total, flattenStatsFromEquipment } from "../../utils";

export const totalPercentDEX = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("percentDEX"))
    .reduce(sum, 0);
};

export const totalFlatDEX = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatDEX"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalDEX = (character: Character) => {
  return total(
    character.DEX,
    totalPercentDEX(character),
    totalFlatDEX(character)
  );
};
