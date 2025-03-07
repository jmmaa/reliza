import { Config } from "../data";
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

export const highCycleFlatCSPDBuff = (config: Config) =>
  supportSkills(config).highCycle.buffIsActive ?
    50 + supportSkills(config).highCycle.level * 50
  : 0;

export const highCyclePercentCSPDBuff = (config: Config) =>
  supportSkills(config).highCycle.buffIsActive ?
    supportSkills(config).highCycle.level * 25
  : 0;

export const regisletMagicSpeedBoostFlatCSPD = (config: Config) =>
  regislets(config).magicSpeedBoost.level;

export const magicWarriorMasteryFlatCSPDPassive = (config: Config) =>
  isUsingSubMD(config) ?
    magicBladeSkills(config).magicWarriorMastery.level * 10
  : 0;

export const magicWarriorMasteryPercentCSPDPassive = (config: Config) =>
  isUsingSubMD(config) ?
    magicBladeSkills(config).magicWarriorMastery.level * 1 +
    Math.max(magicBladeSkills(config).magicWarriorMastery.level - 5, 0)
  : 0;

export const castMasteryFlatCSPDPssive = (config: Config) =>
  isUsingMainSTF(config) || isUsingMainMD(config) ?
    wizardSkills(config).castMastery.level *
    wizardSkills(config).castMastery.numberOfskillPointsSpentOnWizardSkills
  : 0;

export const castMasteryPercentCSPDPassive = (config: Config) =>
  isUsingMainSTF(config) || isUsingMainMD(config) ?
    Math.floor(wizardSkills(config).castMastery.level * 1.5) +
    (wizardSkills(config).castMastery.numberOfWizardSkillsLearned - 1) *
      Math.floor(wizardSkills(config).castMastery.level / 2)
  : 0;
export const overlimitFlatCSPDReduction = (config: Config) =>
  (
    (isUsingMainSTF(config) || isUsingMainMD(config)) &&
    wizardSkills(config).overlimit.buffIsActive
  ) ?
    -1000 + wizardSkills(config).sorceryGuide.level * 50
  : 0;

export const totalBaseCSPD = (config: Config) =>
  Math.floor(
    config.properties.level +
      1.16 * totalAGI(config) +
      2.94 * totalDEX(config),
  );

export const totalPercentCSPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_CSPD")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentCSPDFromSkills = (config: Config) =>
  magicWarriorMasteryPercentCSPDPassive(config) +
  highCyclePercentCSPDBuff(config) +
  castMasteryPercentCSPDPassive(config);

export const totalPercentCSPD = (config: Config) =>
  totalPercentCSPDFromEquipment(config) +
  totalPercentCSPDFromSkills(config);

export const totalFlatCSPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_CSPD")
    .map((stat) => stat[1])
    .reduce(add, 0) + regisletMagicSpeedBoostFlatCSPD(config);

export const totalFlatCSPDFromSkills = (config: Config) =>
  magicWarriorMasteryFlatCSPDPassive(config) +
  highCycleFlatCSPDBuff(config) +
  castMasteryFlatCSPDPssive(config) +
  overlimitFlatCSPDReduction(config);

export const totalFlatCSPD = (config: Config) =>
  totalFlatCSPDFromEquipment(config) + totalFlatCSPDFromSkills(config);

export const totalCSPD = (config: Config) =>
  total(
    totalBaseCSPD(config),
    totalPercentCSPD(config),
    totalFlatCSPD(config),
  );

export const calculateCSPD = (config: Config) => ({
  totalBaseCSPD: totalBaseCSPD(config),
  totalFlatCSPD: totalFlatCSPD(config),
  totalCSPD: totalCSPD(config),
});
