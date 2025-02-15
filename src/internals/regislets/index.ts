import { type Config } from "../data";

export const magicUPLevel = (config: Config) =>
  config.skillTrees.battleSkills.magicup.level;

export const magicUPTotalFlatMATK = (config: Config) =>
  Math.floor(
    (config.properties.level * (2.5 * magicUPLevel(config))) / 100,
  );
export const spellBurstLevel = (config: Config) =>
  config.skillTrees.battleSkills.spellburst.level;

export const spellBurstTotalMagicCriticalDamageConversion = (
  config: Config,
) => spellBurstLevel(config) * 2.5;

export const spellBurstTotalMagicCriticalRateConversion = (
  config: Config,
) => spellBurstLevel(config) * 2.5;
// regislets

export const magicAttackBoostTotalFlatMATK = (config: Config) =>
  config.regislets.magicattackboost;

export const physicalAttackBoostTotalFlatATK = (config: Config) =>
  config.regislets.physicalattackboost;

export const maxMPBoostTotalFlatMaxMP = (config: Config) =>
  config.regislets.maxmpboost;

export const maxHPBoostTotalFlatMaxHP = (config: Config) =>
  config.regislets.maxhpboost * 10;

export const magicSpeedBoostTotalFlatCSPD = (config: Config) =>
  config.regislets.magicspeedboost;

export const attackSpeedBoostTotalFlatASPD = (config: Config) =>
  config.regislets.attackspeedboost;

export const focusResonanceTotalReduction = (config: Config) =>
  95 - 5 * config.regislets.focusresonance;

export const speedResonanceTotalReduction = (config: Config) =>
  95 - 5 * config.regislets.speedresonance;

export const powerResonanceTotalReduction = (config: Config) =>
  95 - 5 * config.regislets.powerresonance;

// remedial rampage
export const remedialRampageLevel = (config: Config) =>
  config.regislets.remedialRampage;
export const remedialRampageHPHeal = (config: Config) =>
  remedialRampageLevel(config) * 50;
