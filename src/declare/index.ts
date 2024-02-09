// This involves all the functions used for declaring the stats

import { Flat, Percent, PercentOnly } from "..";

export const flatSTR = (
  value: number
): Flat<{ name: "STR"; value: number }> => ({
  name: "STR",
  type: "flat",
  value: value,
});

export const percentSTR = (
  value: number
): Percent<{ name: "STR"; value: number }> => ({
  name: "STR",
  type: "percent",
  value: value,
});

export const flatDEX = (
  value: number
): Flat<{ name: "DEX"; value: number }> => ({
  name: "DEX",
  type: "flat",
  value: value,
});

export const percentDEX = (
  value: number
): Percent<{ name: "DEX"; value: number }> => ({
  name: "DEX",
  type: "percent",
  value: value,
});

export const flatINT = (
  value: number
): Flat<{ name: "INT"; value: number }> => ({
  name: "INT",
  type: "flat",
  value: value,
});

export const percentINT = (
  value: number
): Percent<{ name: "INT"; value: number }> => ({
  name: "INT",
  type: "percent",
  value: value,
});

export const flatVIT = (
  value: number
): Flat<{ name: "VIT"; value: number }> => ({
  name: "VIT",
  type: "flat",
  value: value,
});

export const percentVIT = (
  value: number
): Percent<{ name: "VIT"; value: number }> => ({
  name: "VIT",
  type: "percent",
  value: value,
});

export const flatAGI = (
  value: number
): Flat<{ name: "AGI"; value: number }> => ({
  name: "AGI",
  type: "flat",
  value: value,
});

export const percentAGI = (
  value: number
): Percent<{ name: "AGI"; value: number }> => ({
  name: "AGI",
  type: "percent",
  value: value,
});

export const flatATK = (
  value: number
): Flat<{ name: "ATK"; value: number }> => ({
  name: "ATK",
  type: "flat",
  value: value,
});

export const percentATK = (
  value: number
): Percent<{ name: "ATK"; value: number }> => ({
  name: "ATK",
  type: "percent",
  value: value,
});

export const flatMATK = (
  value: number
): Flat<{ name: "MATK"; value: number }> => ({
  name: "MATK",
  type: "flat",
  value: value,
});

export const percentMATK = (
  value: number
): Percent<{ name: "MATK"; value: number }> => ({
  name: "MATK",
  type: "percent",
  value: value,
});

export const flatCriticalRate = (
  value: number
): Flat<{ name: "CriticalRate"; value: number }> => ({
  name: "CriticalRate",
  type: "flat",
  value: value,
});

export const percentCriticalRate = (
  value: number
): Percent<{ name: "CriticalRate"; value: number }> => ({
  name: "CriticalRate",
  type: "percent",
  value: value,
});

export const flatCriticalDamage = (
  value: number
): Flat<{ name: "CriticalDamage"; value: number }> => ({
  name: "CriticalDamage",
  type: "flat",
  value: value,
});

export const percentCriticalDamage = (
  value: number
): Percent<{ name: "CriticalDamage"; value: number }> => ({
  name: "CriticalDamage",
  type: "percent",
  value: value,
});

export const flatWeaponATK = (
  value: number
): Flat<{ name: "WeaponATK"; value: number }> => ({
  name: "WeaponATK",
  type: "flat",
  value: value,
});

export const percentWeaponATK = (
  value: number
): Percent<{ name: "WeaponATK"; value: number }> => ({
  name: "WeaponATK",
  type: "percent",
  value: value,
});

export const flatASPD = (
  value: number
): Flat<{ name: "ASPD"; value: number }> => ({
  name: "ASPD",
  type: "flat",
  value: value,
});

export const percentASPD = (
  value: number
): Percent<{ name: "ASPD"; value: number }> => ({
  name: "ASPD",
  type: "percent",
  value: value,
});

export const flatAccuracy = (
  value: number
): Flat<{ name: "Accuracy"; value: number }> => ({
  name: "Accuracy",
  type: "flat",
  value: value,
});

export const percentAccuracy = (
  value: number
): Percent<{ name: "Accuracy"; value: number }> => ({
  name: "Accuracy",
  type: "percent",
  value: value,
});

export const flatMaxHP = (
  value: number
): Flat<{ name: "MaxHP"; value: number }> => ({
  name: "MaxHP",
  type: "flat",
  value: value,
});

export const percentMaxHP = (
  value: number
): Percent<{ name: "MaxHP"; value: number }> => ({
  name: "MaxHP",
  type: "percent",
  value: value,
});

export const flatMaxMP = (
  value: number
): Flat<{ name: "MaxMP"; value: number }> => ({
  name: "MaxMP",
  type: "flat",
  value: value,
});

export const flatCSPD = (
  value: number
): Flat<{ name: "CSPD"; value: number }> => ({
  name: "CSPD",
  type: "flat",
  value: value,
});

export const percentCSPD = (
  value: number
): Percent<{ name: "CSPD"; value: number }> => ({
  name: "CSPD",
  type: "percent",
  value: value,
});

export const flatDEF = (
  value: number
): Flat<{ name: "DEF"; value: number }> => ({
  name: "DEF",
  type: "flat",
  value: value,
});

export const percentDEF = (
  value: number
): Percent<{ name: "DEF"; value: number }> => ({
  name: "DEF",
  type: "percent",
  value: value,
});

export const flatMDEF = (
  value: number
): Flat<{ name: "MDEF"; value: number }> => ({
  name: "MDEF",
  type: "flat",
  value: value,
});

export const percentMDEF = (
  value: number
): Percent<{ name: "MDEF"; value: number }> => ({
  name: "MDEF",
  type: "percent",
  value: value,
});

export const flatDodge = (
  value: number
): Flat<{ name: "Dodge"; value: number }> => ({
  name: "Dodge",
  type: "flat",
  value: value,
});

export const percentDodge = (
  value: number
): Percent<{ name: "Dodge"; value: number }> => ({
  name: "Dodge",
  type: "percent",
  value: value,
});
