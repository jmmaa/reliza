import { get, sum } from "../../std/op";
import { Character } from "../../std/types";
import { flattenStatsFromEquipment } from "../utils";

export const totalShortRangeDamage = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("shortRangeDamage"))
    .reduce(sum, 0);
};
