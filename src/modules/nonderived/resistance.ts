import { get, sum } from "../../std/op";
import { Character } from "../../std/types";
import { flattenStatsFromEquipment } from "../utils";

export const totalPhysicalResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("physicalResistance"))
    .reduce(sum, 0);
};

export const totalMagicResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("magicResistance"))
    .reduce(sum, 0);
};

export const totalLightResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("lightResistance"))
    .reduce(sum, 0);
};

export const totalDarkResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("darkResistance"))
    .reduce(sum, 0);
};

export const totalFireResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("fireResistance"))
    .reduce(sum, 0);
};

export const totalEarthResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("earthResistance"))
    .reduce(sum, 0);
};

export const totalWindResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("windResistance"))
    .reduce(sum, 0);
};

export const totalWaterResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("waterResistance"))
    .reduce(sum, 0);
};
