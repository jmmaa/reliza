import { floor, get, sum, total } from "../../../../std/op";
import { Character } from "../../../../std/types";
import { totalDEX } from "../../../growth";
import { flattenStatsFromEquipment } from "../../../utils";

export const totalBaseAccuracy = (character: Character) => {
  const total = floor(character.level + totalDEX(character));

  return total;
};

export const totalPercentAccuracy = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentAccuracy"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalFlatAccuracy = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatAccuracy"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalAccuracy = (character: Character) => {
  return total(
    totalBaseAccuracy(character),
    totalPercentAccuracy(character),
    totalFlatAccuracy(character)
  );
};
