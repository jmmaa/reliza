import { StatCalcConfig } from "../types";
import { add, flattenedStats } from "../utils";

export const totalBaseATKValueFromATKDOWNAGI = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.ATKDOWNAGI)
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseATKValueFromATKDOWNDEX = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.ATKDOWNDEX)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseATKValueFromATKDOWNINT = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.ATKDOWNINT)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseATKValueFromATKDOWNSTR = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.ATKDOWNSTR)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseATKValueFromATKDOWNVIT = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.ATKDOWNVIT)
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
      .map((stat) => stat.ATKUPAGI)
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseATKValueFromATKUPDEX = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.ATKUPDEX)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseATKValueFromATKUPINT = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.ATKUPINT)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseATKValueFromATKUPSTR = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.ATKUPSTR)
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseATKValueFromATKUPVIT = (config: StatCalcConfig) =>
  Math.floor(
    flattenedStats(config)
      .map((stat) => stat.ATKUPVIT)
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
