import { type Config } from "../data";
import { add, flattenedStats } from "../utils";

import {
  isUsingHeavyArmor,
  isUsingMainHAL,
  isUsingMainTHS,
  isUsingSubShield,
} from "../utils";

import {
  hiddenTalentTotalBaseGuardPower,
  hiddenTalentTotalBaseGuardRecharge,
} from "..";

import { heavyArmorMasteryTotalGuardRecharge } from "..";

// guard power
export const totalBaseGuardPower = (config: Config) =>
  Math.min(
    [
      isUsingHeavyArmor(config) ? 5000 : 0,
      isUsingSubShield(config) ? 7500 : 0,
      isUsingMainTHS(config) ? 5000 : 0,
      isUsingMainHAL(config) ? 2500 : 0,
      hiddenTalentTotalBaseGuardPower(config),
    ].reduce(add, 0),
    10000,
  );

export const totalPercentGuardPower = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "GUARD_POWER")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalGuardPower = (config: Config) =>
  totalBaseGuardPower(config) * (totalPercentGuardPower(config) / 100);

export const calculateGuardPower = (config: Config) => ({
  totalBaseGuardPower: totalBaseGuardPower(config),
  totalPercentGuardPower: totalPercentGuardPower(config),
  totalGuardPower: totalGuardPower(config),
});

// guard recharge

export const totalBaseGuardRecharge = (config: Config) =>
  [
    isUsingHeavyArmor(config) ? 25 : 0,
    isUsingSubShield(config) ? 75 : 0,
    isUsingMainTHS(config) ? 50 : 0,
    isUsingMainHAL(config) ? 25 : 0,
    hiddenTalentTotalBaseGuardRecharge(config),
  ].reduce(add, 0);

export const totalPercentGuardRecharge = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "GUARD_RECHARGE")
    .map((stat) => stat[1])
    .reduce(add, 0) + heavyArmorMasteryTotalGuardRecharge(config);

export const totalGuardRecharge = (config: Config) =>
  Math.floor(
    (totalBaseGuardRecharge(config) * totalPercentGuardRecharge(config)) /
      100,
  );

export const calculateGuardRecharge = (config: Config) => ({
  totalBaseGuardRecharge: totalBaseGuardRecharge(config),
  totalPercentGuardRecharge: totalPercentGuardRecharge(config),
  totalGuardRecharge: totalGuardRecharge(config),
});

// guard break
export const totalGuardBreak = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "GUARD_BREAK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateGuardRelated = (config: Config) => ({
  totalBaseGuardPower: totalBaseGuardPower(config),
  totalPercentGuardPower: totalPercentGuardPower(config),
  totalGuardPower: totalGuardPower(config),

  totalBaseGuardRecharge: totalBaseGuardRecharge(config),
  totalPercentGuardRecharge: totalPercentGuardRecharge(config),
  totalGuardRecharge: totalGuardRecharge(config),

  totalGuardBreak: totalGuardBreak(config),
});
