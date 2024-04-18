import { Character } from "../../types";

export const magicAttackBoostTotalFlatMATK = (character: Character) =>
  character.regislets.magicAttackBoost.level;

export const focusResonanceTotalReduction = (character: Character) =>
  95 - 5 * character.regislets.focusResonance.level;

export const speedResonanceTotalReduction = (character: Character) =>
  95 - 5 * character.regislets.speedResonance.level;

export const powerResonanceTotalReduction = (character: Character) =>
  95 - 5 * character.regislets.focusResonance.level;
