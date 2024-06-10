import { StatId, type Config } from "../../../types";
import { floor, get, sum, flattenedStats } from "../../utils";

export const totalBaseATKValueFromATKUPAGI = (config: Config) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATKUPAGI)
      .map((stat) => stat[1])
      .reduce(sum, 0) / 100,
  ) * config["character.AGI"];

export const totalBaseATKValueFromATKUPDEX = (config: Config) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATKUPDEX)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.DEX"];

export const totalBaseATKValueFromATKUPINT = (config: Config) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATKUPINT)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.INT"];

export const totalBaseATKValueFromATKUPSTR = (config: Config) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATKUPSTR)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.STR"];

export const totalBaseATKValueFromATKUPVIT = (config: Config) =>
  floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATKUPVIT)
      .map((stat) => stat[1])
      .reduce(sum, 0) /
      100 /
      100,
  ) * config["character.VIT"];

export const totalBaseATKValueFromATKUP = (config: Config) =>
  [
    totalBaseATKValueFromATKUPAGI(config),
    totalBaseATKValueFromATKUPDEX(config),
    totalBaseATKValueFromATKUPINT(config),
    totalBaseATKValueFromATKUPSTR(config),
    totalBaseATKValueFromATKUPVIT(config),
  ].reduce(sum);
