import { type StatCalcConfig } from "../types";
import {
  add,
  bareHandSkills,
  flattenedStats,
  guardSkills,
  isNotUsingSubWeapon,
  isUsingBareHand,
} from "../utils";

import {
  isUsingHeavyArmor,
  isUsingMainHAL,
  isUsingMainTHS,
  isUsingSubShield,
} from "../utils";

// guard power

export const hiddenTalentBaseGuardPower = (config: StatCalcConfig) =>
  isUsingBareHand(config) && isNotUsingSubWeapon(config) ?
    bareHandSkills(config).hiddenTalent.level * 500
  : 0;

export const totalBaseGuardPower = (config: StatCalcConfig) =>
  Math.min(
    [
      isUsingHeavyArmor(config) ? 5000 : 0,
      isUsingSubShield(config) ? 7500 : 0,
      isUsingMainTHS(config) ? 5000 : 0,
      isUsingMainHAL(config) ? 2500 : 0,
      hiddenTalentBaseGuardPower(config),
    ].reduce(add, 0),
    10000,
  );

export const totalPercentGuardPower = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "GUARD_POWER")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalGuardPower = (config: StatCalcConfig) =>
  totalBaseGuardPower(config) * (totalPercentGuardPower(config) / 100);

export const calculateGuardPower = (config: StatCalcConfig) => ({
  totalBaseGuardPower: totalBaseGuardPower(config),
  totalPercentGuardPower: totalPercentGuardPower(config),
  totalGuardPower: totalGuardPower(config),
});

// guard recharge

export const heavyArmorMasteryGuardRecharge = (config: StatCalcConfig) =>
  isUsingHeavyArmor(config) ?
    guardSkills(config).heavyArmorMastery.level
  : 0;

export const hiddenTalentBaseGuardRecharge = (config: StatCalcConfig) =>
  isUsingBareHand(config) && isNotUsingSubWeapon(config) ?
    5 + 2 * bareHandSkills(config).hiddenTalent.level
  : 0;

export const totalBaseGuardRecharge = (config: StatCalcConfig) =>
  [
    isUsingHeavyArmor(config) ? 25 : 0,
    isUsingSubShield(config) ? 75 : 0,
    isUsingMainTHS(config) ? 50 : 0,
    isUsingMainHAL(config) ? 25 : 0,
    hiddenTalentBaseGuardRecharge(config),
  ].reduce(add, 0);

export const totalPercentGuardRecharge = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "GUARD_RECHARGE")
    .map((stat) => stat[1])
    .reduce(add, 0) + heavyArmorMasteryGuardRecharge(config);

export const totalGuardRecharge = (config: StatCalcConfig) =>
  Math.floor(
    (totalBaseGuardRecharge(config) * totalPercentGuardRecharge(config)) /
      100,
  );

export const calculateGuardRecharge = (config: StatCalcConfig) => ({
  totalBaseGuardRecharge: totalBaseGuardRecharge(config),
  totalPercentGuardRecharge: totalPercentGuardRecharge(config),
  totalGuardRecharge: totalGuardRecharge(config),
});

// guard break
export const totalGuardBreak = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "GUARD_BREAK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateGuardRelated = (config: StatCalcConfig) => ({
  totalBaseGuardPower: totalBaseGuardPower(config),
  totalPercentGuardPower: totalPercentGuardPower(config),
  totalGuardPower: totalGuardPower(config),

  totalBaseGuardRecharge: totalBaseGuardRecharge(config),
  totalPercentGuardRecharge: totalPercentGuardRecharge(config),
  totalGuardRecharge: totalGuardRecharge(config),

  totalGuardBreak: totalGuardBreak(config),
});
