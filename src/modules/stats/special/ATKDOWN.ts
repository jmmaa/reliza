import { Character } from "../../../types";
import { floor, get, sum, flattenStatsFromEquipment } from "../../utils";

export const totalBaseATKValueFromATKDOWNAGI = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKDOWNAGI"))
      .reduce(sum, 0) / 100,
  ) * character.AGI;

export const totalBaseATKValueFromATKDOWNDEX = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKDOWNDEX"))
      .reduce(sum, 0) / 100,
  ) * character.DEX;

export const totalBaseATKValueFromATKDOWNINT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKDOWNINT"))
      .reduce(sum, 0) / 100,
  ) * character.INT;

export const totalBaseATKValueFromATKDOWNSTR = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKDOWNSTR"))
      .reduce(sum, 0) / 100,
  ) * character.STR;

export const totalBaseATKValueFromATKDOWNVIT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKDOWNVIT"))
      .reduce(sum, 0) / 100,
  ) * character.VIT;

export const totalBaseATKValueFromATKDOWN = (character: Character) =>
  [
    totalBaseATKValueFromATKDOWNAGI(character),
    totalBaseATKValueFromATKDOWNDEX(character),
    totalBaseATKValueFromATKDOWNINT(character),
    totalBaseATKValueFromATKDOWNSTR(character),
    totalBaseATKValueFromATKDOWNVIT(character),
  ].reduce(sum);
