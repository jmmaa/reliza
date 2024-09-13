import { StatId } from "../../../types";
import { type IntermediateConfig } from "../../../types";
import { floor, get, sum, flattenedStats } from "../../utils";

export const totalBaseMATKValueFromMATKUPAGI = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATKUPAGI)
      .map((stat) => stat[1])
      .reduce(sum, 0) / 100,
  ) * config["character.AGI"];

export const totalBaseMATKValueFromMATKUPDEX = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATKUPDEX)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.DEX"];

export const totalBaseMATKValueFromMATKUPINT = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATKUPINT)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.INT"];

export const totalBaseMATKValueFromMATKUPSTR = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATKUPSTR)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.STR"];

export const totalBaseMATKValueFromMATKUPVIT = (
  config: IntermediateConfig,
) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATKUPVIT)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.VIT"];

export const totalBaseMATKValueFromMATKUP = (config: IntermediateConfig) =>
  [
    totalBaseMATKValueFromMATKUPAGI(config),
    totalBaseMATKValueFromMATKUPDEX(config),
    totalBaseMATKValueFromMATKUPINT(config),
    totalBaseMATKValueFromMATKUPSTR(config),
    totalBaseMATKValueFromMATKUPVIT(config),
  ].reduce(sum);
