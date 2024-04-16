import { Character } from "../../../types";
import { accuracyUPTotalFlatAccuracy } from "../../battleSkills";
import {
  dualSwordControlTotalPercentAccuracy,
  dualSwordMasteryTotalPercentAccuracy,
} from "../../dualSwordSkills";
import {
  bushidoTotalFlatAccuracy,
  twoHandedTotalPercentAccuracy,
} from "../../mononofuSkills";
import { samuraiArcheryTotalPercentAccuracy } from "../../shotSkills";
import {
  sum,
  floor,
  flattenStatsFromEquipment,
  total,
  get,
} from "../../utils";
import { totalDEX } from "../basic";

export const totalBaseAccuracy = (character: Character) =>
  floor(character.level + totalDEX(character));

export const totalPercentAccuracyFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentAccuracy"))
    .reduce(sum, 0);

// export const totalPercentAccuracy = (character: Character) => {
//   const fromEquipments = flattenStatsFromEquipment(character)
//     .map(get("percentAccuracy"))
//     .reduce(sum, 0);

//   const fromSkills =
//     samuraiArcheryTotalPercentAccuracy(character) +
//     twoHandedTotalPercentAccuracy(character) +
//     dualSwordMasteryTotalPercentAccuracy(character) +
//     dualSwordControlTotalPercentAccuracy(character);

//   const total = fromEquipments + fromSkills;

//   return total;
// };

export const totalPercentAccuracyFromSkills = (character: Character) =>
  samuraiArcheryTotalPercentAccuracy(character) +
  twoHandedTotalPercentAccuracy(character) +
  dualSwordMasteryTotalPercentAccuracy(character) +
  dualSwordControlTotalPercentAccuracy(character);

export const totalPercentAccuracy = (character: Character) =>
  totalPercentAccuracyFromEquipment(character) +
  totalFlatAccuracyFromSkills(character);

export const totalFlatAccuracyFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("flatAccuracy"))
    .reduce(sum, 0);

// export const totalFlatAccuracy = (character: Character) => {
//   const fromEquipments = flattenStatsFromEquipment(character)
//     .map(get("flatAccuracy"))
//     .reduce(sum, 0);

//   const fromSkills =
//     bushidoTotalFlatAccuracy(character) +
//     accuracyUPTotalFlatAccuracy(character);

//   const total = fromEquipments + fromSkills;

//   return total;
// };

export const totalFlatAccuracyFromSkills = (character: Character) =>
  bushidoTotalFlatAccuracy(character) +
  accuracyUPTotalFlatAccuracy(character);

export const totalFlatAccuracy = (character: Character) =>
  totalFlatAccuracyFromEquipment(character) +
  totalFlatAccuracyFromSkills(character);

export const totalAccuracy = (character: Character) =>
  total(
    totalBaseAccuracy(character),
    totalPercentAccuracy(character),
    totalFlatAccuracy(character),
  );
