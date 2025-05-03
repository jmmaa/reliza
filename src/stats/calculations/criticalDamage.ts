import { StatCalcConfig } from "../types";
import { add, battleSkills, flattenedStats, total } from "../utils";

import { totalAGI } from "./AGI";
import { totalSTR } from "./STR";

export const criticalUPPercentCDMGPassive = (config: StatCalcConfig) =>
  Math.floor(battleSkills(config).criticalUP.level / 2);

export const spellBurstMCDMGConversion = (config: StatCalcConfig) =>
  battleSkills(config).spellBurst.level * 2.5;

export const totalBaseCriticalDamage = (config: StatCalcConfig) => {
  const agi = totalAGI(config);
  const str = totalSTR(config);

  return agi > str ?
      Math.floor(150 + (agi + str) / 10)
    : Math.floor(150 + str / 5);
};

export const totalPercentCriticalDamageFromEquipment = (
  config: StatCalcConfig,
) =>
  flattenedStats(config)
    .map((stat) => stat.percentCriticalDamage)
    .reduce(add, 0);

export const totalPercentCriticalDamageFromSkills = (
  config: StatCalcConfig,
) => criticalUPPercentCDMGPassive(config);

export const totalPercentCriticalDamage = (config: StatCalcConfig) =>
  totalPercentCriticalDamageFromEquipment(config) +
  totalPercentCriticalDamageFromSkills(config);

export const totalFlatCriticalDamage = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatCriticalDamage)
    .reduce(add, 0);

export const totalCriticalDamage = (config: StatCalcConfig) => {
  const val = total(
    totalBaseCriticalDamage(config),
    totalPercentCriticalDamage(config),
    totalFlatCriticalDamage(config),
  );

  return val > 300 ? 300 + Math.floor((val - 300) / 2) : val; // soft cap
};

export const totalMagicCriticalDamageConversion = (
  config: StatCalcConfig,
) => 50 + spellBurstMCDMGConversion(config);

/** NOTE:
 * this is only for display purposes, magic critical damage is dynamic therefore
 * it is not advisable to add this function to the skill calculations due to
 * several factors that can increase the `mcdmg` conversion.
 */
export const totalMagicCriticalDamage = (config: StatCalcConfig) =>
  Math.floor(
    100 +
      ((totalCriticalDamage(config) - 100) *
        totalMagicCriticalDamageConversion(config)) /
        100,
  );

export const calculateCriticalDamage = (config: StatCalcConfig) => ({
  totalBaseCriticalDamage: totalBaseCriticalDamage(config),
  totalPercentCriticalDamage: totalPercentCriticalDamage(config),
  totalFlatCriticalDamage: totalFlatCriticalDamage(config),
  totalCriticalDamage: totalCriticalDamage(config),
  totalMagicCriticalDamage: totalMagicCriticalDamage(config),
});

// TODO: MAKE THIS MORE ACCURATE
