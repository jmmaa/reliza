import { Character } from "../../../types";
import { totalDEX } from "../basic";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";
import { dualSwordMasteryPercentAccuracyPenaltyReduction } from "../../dualSwordSkills";

export const totalBaseAccuracy = (character: Character) => {
  const total = floor(character.level + totalDEX(character));

  return total;
};

export const totalPercentAccuracy = (character: Character) => {
  const fromEquipments =
    flattenStatsFromEquipment(character)
      .map(get("percentAccuracy"))
      .reduce(sum, 0) +
    dualSwordMasteryPercentAccuracyPenaltyReduction(character);

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
