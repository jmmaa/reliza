import { Character } from "../../../types";
import { floor, get, sum, flattenStatsFromEquipment } from "../../utils";

export const totalBaseATKValueFromATKUPAGI = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKUPAGI"))
      .reduce(sum, 0) / 100,
  ) * character.AGI;

export const totalBaseATKValueFromATKUPDEX = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKUPDEX"))
      .reduce(sum, 0) / 100,
  ) * character.DEX;

export const totalBaseATKValueFromATKUPINT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKUPINT"))
      .reduce(sum, 0) / 100,
  ) * character.INT;

export const totalBaseATKValueFromATKUPSTR = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKUPSTR"))
      .reduce(sum, 0) / 100,
  ) * character.STR;

export const totalBaseATKValueFromATKUPVIT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKUPVIT"))
      .reduce(sum, 0) / 100,
  ) * character.VIT;

export const totalBaseATKValueFromATKUP = (character: Character) =>
  [
    totalBaseATKValueFromATKUPAGI(character),
    totalBaseATKValueFromATKUPDEX(character),
    totalBaseATKValueFromATKUPINT(character),
    totalBaseATKValueFromATKUPSTR(character),
    totalBaseATKValueFromATKUPVIT(character),
  ].reduce(sum);
