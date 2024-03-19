import { floor, get, sum } from "../../../../std/op";
import { Character } from "../../../../std/types";
import { flattenStatsFromEquipment } from "../../../utils";

export const totalAilmentResistance = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("ailmentResistance"))
    .reduce(sum, 0);

  const fromBase = floor(character.MTL / 3.4);

  const total = fromBase + fromEquipments;

  return total;
};
