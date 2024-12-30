import { Config } from "../data";
import { flattenedStats, add } from "../utils";

export const totalBaseMATKValueFromMATKDOWNAGI = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_DOWN_AGI")
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseMATKValueFromMATKDOWNDEX = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_DOWN_DEX")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseMATKValueFromMATKDOWNINT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_DOWN_INT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseMATKValueFromMATKDOWNSTR = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_DOWN_STR")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseMATKValueFromMATKDOWNVIT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_DOWN_VIT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseMATKValueFromMATKDOWN = (config: Config) =>
  [
    totalBaseMATKValueFromMATKDOWNAGI(config),
    totalBaseMATKValueFromMATKDOWNDEX(config),
    totalBaseMATKValueFromMATKDOWNINT(config),
    totalBaseMATKValueFromMATKDOWNSTR(config),
    totalBaseMATKValueFromMATKDOWNVIT(config),
  ].reduce(add);

// MATK UP

export const totalBaseMATKValueFromMATKUPAGI = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_UP_AGI")
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseMATKValueFromMATKUPDEX = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_UP_DEX")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseMATKValueFromMATKUPINT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_UP_INT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseMATKValueFromMATKUPSTR = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_UP_STR")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseMATKValueFromMATKUPVIT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_UP_VIT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseMATKValueFromMATKUP = (config: Config) =>
  [
    totalBaseMATKValueFromMATKUPAGI(config),
    totalBaseMATKValueFromMATKUPDEX(config),
    totalBaseMATKValueFromMATKUPINT(config),
    totalBaseMATKValueFromMATKUPSTR(config),
    totalBaseMATKValueFromMATKUPVIT(config),
  ].reduce(add, 0);

export const calculateDerivativeMATK = (config: Config) => ({
  // TODO: Maybe add other derivative MATK funcs?

  totalBaseMATKValueFromMATKDOWN: totalBaseMATKValueFromMATKDOWN(config),
  totalBaseMATKValueFromMATKUP: totalBaseMATKValueFromMATKUP(config),
});
