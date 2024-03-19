import { floor, get, sum, total } from "../../../../std/op";
import { Character } from "../../../../std/types";
import { totalVIT } from "../../../growth";
import { flattenStatsFromEquipment } from "../../../utils";

export const totalBaseMaxHP = (character: Character) => {
  const total = floor(
    93 + (totalVIT(character) + 22.4) * (character.level / 3)
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

  const total = fromEquipments;

  return total;
};

export const totalMaxHP = (character: Character) => {
  return total(
    totalBaseMaxHP(character),
    totalPercentMaxHP(character),
    totalFlatMaxHP(character)
  );
};
