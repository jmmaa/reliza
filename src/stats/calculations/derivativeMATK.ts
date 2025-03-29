import { StatCalcConfig } from "../types";
import { add, flattenedStats } from "../utils";

export const totalBaseMATKValueFromMATKDOWNAGI = (
  config: StatCalcConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.MATKDOWNAGI)
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseMATKValueFromMATKDOWNDEX = (
  config: StatCalcConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.MATKDOWNDEX)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseMATKValueFromMATKDOWNINT = (
  config: StatCalcConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.MATKDOWNINT)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseMATKValueFromMATKDOWNSTR = (
  config: StatCalcConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.MATKDOWNSTR)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseMATKValueFromMATKDOWNVIT = (
  config: StatCalcConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.MATKDOWNVIT)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseMATKValueFromMATKDOWN = (config: StatCalcConfig) =>
  [
    totalBaseMATKValueFromMATKDOWNAGI(config),
    totalBaseMATKValueFromMATKDOWNDEX(config),
    totalBaseMATKValueFromMATKDOWNINT(config),
    totalBaseMATKValueFromMATKDOWNSTR(config),
    totalBaseMATKValueFromMATKDOWNVIT(config),
  ].reduce(add);

// MATK UP

export const totalBaseMATKValueFromMATKUPAGI = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.MATKUPAGI)
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseMATKValueFromMATKUPDEX = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.MATKUPDEX)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseMATKValueFromMATKUPINT = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.MATKUPINT)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseMATKValueFromMATKUPSTR = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.MATKUPSTR)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseMATKValueFromMATKUPVIT = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.MATKUPVIT)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseMATKValueFromMATKUP = (config: StatCalcConfig) =>
  [
    totalBaseMATKValueFromMATKUPAGI(config),
    totalBaseMATKValueFromMATKUPDEX(config),
    totalBaseMATKValueFromMATKUPINT(config),
    totalBaseMATKValueFromMATKUPSTR(config),
    totalBaseMATKValueFromMATKUPVIT(config),
  ].reduce(add);

export const calculateDerivativeMATK = (config: StatCalcConfig) => ({
  // TODO: Maybe add other derivative MATK funcs?

  totalBaseMATKValueFromMATKDOWN: totalBaseMATKValueFromMATKDOWN(config),
  totalBaseMATKValueFromMATKUP: totalBaseMATKValueFromMATKUP(config),
});
