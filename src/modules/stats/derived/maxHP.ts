import { Character } from "../../../types";
import { bushidoTotalFlatMaxHP } from "../../mononofuSkills";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";
import { totalVIT } from "../basic";

export const totalBaseMaxHP = (character: Character) => {
  const total = floor(
    93 + (totalVIT(character) + 22.4) * (character.level / 3),
  );

  return total;
};

export const totalPercentMaxHP = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentMaxHP"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalFlatMaxHP = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatMaxHP"))
    .reduce(sum, 0);

  const fromSkills = bushidoTotalFlatMaxHP(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalMaxHP = (character: Character) => {
  return total(
    totalBaseMaxHP(character),
    totalPercentMaxHP(character),
    totalFlatMaxHP(character),
  );
};
