import { isUsingMainTHS, isUsingSubShield } from "..";
import { type Config } from "../data";
import {
  add,
  flattenedStats,
  isUsingHeavyArmor,
  isUsingMainHAL,
} from "../utils";

import { hiddenTalentTotalBaseGuardRecharge } from "..";

import { heavyArmorMasteryTotalGuardRecharge } from "..";

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
