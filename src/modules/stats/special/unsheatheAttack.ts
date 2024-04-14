import { Character } from "../../../types";
import {
  flashBlastTotalPercentUnsheatheAttack,
  godspeedTotalPercentUnsheatheAttack,
} from "../../dualSwordSkills";
import { flattenStatsFromEquipment, get, sum } from "../../utils";

export const totalPercentUnsheatheAttack = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentUnsheatheAttack"))
    .reduce(sum, 0);

  const fromSkills =
    godspeedTotalPercentUnsheatheAttack(character) +
    flashBlastTotalPercentUnsheatheAttack(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalFlatUnsheatheAttack = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatUnsheatheAttack"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};
