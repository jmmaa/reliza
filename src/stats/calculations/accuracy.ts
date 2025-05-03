import { type StatCalcConfig } from "../types";
import {
  add,
  battleSkills,
  dualSwordSkills,
  flattenedStats,
  isNotUsingSubWeapon,
  isUsingDualSwords,
  isUsingMainBOW,
  isUsingMainKTN,
  isUsingMainMD,
  isUsingMainOHS,
  isUsingSubKTN,
  isUsingSubScroll,
  mononofuSkills,
  ninjaSkills,
  shotSkills,
  total,
} from "../utils";

import { totalDEX } from "./DEX";

export const samuraiArcheryPercentHITBuff = (config: StatCalcConfig) => {
  const IS_USING_BOW = isUsingMainBOW(config);
  const IS_USING_SUB_KTN = isUsingSubKTN(config);
  const SAMURAI_ARCHERY_LEVEL = shotSkills(config).samuraiArchery.level;
  const STACKS = shotSkills(config).samuraiArchery.stacks;

  return IS_USING_BOW && IS_USING_SUB_KTN ?
      SAMURAI_ARCHERY_LEVEL * STACKS
    : 0;
};

export const dualSwordControlPercentHITPassive = (
  config: StatCalcConfig,
) => {
  const IS_USING_DUALSWORDS = isUsingDualSwords(config);
  const DUAL_SWORD_CONTROL_LEVEL =
    dualSwordSkills(config).dualSwordControl.level;

  return IS_USING_DUALSWORDS ? 5 + DUAL_SWORD_CONTROL_LEVEL * 3 : 0;
};

export const dualSwordMasteryPercentHITPassive = (
  config: StatCalcConfig,
) => {
  const IS_USING_DUALSWORDS = isUsingDualSwords(config);
  const DUAL_SWORD_MASTERY_LEVEL =
    dualSwordSkills(config).dualSwordMastery.level;

  return IS_USING_DUALSWORDS ? 5 + DUAL_SWORD_MASTERY_LEVEL * 3 : 0;
};

export const twoHandedPercentHITPassive = (config: StatCalcConfig) => {
  const IS_USING_MAIN_KTN = isUsingMainKTN(config);
  const IS_USING_MAIN_OHS = isUsingMainOHS(config);
  const IS_USING_MAIN_MD = isUsingMainMD(config);
  const IS_USING_SUB_SCROLL = isUsingSubScroll(config);
  const IS_NOT_USING_SUB = isNotUsingSubWeapon(config);
  const TWO_HANDED_LEVEL = mononofuSkills(config).twoHanded.level;
  const NINJA_SPIRIT_LEVEL = ninjaSkills(config).ninjaSpirit.level;

  return (
    IS_USING_MAIN_KTN || IS_USING_MAIN_OHS || IS_USING_MAIN_MD ?
      (
        (IS_USING_SUB_SCROLL && NINJA_SPIRIT_LEVEL === 10) ||
        IS_NOT_USING_SUB
      ) ?
        TWO_HANDED_LEVEL
      : 0
    : IS_NOT_USING_SUB ? TWO_HANDED_LEVEL
    : 0
  );
};

export const bushidoFlatHITPassive = (config: StatCalcConfig) =>
  mononofuSkills(config).bushido.level;

export const accuracyUPFlatHITPassive = (config: StatCalcConfig) =>
  battleSkills(config).accuracyUP.level;

export const saberAuraFlatHITBuff = (config: StatCalcConfig) => {
  const SABER_OR_CRESCENT_ACTIVE =
    dualSwordSkills(config).saberAuraAndCrescentSaberInteraction
      .buffIsActive;
  const USED_SABER_AURA =
    dualSwordSkills(config).saberAuraAndCrescentSaberInteraction.buffUsed;
  const USING_DUALSWORDS = isUsingDualSwords(config);
  const SABER_AURA_LEVEL = dualSwordSkills(config).saberAura.level;
  const SABER_AURA_STACKS = dualSwordSkills(config).saberAura.stacks;

  return SABER_OR_CRESCENT_ACTIVE && USED_SABER_AURA && USING_DUALSWORDS ?
      5 * SABER_AURA_LEVEL * SABER_AURA_STACKS
    : 0;
};

export const totalBaseAccuracy = (config: StatCalcConfig) =>
  config.properties.level + totalDEX(config);

export const totalPercentAccuracyFromEquipment = (
  config: StatCalcConfig,
) =>
  flattenedStats(config)
    .map((stat) => stat.percentAccuracy)
    .reduce(add, 0); // FINISH THIS

export const totalPercentAccuracyFromSkills = (config: StatCalcConfig) =>
  dualSwordMasteryPercentHITPassive(config) +
  dualSwordControlPercentHITPassive(config) +
  samuraiArcheryPercentHITBuff(config) +
  twoHandedPercentHITPassive(config);

export const totalPercentAccuracy = (config: StatCalcConfig) =>
  totalPercentAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalFlatAccuracyFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatAccuracy)
    .reduce(add, 0);

export const totalFlatAccuracyFromSkills = (config: StatCalcConfig) =>
  bushidoFlatHITPassive(config) +
  accuracyUPFlatHITPassive(config) +
  saberAuraFlatHITBuff(config);

export const totalFlatAccuracy = (config: StatCalcConfig) =>
  totalFlatAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalAccuracy = (config: StatCalcConfig) =>
  total(
    totalBaseAccuracy(config),
    totalPercentAccuracy(config),
    totalFlatAccuracy(config),
  );

export const calculateAccuracy = (config: StatCalcConfig) => ({
  totalBaseAccuracy: totalBaseAccuracy(config),
  totalPercentAccuracy: totalPercentAccuracy(config),
  totalFlatAccuracy: totalFlatAccuracy(config),
  totalAccuracy: totalAccuracy(config),
});
