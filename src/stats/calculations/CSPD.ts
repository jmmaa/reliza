import { StatCalcConfig } from "../types";
import {
  add,
  flattenedStats,
  isUsingMainMD,
  isUsingMainSTF,
  isUsingSubMD,
  magicBladeSkills,
  regislets,
  supportSkills,
  total,
  wizardSkills,
} from "../utils";

import { totalAGI } from "./AGI";
import { totalDEX } from "./DEX";

export const highCycleFlatCSPDBuff = (config: StatCalcConfig) =>
  supportSkills(config).highCycle.buffIsActive ?
    50 + supportSkills(config).highCycle.level * 50
  : 0;

export const highCyclePercentCSPDBuff = (config: StatCalcConfig) =>
  supportSkills(config).highCycle.buffIsActive ?
    supportSkills(config).highCycle.level * 25
  : 0;

export const regisletMagicSpeedBoostFlatCSPD = (config: StatCalcConfig) =>
  regislets(config).magicSpeedBoost.level;

export const magicWarriorMasteryFlatCSPDPassive = (
  config: StatCalcConfig,
) =>
  isUsingSubMD(config) ?
    magicBladeSkills(config).magicWarriorMastery.level * 10
  : 0;

export const magicWarriorMasteryPercentCSPDPassive = (
  config: StatCalcConfig,
) =>
  isUsingSubMD(config) ?
    magicBladeSkills(config).magicWarriorMastery.level * 1 +
    Math.max(magicBladeSkills(config).magicWarriorMastery.level - 5, 0)
  : 0;

export const castMasteryFlatCSPDPssive = (config: StatCalcConfig) =>
  isUsingMainSTF(config) || isUsingMainMD(config) ?
    wizardSkills(config).castMastery.level *
    wizardSkills(config).castMastery.numberOfskillPointsSpentOnWizardSkills
  : 0;

export const castMasteryPercentCSPDPassive = (config: StatCalcConfig) =>
  isUsingMainSTF(config) || isUsingMainMD(config) ?
    Math.floor(wizardSkills(config).castMastery.level * 1.5) +
    (wizardSkills(config).castMastery.numberOfWizardSkillsLearned - 1) *
      Math.floor(wizardSkills(config).castMastery.level / 2)
  : 0;
export const overlimitFlatCSPDReduction = (config: StatCalcConfig) =>
  (
    (isUsingMainSTF(config) || isUsingMainMD(config)) &&
    wizardSkills(config).overlimit.buffIsActive
  ) ?
    -1000 + wizardSkills(config).sorceryGuide.level * 50
  : 0;

export const totalBaseCSPD = (config: StatCalcConfig) =>
  Math.floor(
    config.properties.level +
      1.16 * totalAGI(config) +
      2.94 * totalDEX(config),
  );

export const totalPercentCSPDFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.percentCSPD)
    .reduce(add, 0);

export const totalPercentCSPDFromSkills = (config: StatCalcConfig) =>
  magicWarriorMasteryPercentCSPDPassive(config) +
  highCyclePercentCSPDBuff(config) +
  castMasteryPercentCSPDPassive(config);

export const totalPercentCSPD = (config: StatCalcConfig) =>
  totalPercentCSPDFromEquipment(config) +
  totalPercentCSPDFromSkills(config);

export const totalFlatCSPDFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatCSPD)
    .reduce(add, 0) + regisletMagicSpeedBoostFlatCSPD(config);

export const totalFlatCSPDFromSkills = (config: StatCalcConfig) =>
  magicWarriorMasteryFlatCSPDPassive(config) +
  highCycleFlatCSPDBuff(config) +
  castMasteryFlatCSPDPssive(config) +
  overlimitFlatCSPDReduction(config);

export const totalFlatCSPD = (config: StatCalcConfig) =>
  totalFlatCSPDFromEquipment(config) + totalFlatCSPDFromSkills(config);

export const totalCSPD = (config: StatCalcConfig) =>
  total(
    totalBaseCSPD(config),
    totalPercentCSPD(config),
    totalFlatCSPD(config),
  );

export const calculateCSPD = (config: StatCalcConfig) => ({
  totalBaseCSPD: totalBaseCSPD(config),
  totalFlatCSPD: totalFlatCSPD(config),
  totalCSPD: totalCSPD(config),
});
