import { Config } from "../data";
import { add, flattenedStats, total } from "../utils";

import { totalAGI } from "./AGI";
import { totalSTR } from "./STR";

import {
  criticalUPTotalPercentCriticalDamage,
  spellBurstTotalMagicCriticalDamageConversion,
} from "..";

export const totalBaseCriticalDamage = (config: Config) => {
  const agi = totalAGI(config);
  const str = totalSTR(config);

  return agi > str ?
      Math.floor(150 + (agi + str) / 10)
    : Math.floor(150 + str / 5);
};

export const totalPercentCriticalDamageFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_CRITICAL_DAMAGE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentCriticalDamageFromSkills = (config: Config) =>
  criticalUPTotalPercentCriticalDamage(config);

export const totalPercentCriticalDamage = (config: Config) =>
  totalPercentCriticalDamageFromEquipment(config) +
  totalPercentCriticalDamageFromSkills(config);

export const totalFlatCriticalDamage = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_CRITICAL_DAMAGE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalCriticalDamage = (config: Config) => {
  const val = total(
    totalBaseCriticalDamage(config),
    totalPercentCriticalDamage(config),
    totalFlatCriticalDamage(config),
  );

  return val > 300 ? 300 + Math.floor((val - 300) / 2) : val; // soft cap
};

export const totalMagicCriticalDamageConversion = (config: Config) =>
  50 + spellBurstTotalMagicCriticalDamageConversion(config);

/** NOTE:
 * this is only for display purposes, magic critical damage is dynamic therefore
 * it is not advisable to add this function to the skill calculations due to
 * several factors that can increase the `mcdmg` conversion.
 */
export const totalMagicCriticalDamage = (config: Config) =>
  Math.floor(
    100 +
      ((totalCriticalDamage(config) - 100) *
        totalMagicCriticalDamageConversion(config)) /
        100,
  );

export const calculateCriticalDamage = (config: Config) => ({
  totalBaseCriticalDamage: totalBaseCriticalDamage(config),
  totalPercentCriticalDamage: totalPercentCriticalDamage(config),
  totalFlatCriticalDamage: totalFlatCriticalDamage(config),
  totalCriticalDamage: totalCriticalDamage(config),
  totalMagicCriticalDamage: totalMagicCriticalDamage(config),
});
