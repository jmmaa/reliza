import { Character } from "../../types";
import { isDualWielder } from "../utils";

export const dualSwordControlLevel = (character: Character) =>
  character.skills.dualSwordSkills.dualSwordControl.level;

export const dualSwordControlTotalPercentCriticalRate = (
  character: Character,
) =>
  isDualWielder(character) ? 5 + dualSwordControlLevel(character) * 3 : 0;

export const dualSwordControlTotalPercentAccuracy = (
  character: Character,
) =>
  isDualWielder(character) ? 5 + dualSwordControlLevel(character) * 3 : 0;

export const dualSwordControlTotalFlatASPD = (character: Character) =>
  isDualWielder(character) ? 50 * dualSwordControlLevel(character) : 0;
