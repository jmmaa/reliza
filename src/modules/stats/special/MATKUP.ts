import { Character } from "../../../types";
import { floor, get, sum, flattenStatsFromEquipment } from "../../utils";

export const totalBaseMATKValueFromMATKUPAGI = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKUPAGI"))
      .reduce(sum, 0) / 100,
  ) * character.AGI;

export const totalBaseMATKValueFromMATKUPDEX = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKUPDEX"))
      .reduce(sum, 0) / 100,
  ) * character.DEX;

export const totalBaseMATKValueFromMATKUPINT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKUPINT"))
      .reduce(sum, 0) / 100,
  ) * character.INT;

export const totalBaseMATKValueFromMATKUPSTR = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKUPSTR"))
      .reduce(sum, 0) / 100,
  ) * character.STR;

export const totalBaseMATKValueFromMATKUPVIT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKUPVIT"))
      .reduce(sum, 0) / 100,
  ) * character.VIT;

export const totalBaseMATKValueFromMATKUP = (character: Character) =>
  [
    totalBaseMATKValueFromMATKUPAGI(character),
    totalBaseMATKValueFromMATKUPDEX(character),
    totalBaseMATKValueFromMATKUPINT(character),
    totalBaseMATKValueFromMATKUPSTR(character),
    totalBaseMATKValueFromMATKUPVIT(character),
  ].reduce(sum);
