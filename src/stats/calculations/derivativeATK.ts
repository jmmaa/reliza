import { StatCalcConfig } from "../types";
import { add, flattenedStats } from "../utils";

export const totalBaseATKValueFromATKDOWNAGI = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_AGI")
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseATKValueFromATKDOWNDEX = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_DEX")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseATKValueFromATKDOWNINT = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_INT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseATKValueFromATKDOWNSTR = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_STR")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseATKValueFromATKDOWNVIT = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_VIT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseATKValueFromATKDOWN = (config: StatCalcConfig) =>
  [
    totalBaseATKValueFromATKDOWNAGI(config),
    totalBaseATKValueFromATKDOWNDEX(config),
    totalBaseATKValueFromATKDOWNINT(config),
    totalBaseATKValueFromATKDOWNSTR(config),
    totalBaseATKValueFromATKDOWNVIT(config),
  ].reduce(add);

// ATK UP

export const totalBaseATKValueFromATKUPAGI = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_AGI")
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseATKValueFromATKUPDEX = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_DEX")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseATKValueFromATKUPINT = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_INT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseATKValueFromATKUPSTR = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_STR")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseATKValueFromATKUPVIT = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_VIT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseATKValueFromATKUP = (config: StatCalcConfig) =>
  [
    totalBaseATKValueFromATKUPAGI(config),
    totalBaseATKValueFromATKUPDEX(config),
    totalBaseATKValueFromATKUPINT(config),
    totalBaseATKValueFromATKUPSTR(config),
    totalBaseATKValueFromATKUPVIT(config),
  ].reduce(add);

export const calculateDerivativeATK = (config: StatCalcConfig) => ({
  // TODO: Maybe add other derivative ATK funcs?

  totalBaseATKValueFromATKDOWN: totalBaseATKValueFromATKDOWN(config),
  totalBaseATKValueFromATKUP: totalBaseATKValueFromATKUP(config),
});
