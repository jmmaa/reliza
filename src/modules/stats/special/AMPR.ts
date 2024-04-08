import { Character } from "../../../types";
import { etherFlareTotalFlatAMPR } from "../../magicBladeSkills";
import { aggravateTotalFlatAMPR } from "../../martialSkills";
import { flattenStatsFromEquipment, floor, get, sum } from "../../utils";
import { totalMaxMP } from "../derived";

export const totalBaseAMPR = (character: Character) => {
  const total = floor(10 + totalMaxMP(character) / 100);

  return total;
};

export const totalPercentAMPR = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentAttackMPRecovery"))
    .reduce(sum, 9);

  const total = fromEquipments;

  return total;
};

export const totalFlatAMPR = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatAttackMPRecovery"))
    .reduce(sum, 9);

  const fromSkills =
    aggravateTotalFlatAMPR(character) + etherFlareTotalFlatAMPR(character);

  const total = fromEquipments + fromSkills;

  return total;
};
