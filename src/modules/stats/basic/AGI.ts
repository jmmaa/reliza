import { Character } from "../../../types";
import { godspeedTotalFlatAGI } from "../../dualSwordSkills";
import { get, sum, total, flattenStatsFromEquipment } from "../../utils";

export const totalPercentAGIFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map((value) => value["percentAGI"])
    .reduce(sum, 0);

export const totalPercentAGI = (character: Character) =>
  totalPercentAGIFromEquipment(character);

export const totalFlatAGIFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map((value) => value["flatAGI"])
    .reduce(sum, 0);

// export const totalFlatAGI = (character: Character) => {
//   const fromEquipments = flattenStatsFromEquipment(character)
//     .map((value) => value["flatAGI"])
//     .reduce(sum, 0);

//   const fromSkills = godspeedTotalFlatAGI(character);

//   const total = fromEquipments + fromSkills;

//   return total;
// };

export const totalFlatAGI = (character: Character) =>
  totalFlatAGIFromEquipment(character) + godspeedTotalFlatAGI(character);

export const totalAGI = (character: Character) => {
  return total(
    character.AGI,
    totalPercentAGI(character),
    totalFlatAGI(character),
  );
};
