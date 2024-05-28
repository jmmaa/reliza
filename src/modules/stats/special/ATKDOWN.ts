import { Config } from "../../../types";
import { floor, get, sum, flattenedStats } from "../../utils";

export const totalBaseATKValueFromATKDOWNAGI = (config: Config) =>
  floor(
    flattenedStats(config).map(get("ATKDOWNAGI")).reduce(sum, 0) / 100,
  ) * config["character.AGI"];

export const totalBaseATKValueFromATKDOWNDEX = (config: Config) =>
  floor(
    flattenedStats(config).map(get("ATKDOWNDEX")).reduce(sum, 0) / 100,
  ) * config["character.DEX"];

export const totalBaseATKValueFromATKDOWNINT = (config: Config) =>
  floor(
    flattenedStats(config).map(get("ATKDOWNINT")).reduce(sum, 0) / 100,
  ) * config["character.INT"];

export const totalBaseATKValueFromATKDOWNSTR = (config: Config) =>
  floor(
    flattenedStats(config).map(get("ATKDOWNSTR")).reduce(sum, 0) / 100,
  ) * config["character.STR"];

export const totalBaseATKValueFromATKDOWNVIT = (config: Config) =>
  floor(
    flattenedStats(config).map(get("ATKDOWNVIT")).reduce(sum, 0) / 100,
  ) * config["character.VIT"];

export const totalBaseATKValueFromATKDOWN = (config: Config) =>
  [
    totalBaseATKValueFromATKDOWNAGI(config),
    totalBaseATKValueFromATKDOWNDEX(config),
    totalBaseATKValueFromATKDOWNINT(config),
    totalBaseATKValueFromATKDOWNSTR(config),
    totalBaseATKValueFromATKDOWNVIT(config),
  ].reduce(sum);
