import { Character } from "../../../std/types";
import { flattenStatsFromEquipment } from "../../utils";
import { floor, get, sum } from "../../../std/op";
import { totalBaseStability } from "../../derived/weaponDependent/stability";

export const totalStability = (character: Character) => {
  const fromBase = totalBaseStability(character);

  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("stability"))
    .reduce(sum, 0);

  const total = fromBase + fromEquipments;

  return total;
};

export const totalMagicStability = (character: Character) => {
  const stability = totalStability(character);

  const total = floor((100 + stability) / 2);

  return total;
};
