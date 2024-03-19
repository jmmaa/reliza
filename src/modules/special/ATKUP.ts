import { floor, get, sum } from "../../std/op";
import { Character } from "../../std/types";
import { flattenStatsFromEquipment } from "../utils";

export const totalFlatMATKValueFromATKUPAGI = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKUPAGI"))
      .reduce(sum, 0) / 100
  ) * character.AGI;

export const totalFlatMATKValueFromATKUPDEX = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKUPDEX"))
      .reduce(sum, 0) / 100
  ) * character.DEX;

export const totalFlatMATKValueFromATKUPINT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKUPINT"))
      .reduce(sum, 0) / 100
  ) * character.INT;

export const totalFlatMATKValueFromATKUPSTR = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKUPSTR"))
      .reduce(sum, 0) / 100
  ) * character.STR;

export const totalFlatMATKValueFromATKUPVIT = (character: Character) =>
  floor(
    flattenStatsFromEquipment(character)
      .map(get("ATKUPVIT"))
      .reduce(sum, 0) / 100
  ) * character.VIT;

export const totalFlatMATKValueFromATKUP = (character: Character) => {
  const total = [
    totalFlatMATKValueFromATKUPAGI(character),
    totalFlatMATKValueFromATKUPDEX(character),
    totalFlatMATKValueFromATKUPINT(character),
    totalFlatMATKValueFromATKUPSTR(character),
    totalFlatMATKValueFromATKUPVIT(character),
  ].reduce(sum);

  return total;
};
