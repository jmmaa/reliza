import { Character } from "../../../types";
import { godspeedTotalFlatAGI } from "../../dualSwordSkills";
import { get, sum, total, flattenStatsFromEquipment } from "../../utils";

export const totalPercentAGI = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("percentAGI"))
    .reduce(sum, 0);
};

export const totalFlatAGI = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatAGI"))
    .reduce(sum, 0);

  const fromSkills = godspeedTotalFlatAGI(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalAGI = (character: Character) => {
  return total(
    character.AGI,
    totalPercentAGI(character),
    totalFlatAGI(character),
  );
};
