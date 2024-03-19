import { get, sum } from "../../std/op";
import { Character } from "../../std/types";
import { flattenStatsFromEquipment } from "../utils";

export const totalPhysicalPierce = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("physicalPierce"))
    .reduce(sum, 0);
};

export const totalMagicPierce = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("magicPierce"))
    .reduce(sum, 0);
};
