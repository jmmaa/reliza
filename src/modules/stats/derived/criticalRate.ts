import { StatId, type Config } from "../../../types";
import {
  criticalUPTotalFlatCriticalRate,
  spellBurstTotalMagicCriticalRateConversion,
} from "../../battleSkills";
import {
  dualSwordControlTotalPercentCriticalRate,
  dualSwordMasteryTotalPercentCriticalRate,
} from "../../dualSwordSkills";
import {
  criticalSpearTotalFlatCriticalRate,
  criticalSpearTotalPercentCriticalRate,
} from "../../halberdSkills";
import { twoHandedTotalFlatCriticalRate } from "../../mononofuSkills";
import { floor, get, sum, total, flattenedStats } from "../../utils";

export const totalBaseCriticalRate = (config: Config) =>
  floor(25 + config["character.CRT"] / 3.4);

export const totalPercentCriticalRateFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentCriticalRate)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentCriticalRateFromSkills = (config: Config) =>
  criticalSpearTotalPercentCriticalRate(config) +
  dualSwordMasteryTotalPercentCriticalRate(config) +
  dualSwordControlTotalPercentCriticalRate(config);

export const totalPercentCriticalRate = (config: Config) =>
  totalPercentCriticalRateFromEquipment(config) +
  totalPercentCriticalRateFromSkills(config);

export const totalFlatCriticalRateFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatCriticalRate)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatCriticalRateFromSkills = (config: Config) =>
  criticalSpearTotalFlatCriticalRate(config) +
  twoHandedTotalFlatCriticalRate(config) +
  criticalUPTotalFlatCriticalRate(config);

export const totalFlatCriticalRate = (config: Config) =>
  totalFlatCriticalRateFromEquipment(config) +
  totalFlatCriticalRateFromSkills(config);

export const totalCriticalRate = (config: Config) => {
  return total(
    totalBaseCriticalRate(config),
    totalPercentCriticalRate(config),
    totalFlatCriticalRate(config),
  );
};

/** NOTE:
 * this is only for display purposes, magic critical damage is dynamic therefore
 * it is not advisable to add this function to the skill calculations due to
 * several factors that can increase the `mcdmg` conversion.
 */
export const totalMagicCriticalRateConversion = (config: Config) =>
  spellBurstTotalMagicCriticalRateConversion(config);

export const totalMagicCriticalRate = (config: Config) =>
  floor(
    totalCriticalRate(config) *
      (totalMagicCriticalRateConversion(config) / 100),
  );

// add edge cases?
export const totalMagicCriticalRateAgainstWeakenedTarget = (
  config: Config,
) => {
  const total =
    totalCriticalRate(config) *
    ((totalMagicCriticalRateConversion(config) + 50) / 100);

  return total;
};
