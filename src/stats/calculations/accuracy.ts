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

export const samuraiArcheryPercentHITBuff = (config: StatCalcConfig) =>
  isUsingMainBOW(config) && isUsingSubKTN(config) ?
    shotSkills(config).samuraiArchery.level *
    shotSkills(config).samuraiArchery.stacks
  : 0;

export const dualSwordControlPercentHITPassive = (
  config: StatCalcConfig,
) =>
  isUsingDualSwords(config) ?
    5 + dualSwordSkills(config).dualSwordControl.level * 3
  : 0;

export const dualSwordMasteryPercentHITPassive = (
  config: StatCalcConfig,
) =>
  isUsingDualSwords(config) ?
    -55 + dualSwordSkills(config).dualSwordMastery.level * 3
  : 0;

export const twoHandedPercentHITPassive = (config: StatCalcConfig) => {
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
        twoHandedLevel
      : 0
    : noSub ? twoHandedLevel
    : 0
  );
};

export const bushidoFlatHITPassive = (config: StatCalcConfig) =>
  mononofuSkills(config).bushido.level;

export const accuracyUPFlatHITPassive = (config: StatCalcConfig) =>
  battleSkills(config).accuracyUP.level;

export const saberAuraFlatHITBuff = (config: StatCalcConfig) =>
  (
    dualSwordSkills(config).saberAuraAndCrescentSaberInteraction
      .buffIsActive &&
    dualSwordSkills(config).saberAuraAndCrescentSaberInteraction
      .buffUsed === "SABER_AURA" &&
    isUsingDualSwords(config)
  ) ?
    5 *
    dualSwordSkills(config).saberAura.level *
    dualSwordSkills(config).saberAura.stacks
  : 0;

export const totalBaseAccuracy = (config: StatCalcConfig) =>
  Math.floor(config.properties.level + totalDEX(config));

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
