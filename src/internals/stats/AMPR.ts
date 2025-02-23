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
  isUsingMainOHS,
  isUsingMainTHS,
  isUsingSubMD,
  magicBladeSkills,
  martialSkills,
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
  crescentSaberFlatAMPRBuff(config);

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

// TODO
// - shukuchi buff
// - kairiki ranshin buff
// - chakra buff
