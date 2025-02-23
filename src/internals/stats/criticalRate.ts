import { Config } from "../data";

import {
  add,
  battleSkills,
  bladeSkills,
  dualSwordSkills,
  flattenedStats,
  halberdSkills,
  isNotUsingSubWeapon,
  isUsingDualSwords,
  isUsingMainHAL,
  isUsingMainKTN,
  isUsingMainMD,
  isUsingMainOHS,
  isUsingMainTHS,
  isUsingSubMD,
  isUsingSubScroll,
  magicBladeSkills,
  mononofuSkills,
  ninjaSkills,
  total,
} from "../utils";

export const berserkFlatCritRateBuff = (config: Config) =>
  bladeSkills(config).berserk.buffIsActive ?
    Math.floor(bladeSkills(config).berserk.level * 2.5)
  : 0;

export const resonanceFlatCritRateBuff = (config: Config) =>
  (
    magicBladeSkills(config).resonance.buffIsActive &&
    magicBladeSkills(config).resonance.set === "A" &&
    isUsingSubMD(config)
  ) ?
    10 +
    magicBladeSkills(config).resonance.level * 2 +
    config.equipments.subweapon.refinement * 3
  : 0;

export const astuteFlatCritRateBuff = (config: Config) =>
  bladeSkills(config).astute.buffIsActive ?
    isUsingMainOHS(config) || isUsingMainTHS(config) ?
      isUsingMainTHS(config) ? 50
      : 25
    : 0
  : 0;

export const criticalUPFlatCritRatePassive = (config: Config) =>
  Math.floor(battleSkills(config).criticalUP.level / 2);

export const twoHandedFlatCritRatePassive = (config: Config) => {
  const ninjaSpiritLevel = ninjaSkills(config).ninjaSpirit.level;
  const twoHandedLevel = mononofuSkills(config).twoHanded.level;
  const mainOHS = isUsingMainOHS(config);
  const mainMD = isUsingMainMD(config);
  const mainKTN = isUsingMainKTN(config);
  const hasSubScroll = isUsingSubScroll(config);
  const noSub = isNotUsingSubWeapon(config);

  return (
    mainKTN || mainOHS || mainMD ?
      (hasSubScroll && ninjaSpiritLevel === 10) || noSub ?
        mainKTN ? twoHandedLevel
        : mainOHS || mainMD ? Math.floor(twoHandedLevel * 0.5)
        : 0
      : 0
    : noSub ? Math.floor(twoHandedLevel * 0.5)
    : 0
  );
};

export const criticalSpearFlatCritRatePassive = (config: Config) =>
  isUsingMainHAL(config) ?
    Math.floor(halberdSkills(config).criticalSpear.level * 0.5 + 0.5)
  : 0;

export const criticalSpearPercentCritRatePassive = (config: Config) =>
  isUsingMainHAL(config) ?
    Math.floor(halberdSkills(config).criticalSpear.level * 0.5)
  : 0;

export const dualSwordControlPercentCritRatePassive = (config: Config) =>
  isUsingDualSwords(config) ?
    5 + dualSwordSkills(config).dualSwordControl.level * 3
  : 0;

export const dualSwordMasteryPercentCritRatePassive = (config: Config) =>
  isUsingDualSwords(config) ?
    -55 + dualSwordSkills(config).dualSwordMastery.level * 3
  : 0;

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
  criticalSpearPercentCritRatePassive(config) +
  dualSwordControlPercentCritRatePassive(config) +
  dualSwordMasteryPercentCritRatePassive(config);

export const totalPercentCriticalRate = (config: Config) =>
  totalPercentCriticalRateFromEquipment(config) +
  totalPercentCriticalRateFromSkills(config);

export const totalFlatCriticalRateFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_CRITICAL_RATE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatCriticalRateFromSkills = (config: Config) =>
  resonanceFlatCritRateBuff(config) +
  berserkFlatCritRateBuff(config) +
  astuteFlatCritRateBuff(config) +
  criticalSpearFlatCritRatePassive(config) +
  twoHandedFlatCritRatePassive(config) +
  criticalUPFlatCritRatePassive(config);

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
  battleSkills(config).spellBurst.level * 2.5 +
  ((
    magicBladeSkills(config).dualBringer.buffIsActive &&
    magicBladeSkills(config).dualBringer.buffIsApplicable
  ) ?
    magicBladeSkills(config).dualBringer.level * 2.5
  : 0);

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

// TODO
// - shadowstep critrate buff
// - crescent saber crit rate buff
