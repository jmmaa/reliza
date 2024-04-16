import { Character } from "../../../types";
import { floor, get, sum, flattenStatsFromEquipment } from "../../utils";

export const totalFlatMATKValueFromMATKUPAGI = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKUPAGI"))
      .reduce(sum, 0) / 100,
  ) * character.AGI;

export const totalFlatMATKValueFromMATKUPDEX = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKUPDEX"))
      .reduce(sum, 0) / 100,
  ) * character.DEX;

export const totalFlatMATKValueFromMATKUPINT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKUPINT"))
      .reduce(sum, 0) / 100,
  ) * character.INT;

export const totalFlatMATKValueFromMATKUPSTR = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKUPSTR"))
      .reduce(sum, 0) / 100,
  ) * character.STR;

export const totalFlatMATKValueFromMATKUPVIT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("MATKUPVIT"))
      .reduce(sum, 0) / 100,
  ) * character.VIT;

export const totalFlatMATKValueFromMATKUP = (character: Character) =>
  [
    totalFlatMATKValueFromMATKUPAGI(character),
    totalFlatMATKValueFromMATKUPDEX(character),
    totalFlatMATKValueFromMATKUPINT(character),
    totalFlatMATKValueFromMATKUPSTR(character),
    totalFlatMATKValueFromMATKUPVIT(character),
  ].reduce(sum);
