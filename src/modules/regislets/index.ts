import type { Config } from "../../types";

export const magicAttackBoostTotalFlatMATK = (config: Config) =>
  config["character.regislets.magicAttackBoost.level"];

export const physicalAttackBoostTotalFlatATK = (config: Config) =>
  config["character.regislets.physicalAttackBoost.level"];

export const maxMPBoostTotalFlatMaxMP = (config: Config) =>
  config["character.regislets.maxMPBoost.level"];

export const maxHPBoostTotalFlatMaxMP = (config: Config) =>
  config["character.regislets.maxHPBoost.level"] * 10;

export const focusResonanceTotalReduction = (config: Config) =>
  95 - 5 * config["character.regislets.focusResonance.level"];

export const speedResonanceTotalReduction = (config: Config) =>
  95 - 5 * config["character.regislets.speedResonance.level"];

export const powerResonanceTotalReduction = (config: Config) =>
  95 - 5 * config["character.regislets.focusResonance.level"];
