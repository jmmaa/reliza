import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
import { floor, get, sum, flattenedStats } from "../../utils";

export const totalBaseMATKValueFromMATKDOWNAGI = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATKDOWNAGI)
      .map((stat) => stat[1])
      .reduce(sum, 0) / 100,
  ) * config["character.AGI"];

export const totalBaseMATKValueFromMATKDOWNDEX = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATKDOWNDEX)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.DEX"];

export const totalBaseMATKValueFromMATKDOWNINT = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATKDOWNINT)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.INT"];

export const totalBaseMATKValueFromMATKDOWNSTR = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATKDOWNSTR)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.STR"];

export const totalBaseMATKValueFromMATKDOWNVIT = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATKDOWNVIT)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.VIT"];

export const totalBaseMATKValueFromMATKDOWN = (
  config: IntermediateConfig,
) =>
  [
    totalBaseMATKValueFromMATKDOWNAGI(config),
    totalBaseMATKValueFromMATKDOWNDEX(config),
    totalBaseMATKValueFromMATKDOWNINT(config),
    totalBaseMATKValueFromMATKDOWNSTR(config),
    totalBaseMATKValueFromMATKDOWNVIT(config),
  ].reduce(sum);
