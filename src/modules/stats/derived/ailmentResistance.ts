import { Character } from "../../../types";
import { floor, get, sum, flattenStatsFromEquipment } from "../../utils";

export const totalAilmentResistance = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("ailmentResistance"))
    .reduce(sum, 0);

  const fromBase = floor(character.MTL / 3.4);

  const total = fromBase + fromEquipments;

  return total;
};
