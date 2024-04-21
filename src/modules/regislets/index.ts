import { Character } from "../../types";

export const magicAttackBoostTotalFlatMATK = (character: Character) =>
  character.regislets.magicAttackBoost.level;

export const physicalAttackBoostTotalFlatATK = (character: Character) =>
  character.regislets.physicalAttackBoost.level;

export const maxMPBoostTotalFlatMaxMP = (character: Character) =>
  character.regislets.maxMPBoost.level;

export const maxHPBoostTotalFlatMaxMP = (character: Character) =>
  character.regislets.maxHPBoost.level * 10;

export const focusResonanceTotalReduction = (character: Character) =>
  95 - 5 * character.regislets.focusResonance.level;

export const speedResonanceTotalReduction = (character: Character) =>
  95 - 5 * character.regislets.speedResonance.level;

export const powerResonanceTotalReduction = (character: Character) =>
  95 - 5 * character.regislets.focusResonance.level;
