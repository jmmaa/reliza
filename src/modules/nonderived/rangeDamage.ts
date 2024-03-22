import { get, sum } from "../../std/op";
import { Character } from "../../std/types";
import { flattenStatsFromEquipment } from "../utils";

export const totalLongRangeDamage = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("longRangeDamage"))
    .reduce(sum, 0);
};

export const totalShortRangeDamage = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("shortRangeDamage"))
    .reduce(sum, 0);
};
