import type { IntermediateConfig } from "../../types";

export const magicAttackBoostTotalFlatMATK = (
  config: IntermediateConfig,
) => config["character.regislets.magicAttackBoost.level"];

export const physicalAttackBoostTotalFlatATK = (
  config: IntermediateConfig,
) => config["character.regislets.physicalAttackBoost.level"];

export const maxMPBoostTotalFlatMaxMP = (config: IntermediateConfig) =>
  config["character.regislets.maxMPBoost.level"];

export const maxHPBoostTotalFlatMaxMP = (config: IntermediateConfig) =>
  config["character.regislets.maxHPBoost.level"] * 10;

export const magicSpeedBoostTotalFlatCSPD = (config: IntermediateConfig) =>
  config["character.regislets.magicSpeedBoost.level"];

export const attackSpeedBoostTotalFlatCSPD = (
  config: IntermediateConfig,
) => config["character.regislets.attackSpeedBoost.level"];

export const focusResonanceTotalReduction = (config: IntermediateConfig) =>
  95 - 5 * config["character.regislets.focusResonance.level"];

export const speedResonanceTotalReduction = (config: IntermediateConfig) =>
  95 - 5 * config["character.regislets.speedResonance.level"];

export const powerResonanceTotalReduction = (config: IntermediateConfig) =>
  95 - 5 * config["character.regislets.focusResonance.level"];
