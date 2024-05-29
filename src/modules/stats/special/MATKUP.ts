import type { Config } from "../../../types";
import { floor, get, sum, flattenedStats } from "../../utils";

export const totalBaseMATKValueFromMATKUPAGI = (config: Config) =>
  floor(
    flattenedStats(config).map(get("MATKUPAGI")).reduce(sum, 0) / 100,
  ) * config["character.AGI"];

export const totalBaseMATKValueFromMATKUPDEX = (config: Config) =>
  floor(
    flattenedStats(config).map(get("MATKUPDEX")).reduce(sum, 0) / 100,
  ) * config["character.DEX"];

export const totalBaseMATKValueFromMATKUPINT = (config: Config) =>
  floor(
    flattenedStats(config).map(get("MATKUPINT")).reduce(sum, 0) / 100,
  ) * config["character.INT"];

export const totalBaseMATKValueFromMATKUPSTR = (config: Config) =>
  floor(
    flattenedStats(config).map(get("MATKUPSTR")).reduce(sum, 0) / 100,
  ) * config["character.STR"];

export const totalBaseMATKValueFromMATKUPVIT = (config: Config) =>
  floor(
    flattenedStats(config).map(get("MATKUPVIT")).reduce(sum, 0) / 100,
  ) * config["character.VIT"];

export const totalBaseMATKValueFromMATKUP = (config: Config) =>
  [
    totalBaseMATKValueFromMATKUPAGI(config),
    totalBaseMATKValueFromMATKUPDEX(config),
    totalBaseMATKValueFromMATKUPINT(config),
    totalBaseMATKValueFromMATKUPSTR(config),
    totalBaseMATKValueFromMATKUPVIT(config),
  ].reduce(sum);
