import { Character } from "../../../types";
import { get, sum, flattenStatsFromEquipment } from "../../utils";

export const totalLongRangeDamage = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("longRangeDamage"))
    .reduce(sum, 0);

export const totalShortRangeDamage = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("shortRangeDamage"))
    .reduce(sum, 0);
