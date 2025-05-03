import { StatCalcConfig } from "../types";

import {
  add,
  battleSkills,
  bladeSkills,
  D,
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
  regislets,
  total,
} from "../utils";

export const berserkFlatCritRateBuff = (config: StatCalcConfig) => {
  const BERSERK_BUFF_IS_ACTIVE = bladeSkills(config).berserk.buffIsActive;
  const BERSERK_LEVEL = D(bladeSkills(config).berserk.level);

  return BERSERK_BUFF_IS_ACTIVE ?
      D.floor(BERSERK_LEVEL.times(D(2.5))).toNumber()
    : 0;
};

export const resonanceFlatCritRateBuff = (config: StatCalcConfig) =>

  {
    const RESONANCE_BUFF_IS_ACTIVE =
      magicBladeSkills(config).resonance.buffIsActive;
    const RESONANCE_LEVEL = magicBladeSkills(config).resonance.level;
    const RESONANCE_SET = magicBladeSkills(config).resonance.set;
    const IS_USING_SUB_MD = isUsingSubMD(config);
    const MD_REFINE = config.equipments.subweapon.refinement;
    const FOCUS_RESONANCE_LEVEL = regislets(config).focusResonance.level;

    const total =
      (
        RESONANCE_BUFF_IS_ACTIVE &&
        RESONANCE_SET === "C" &&
        IS_USING_SUB_MD
      ) ?
        D.floor(
          D(
            (10 + RESONANCE_LEVEL * 2 + MD_REFINE * 3) *
              (FOCUS_RESONANCE_LEVEL >= 1 ?
                D(95 - 5 * FOCUS_RESONANCE_LEVEL)
                  .dividedBy(100)
                  .toNumber()
              : 1),
          ),
        ).toNumber()
      : 0;

    return total;
  };

export const astuteFlatCritRateBuff = (config: StatCalcConfig) =>
  bladeSkills(config).astute.buffIsActive ?
    isUsingMainOHS(config) || isUsingMainTHS(config) ?
      isUsingMainTHS(config) ? 50
      : 25
    : 0
  : 0;

export const criticalUPFlatCritRatePassive = (config: StatCalcConfig) =>
  D.floor(
    D(battleSkills(config).criticalUP.level).dividedBy(2),
  ).toNumber();

export const twoHandedFlatCritRatePassive = (config: StatCalcConfig) => {
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
        : mainOHS || mainMD ?
          D.floor(D(twoHandedLevel).times(0.5)).toNumber()
        : 0
      : 0
    : noSub ? D.floor(D(twoHandedLevel).times(0.5)).toNumber()
    : 0
  );
};

export const criticalSpearFlatCritRatePassive = (
  config: StatCalcConfig,
) =>
  isUsingMainHAL(config) ?
    D.floor(
      D(halberdSkills(config).criticalSpear.level).times(0.5).plus(0.5),
    ).toNumber()
  : 0;

export const criticalSpearPercentCritRatePassive = (
  config: StatCalcConfig,
) =>
  isUsingMainHAL(config) ?
    D.floor(
      D(halberdSkills(config).criticalSpear.level).times(0.5),
    ).toNumber()
  : 0;

export const dualSwordControlPercentCritRatePassive = (
  config: StatCalcConfig,
) =>
  isUsingDualSwords(config) ?
    5 + dualSwordSkills(config).dualSwordControl.level * 3
  : 0;

export const dualSwordMasteryPercentCritRatePassive = (
  config: StatCalcConfig,
) =>
  isUsingDualSwords(config) ?
    -55 + dualSwordSkills(config).dualSwordMastery.level * 3
  : 0;

export const totalBaseCriticalRate = (config: StatCalcConfig) =>
  25 +
  (config.properties.personalStatName === "CRT" ?
    D.floor(
      D(config.properties.personalStatValue).dividedBy(3.4),
    ).toNumber()
  : 0);

export const totalPercentCriticalRateFromEquipment = (
  config: StatCalcConfig,
) =>
  flattenedStats(config)
    .map((stat) => stat.percentCriticalRate)
    .reduce(add, 0);

export const totalPercentCriticalRateFromSkills = (
  config: StatCalcConfig,
) =>
  criticalSpearPercentCritRatePassive(config) +
  dualSwordControlPercentCritRatePassive(config) +
  dualSwordMasteryPercentCritRatePassive(config);

export const totalPercentCriticalRate = (config: StatCalcConfig) =>
  totalPercentCriticalRateFromEquipment(config) +
  totalPercentCriticalRateFromSkills(config);

export const totalFlatCriticalRateFromEquipment = (
  config: StatCalcConfig,
) =>
  flattenedStats(config)
    .map((stat) => stat.flatCriticalRate)
    .reduce(add, 0);

export const totalFlatCriticalRateFromSkills = (config: StatCalcConfig) =>
  resonanceFlatCritRateBuff(config) +
  berserkFlatCritRateBuff(config) +
  astuteFlatCritRateBuff(config) +
  criticalSpearFlatCritRatePassive(config) +
  twoHandedFlatCritRatePassive(config) +
  criticalUPFlatCritRatePassive(config);

export const totalFlatCriticalRate = (config: StatCalcConfig) =>
  totalFlatCriticalRateFromEquipment(config) +
  totalFlatCriticalRateFromSkills(config);

export const totalCriticalRate = (config: StatCalcConfig) =>
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
export const totalMagicCriticalRateConversion = (config: StatCalcConfig) =>
  D(battleSkills(config).spellBurst.level).times(2.5).plus(
  ((
    magicBladeSkills(config).dualBringer.buffIsActive &&
    magicBladeSkills(config).dualBringer.buffIsApplicable
  ) ?
    
    D(magicBladeSkills(config).dualBringer.level).times(2.5)
  : 0)).toNumber();

export const totalMagicCriticalRate = (config: StatCalcConfig) =>
  Math.floor(
    totalCriticalRate(config) *
      (totalMagicCriticalRateConversion(config) / 100),
  );

// add edge cases?
export const totalMagicCriticalRateAgainstWeakenedTarget = (
  config: StatCalcConfig,
) =>
  totalCriticalRate(config) *
  ((totalMagicCriticalRateConversion(config) + 50) / 100);

export const calculateCriticalRate = (config: StatCalcConfig) => ({
  totalBaseCriticalRate: totalBaseCriticalRate(config),
  totalPercentCriticalRate: totalPercentCriticalRate(config),
  totalFlatCriticalRate: totalFlatCriticalRate(config),
  totalCriticalRate: totalCriticalRate(config),
  totalMagicCriticalRate: totalMagicCriticalRate(config),
});

// TODO
// - shadowstep critrate buff
// - crescent saber crit rate buff
// - resonance regislet
