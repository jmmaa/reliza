import {
  criticalSpearTotalFlatCriticalRate,
  criticalSpearTotalPercentCriticalRate,
} from "..";

import { twoHandedTotalFlatCriticalRate } from "..";

import {
  dualSwordControlTotalPercentCriticalRate,
  dualSwordMasteryTotalPercentCriticalRate,
} from "..";

import { criticalUPTotalFlatCriticalRate } from "..";

import { spellBurstTotalMagicCriticalRateConversion } from "..";
import {
  astuteBuffIsActive,
  astuteFlatCriticalRateBuffAmount,
} from "../bladeSkills/astute";

import { Config } from "../data";
import { add, flattenedStats, total } from "../utils";

export const totalBaseCriticalRate = (config: Config) =>
  25 +
  (config.properties.personalStatName === "CRT" ?
    Math.floor(config.properties.personalStatValue / 3.4)
  : 0);

export const totalPercentCriticalRateFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_CRITICAL_RATE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentCriticalRateFromSkills = (config: Config) =>
  criticalSpearTotalPercentCriticalRate(config) +
  dualSwordMasteryTotalPercentCriticalRate(config) +
  dualSwordControlTotalPercentCriticalRate(config) +
  (astuteBuffIsActive(config) ?
    astuteFlatCriticalRateBuffAmount(config)
  : 0);

export const totalPercentCriticalRate = (config: Config) =>
  totalPercentCriticalRateFromEquipment(config) +
  totalPercentCriticalRateFromSkills(config);

export const totalFlatCriticalRateFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_CRITICAL_RATE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatCriticalRateFromSkills = (config: Config) =>
  criticalSpearTotalFlatCriticalRate(config) +
  twoHandedTotalFlatCriticalRate(config) +
  criticalUPTotalFlatCriticalRate(config);

export const totalFlatCriticalRate = (config: Config) =>
  totalFlatCriticalRateFromEquipment(config) +
  totalFlatCriticalRateFromSkills(config);

export const totalCriticalRate = (config: Config) =>
  total(
    totalBaseCriticalRate(config),
    totalPercentCriticalRate(config),
    totalFlatCriticalRate(config),
  );

/** NOTE:
 * this is only for display purposes, magic critical damage is dynamic therefore
 * it is not advisable to add this function to the skill calculations due to
 * several factors that can increase the `mcdmg` conversion.
 */
export const totalMagicCriticalRateConversion = (config: Config) =>
  spellBurstTotalMagicCriticalRateConversion(config);

export const totalMagicCriticalRate = (config: Config) =>
  Math.floor(
    totalCriticalRate(config) *
      (totalMagicCriticalRateConversion(config) / 100),
  );

// add edge cases?
export const totalMagicCriticalRateAgainstWeakenedTarget = (
  config: Config,
) =>
  totalCriticalRate(config) *
  ((totalMagicCriticalRateConversion(config) + 50) / 100);

export const calculateCriticalRate = (config: Config) => ({
  totalBaseCriticalRate: totalBaseCriticalRate(config),
  totalPercentCriticalRate: totalPercentCriticalRate(config),
  totalFlatCriticalRate: totalFlatCriticalRate(config),
  totalMagicCriticalRate: totalMagicCriticalRate(config),
});
