import { Character } from "../../types";

export const magicAttackBoostTotalFlatMATK = (character: Character) => {
  const regisletLevel = character.regislets.magicAttackBoost.level;

  return regisletLevel;
};

export const focusResonanceTotalReduction = (character: Character) => {
  const regisletLevel = character.regislets.focusResonance.level;

  return 95 - 5 * regisletLevel;
};

export const speedResonanceTotalReduction = (character: Character) => {
  const regisletLevel = character.regislets.speedResonance.level;

  return 95 - 5 * regisletLevel;
};

export const powerResonanceTotalReduction = (character: Character) => {
  const regisletLevel = character.regislets.powerResonance.level;

  return 95 - 5 * regisletLevel;
};
