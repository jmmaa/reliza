import type { Config } from "../../../types";
import { floor, get, sum, flattenedStats } from "../../utils";

export const totalBaseMATKValueFromMATKDOWNAGI = (config: Config) =>
  floor(
    flattenedStats(config).map(get("MATKDOWNAGI")).reduce(sum, 0) / 100,
  ) * config["character.AGI"];

export const totalBaseMATKValueFromMATKDOWNDEX = (config: Config) =>
  floor(
    flattenedStats(config).map(get("MATKDOWNDEX")).reduce(sum, 0) / 100,
  ) * config["character.DEX"];

export const totalBaseMATKValueFromMATKDOWNINT = (config: Config) =>
  floor(
    flattenedStats(config).map(get("MATKDOWNINT")).reduce(sum, 0) / 100,
  ) * config["character.INT"];

export const totalBaseMATKValueFromMATKDOWNSTR = (config: Config) =>
  floor(
    flattenedStats(config).map(get("MATKDOWNSTR")).reduce(sum, 0) / 100,
  ) * config["character.STR"];

export const totalBaseMATKValueFromMATKDOWNVIT = (config: Config) =>
  floor(
    flattenedStats(config).map(get("MATKDOWNVIT")).reduce(sum, 0) / 100,
  ) * config["character.VIT"];

export const totalBaseMATKValueFromMATKDOWN = (config: Config) =>
  [
    totalBaseMATKValueFromMATKDOWNAGI(config),
    totalBaseMATKValueFromMATKDOWNDEX(config),
    totalBaseMATKValueFromMATKDOWNINT(config),
    totalBaseMATKValueFromMATKDOWNSTR(config),
    totalBaseMATKValueFromMATKDOWNVIT(config),
  ].reduce(sum);
