import { Config } from "../data";
import { flattenedStats, add } from "../utils";

export const totalBaseATKValueFromATKDOWNAGI = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_AGI")
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseATKValueFromATKDOWNDEX = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_DEX")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseATKValueFromATKDOWNINT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_INT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseATKValueFromATKDOWNSTR = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_STR")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseATKValueFromATKDOWNVIT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_VIT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseATKValueFromATKDOWN = (config: Config) =>
  [
    totalBaseATKValueFromATKDOWNAGI(config),
    totalBaseATKValueFromATKDOWNDEX(config),
    totalBaseATKValueFromATKDOWNINT(config),
    totalBaseATKValueFromATKDOWNSTR(config),
    totalBaseATKValueFromATKDOWNVIT(config),
  ].reduce(add);

// ATK UP

export const totalBaseATKValueFromATKUPAGI = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_AGI")
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseATKValueFromATKUPDEX = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_DEX")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseATKValueFromATKUPINT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_INT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseATKValueFromATKUPSTR = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_STR")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseATKValueFromATKUPVIT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_VIT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseATKValueFromATKUP = (config: Config) =>
  [
    totalBaseATKValueFromATKUPAGI(config),
    totalBaseATKValueFromATKUPDEX(config),
    totalBaseATKValueFromATKUPINT(config),
    totalBaseATKValueFromATKUPSTR(config),
    totalBaseATKValueFromATKUPVIT(config),
  ].reduce(add);

export const calculateDerivativeATK = (config: Config) => ({
  // TODO: Maybe add other derivative ATK funcs?

  totalBaseATKValueFromATKDOWN: totalBaseATKValueFromATKDOWN(config),
  totalBaseATKValueFromATKUP: totalBaseATKValueFromATKUP(config),
});
