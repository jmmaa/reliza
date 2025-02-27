import { type Config } from "../data";
import {
  add,
  bareHandSkills,
  bladeSkills,
  dualSwordSkills,
  flattenedStats,
  isNotUsingSubWeapon,
  isUsingBareHand,
  isUsingDualSwords,
  isUsingMainKN,
  isUsingMainKTN,
  isUsingMainOHS,
  isUsingMainTHS,
  isUsingSubMD,
  magicBladeSkills,
  martialSkills,
  mononofuSkills,
  total,
} from "../utils";

import { totalMaxMP } from "./maxMP";

export const rampageFlatAMPRBuff = (config: Config) =>
  (
    (isUsingMainOHS(config) || isUsingMainTHS(config)) &&
    bladeSkills(config).rampage.buffIsActive
  ) ?
    Math.floor(2.5 * bladeSkills(config).rampage.level)
  : 0;

export const triggerSlashFlatAMPRBuff = (config: Config) =>
  (
    (isUsingMainOHS(config) || isUsingMainTHS(config)) &&
    bladeSkills(config).triggerSlash.buffIsActive
  ) ?
    bladeSkills(config).triggerSlash.level * 2
  : 0;

export const aggravateFlatAMPRPassive = (config: Config) =>
  isUsingMainKN(config) ?
    Math.floor(martialSkills(config).aggravate.level * 0.5)
  : 0;

export const etherFlareFlatAMPRBuff = (config: Config) =>
  (
    isUsingSubMD(config) &&
    magicBladeSkills(config).etherFlare.isTargetInflictedWithIgnite
  ) ?
    15 +
    Math.floor(magicBladeSkills(config).etherFlare.level / 6) * 5 +
    Math.floor(magicBladeSkills(config).etherFlare.level / 5) * 5
  : 0;

export const ultimaQiChargeFlatAMPRPassive = (config: Config) =>
  isUsingBareHand(config) && isNotUsingSubWeapon(config) ?
    Math.floor(bareHandSkills(config).ultimaQiCharge.level * 0.5)
  : 0;

export const shadowStepFlatAMPRBuff = (config: Config) =>
  (
    isUsingDualSwords(config) &&
    dualSwordSkills(config).shadowStep.buffIsActive
  ) ?
    dualSwordSkills(config).shadowStep.level
  : 0;

export const saberAuraFlatAMPRBuff = (config: Config) =>
  (
    isUsingDualSwords(config) &&
    dualSwordSkills(config).saberAuraAndCrescentSaberInteraction
      .buffIsActive &&
    dualSwordSkills(config).saberAuraAndCrescentSaberInteraction
      .buffUsed === "SABER_AURA"
  ) ?
    Math.ceil(0.5 * dualSwordSkills(config).saberAura.level) *
    dualSwordSkills(config).saberAura.stacks
  : 0;
0;

export const crescentSaberFlatAMPRBuff = (config: Config) =>
  (
    isUsingDualSwords(config) &&
    dualSwordSkills(config).saberAuraAndCrescentSaberInteraction
      .buffIsActive &&
    dualSwordSkills(config).saberAuraAndCrescentSaberInteraction
      .buffUsed === "CRESCENT_SABER"
  ) ?
    2 * dualSwordSkills(config).crescentSaber.level
  : 0;

export const shukuchiFlatAMPRBuff = (config: Config) => {
  const mainKTN = isUsingMainKTN(config);
  const level = mononofuSkills(config).shukuchi.level;
  const isActive = mononofuSkills(config).shukuchi.buffIsActive;

  return isActive ?
      (level === 1 ? 0
      : level === 2 ? 1
      : level === 3 ? 2
      : level === 4 ? 4
      : level === 5 ? 6
      : level === 6 ? 9
      : level === 7 ? 12
      : level === 8 ? 16
      : level === 9 ? 20
      : level === 10 ? 25
      : 25) * (mainKTN ? 2 : 1)
    : 0;
};

export const kairikiRanshinFlatAMPRBuff = (config: Config) => {
  const level = mononofuSkills(config).shukuchi.level;
  const isActive = mononofuSkills(config).shukuchi.buffIsActive;

  return (
    isActive ?
      level === 1 ? 6
      : level === 2 ? 7
      : level === 3 ? 8
      : level === 4 ? 9
      : level === 5 ? 10
      : level === 6 ? 16
      : level === 7 ? 17
      : level === 8 ? 18
      : level === 9 ? 19
      : level === 10 ? 25
      : 25
    : 0
  );
};

export const chakraFlatAMPRBuff = (config: Config) =>
  martialSkills(config).chakra.buffIsActive ?
    martialSkills(config).chakra.level +
    Math.max(0, martialSkills(config).chakra.level - 5)
  : 0;

export const totalBaseAMPR = (config: Config) =>
  Math.floor(10 + totalMaxMP(config) / 100);

export const totalPercentAMPR = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ATTACK_MP_RECOVERY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAMPRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_ATTACK_MP_RECOVERY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAMPRFromSkills = (config: Config) =>
  aggravateFlatAMPRPassive(config) +
  etherFlareFlatAMPRBuff(config) +
  ultimaQiChargeFlatAMPRPassive(config) +
  triggerSlashFlatAMPRBuff(config) +
  rampageFlatAMPRBuff(config) +
  shadowStepFlatAMPRBuff(config) +
  saberAuraFlatAMPRBuff(config) +
  crescentSaberFlatAMPRBuff(config) +
  shukuchiFlatAMPRBuff(config) +
  kairikiRanshinFlatAMPRBuff(config) +
  chakraFlatAMPRBuff(config);

export const totalFlatAMPR = (config: Config) =>
  totalFlatAMPRFromEquipment(config) + totalFlatAMPRFromSkills(config);

export const totalAMPR = (config: Config) =>
  total(
    totalBaseAMPR(config),
    totalPercentAMPR(config),
    totalFlatAMPR(config),
  );

export const calculateAMPR = (config: Config) => ({
  totalBaseAMPR: totalBaseAMPR(config),
  totalFlatAMPR: totalFlatAMPR(config),
  totalAMPR: totalAMPR(config),
});
