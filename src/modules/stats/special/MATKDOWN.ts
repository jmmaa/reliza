import { Character } from "../../../types";
import { floor, get, sum, flattenStatsFromEquipment } from "../../utils";

export const totalFlatMATKValueFromMATKDOWNAGI = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKDOWNAGI"))
      .reduce(sum, 0) / 100,
  ) * character.AGI;

export const totalFlatMATKValueFromMATKDOWNDEX = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKDOWNDEX"))
      .reduce(sum, 0) / 100,
  ) * character.DEX;

export const totalFlatMATKValueFromMATKDOWNINT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKDOWNINT"))
      .reduce(sum, 0) / 100,
  ) * character.INT;

export const totalFlatMATKValueFromMATKDOWNSTR = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKDOWNSTR"))
      .reduce(sum, 0) / 100,
  ) * character.STR;

export const totalFlatMATKValueFromMATKDOWNVIT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKDOWNVIT"))
      .reduce(sum, 0) / 100,
  ) * character.VIT;

export const totalFlatMATKValueFromMATKDOWN = (character: Character) =>
  [
    totalFlatMATKValueFromMATKDOWNAGI(character),
    totalFlatMATKValueFromMATKDOWNDEX(character),
    totalFlatMATKValueFromMATKDOWNINT(character),
    totalFlatMATKValueFromMATKDOWNSTR(character),
    totalFlatMATKValueFromMATKDOWNVIT(character),
  ].reduce(sum);
