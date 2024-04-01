import { Character } from "../../../types";
import { get, sum, flattenStatsFromEquipment } from "../../utils";

export const totalMagicPierce = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("magicPierce"))
    .reduce(sum, 0);
};

export const totalPhysicalPierce = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("physicalPierce"))
    .reduce(sum, 0);
};
