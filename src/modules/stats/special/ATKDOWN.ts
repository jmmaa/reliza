import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
import { floor, get, sum, flattenedStats } from "../../utils";

export const totalBaseATKValueFromATKDOWNAGI = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATKDOWNAGI)
      .map((stat) => stat[1])
      .reduce(sum, 0) / 100,
  ) * config["character.AGI"];

export const totalBaseATKValueFromATKDOWNDEX = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATKDOWNDEX)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.DEX"];

export const totalBaseATKValueFromATKDOWNINT = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATKDOWNINT)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.INT"];

export const totalBaseATKValueFromATKDOWNSTR = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATKDOWNSTR)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.STR"];

export const totalBaseATKValueFromATKDOWNVIT = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATKDOWNVIT)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.VIT"];

export const totalBaseATKValueFromATKDOWN = (config: IntermediateConfig) =>
  [
    totalBaseATKValueFromATKDOWNAGI(config),
    totalBaseATKValueFromATKDOWNDEX(config),
    totalBaseATKValueFromATKDOWNINT(config),
    totalBaseATKValueFromATKDOWNSTR(config),
    totalBaseATKValueFromATKDOWNVIT(config),
  ].reduce(sum);
