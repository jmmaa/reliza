import { isUsingMainTHS, isUsingSubShield } from "..";
import { type Config } from "../data";
import {
  add,
  flattenedStats,
  isUsingHeavyArmor,
  isUsingMainHAL,
} from "../utils";

import { hiddenTalentTotalBaseGuardPower } from "..";

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
