import { Character } from "../../../types";
import { floor, get, sum, flattenStatsFromEquipment } from "../../utils";

export const totalBaseMATKValueFromMATKDOWNAGI = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKDOWNAGI"))
      .reduce(sum, 0) / 100,
  ) * character.AGI;

export const totalBaseMATKValueFromMATKDOWNDEX = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKDOWNDEX"))
      .reduce(sum, 0) / 100,
  ) * character.DEX;

export const totalBaseMATKValueFromMATKDOWNINT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKDOWNINT"))
      .reduce(sum, 0) / 100,
  ) * character.INT;

export const totalBaseMATKValueFromMATKDOWNSTR = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKDOWNSTR"))
      .reduce(sum, 0) / 100,
  ) * character.STR;

export const totalBaseMATKValueFromMATKDOWNVIT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKDOWNVIT"))
      .reduce(sum, 0) / 100,
  ) * character.VIT;

export const totalBaseMATKValueFromMATKDOWN = (character: Character) =>
  [
    totalBaseMATKValueFromMATKDOWNAGI(character),
    totalBaseMATKValueFromMATKDOWNDEX(character),
    totalBaseMATKValueFromMATKDOWNINT(character),
    totalBaseMATKValueFromMATKDOWNSTR(character),
    totalBaseMATKValueFromMATKDOWNVIT(character),
  ].reduce(sum);
