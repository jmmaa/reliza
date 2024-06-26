import { Character } from "../../../types";
import { floor, sum, flattenStatsFromEquipment } from "../../utils";

export const totalAilmentResistanceFromEquipment = (
  character: Character,
) =>
  flattenStatsFromEquipment(character)
    .map((value) => value["ailmentResistance"])
    .reduce(sum, 0);

export const totalAilmentResistanceFromMTL = (character: Character) =>
  floor(character.MTL / 3.4);

export const totalAilmentResistance = (character: Character) =>
  totalAilmentResistanceFromEquipment(character) +
  totalAilmentResistanceFromMTL(character);
