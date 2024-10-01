import { type IntermediateConfig } from "../../../types";
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
import { StatId } from "../../utils";
import { floor, get, sum, total, flattenedStats } from "../../utils";

export const totalBaseCriticalRate = (config: IntermediateConfig) =>
  config["character.personalStat"] === "CRT" ?
    floor(25 + config["character.personalStatValue"] / 3.4)
  : 0;

export const totalPercentCriticalRateFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentCriticalRate)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentCriticalRateFromSkills = (
  config: IntermediateConfig,
) =>
  criticalSpearTotalPercentCriticalRate(config) +
  dualSwordMasteryTotalPercentCriticalRate(config) +
  dualSwordControlTotalPercentCriticalRate(config);

export const totalPercentCriticalRate = (config: IntermediateConfig) =>
  totalPercentCriticalRateFromEquipment(config) +
  totalPercentCriticalRateFromSkills(config);

export const totalFlatCriticalRateFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatCriticalRate)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatCriticalRateFromSkills = (
  config: IntermediateConfig,
) =>
  criticalSpearTotalFlatCriticalRate(config) +
  twoHandedTotalFlatCriticalRate(config) +
  criticalUPTotalFlatCriticalRate(config);

export const totalFlatCriticalRate = (config: IntermediateConfig) =>
  totalFlatCriticalRateFromEquipment(config) +
  totalFlatCriticalRateFromSkills(config);

export const totalCriticalRate = (config: IntermediateConfig) => {
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
export const totalMagicCriticalRateConversion = (
  config: IntermediateConfig,
) => spellBurstTotalMagicCriticalRateConversion(config);

export const totalMagicCriticalRate = (config: IntermediateConfig) =>
  floor(
    totalCriticalRate(config) *
      (totalMagicCriticalRateConversion(config) / 100),
  );

// add edge cases?
export const totalMagicCriticalRateAgainstWeakenedTarget = (
  config: IntermediateConfig,
) => {
  const total =
    totalCriticalRate(config) *
    ((totalMagicCriticalRateConversion(config) + 50) / 100);

  return total;
};
