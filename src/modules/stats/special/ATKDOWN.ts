import { Character } from "../../../types";
import { floor, get, sum, flattenStatsFromEquipment } from "../../utils";

export const totalFlatATKValueFromATKDOWNAGI = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKDOWNAGI"))
      .reduce(sum, 0) / 100,
  ) * character.AGI;

export const totalFlatATKValueFromATKDOWNDEX = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKDOWNDEX"))
      .reduce(sum, 0) / 100,
  ) * character.DEX;

export const totalFlatATKValueFromATKDOWNINT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKDOWNINT"))
      .reduce(sum, 0) / 100,
  ) * character.INT;

export const totalFlatATKValueFromATKDOWNSTR = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKDOWNSTR"))
      .reduce(sum, 0) / 100,
  ) * character.STR;

export const totalFlatATKValueFromATKDOWNVIT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKDOWNVIT"))
      .reduce(sum, 0) / 100,
  ) * character.VIT;

export const totalFlatATKValueFromATKDOWN = (character: Character) =>
  [
    totalFlatATKValueFromATKDOWNAGI(character),
    totalFlatATKValueFromATKDOWNDEX(character),
    totalFlatATKValueFromATKDOWNINT(character),
    totalFlatATKValueFromATKDOWNSTR(character),
    totalFlatATKValueFromATKDOWNVIT(character),
  ].reduce(sum);
