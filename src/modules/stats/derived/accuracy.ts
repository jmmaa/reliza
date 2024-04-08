import { Character } from "../../../types";
import { dualSwordMasteryPercentAccuracyPenaltyReduction } from "../../dualSwordSkills";
import { samuraiArcheryTotalPercentAccuracy } from "../../shotSkills";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";
import { totalDEX } from "../basic";

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

  const fromSkills = samuraiArcheryTotalPercentAccuracy(character);

  const total = fromEquipments + fromSkills;

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
    totalFlatAccuracy(character),
  );
};
