import { Character } from "../../../types";
import { totalINT } from "../basic";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";

export const totalBaseMaxMP = (character: Character) => {
  const total =
    character.TEC > 0
      ? floor(
          100 +
            character.level +
            totalINT(character) / 10 +
            (character.TEC - 1)
        )
      : floor(100 + character.level + totalINT(character) / 10);

  return total;
};

export const totalPercentMaxMP = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentMaxMP"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalFlatMaxMP = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatMaxMP"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalMaxMP = (character: Character) => {
  return total(
    totalBaseMaxMP(character),
    totalPercentMaxMP(character),
    totalFlatMaxMP(character)
  );
};
