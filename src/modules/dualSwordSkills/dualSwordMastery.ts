import { Character } from "../../types";
import { isDualWielder } from "../utils";

export const dualSwordMasteryLevel = (character: Character) =>
  character.skills.dualSwordSkills.dualSwordMastery.level;

export const dualSwordMasteryTotalPercentCriticalRate = (
  character: Character,
) =>
  isDualWielder(character) ?
    -55 + dualSwordMasteryLevel(character) * 3
  : 0;

export const dualSwordMasteryTotalPercentAccuracy = (
  character: Character,
) =>
  isDualWielder(character) ?
    -55 + dualSwordMasteryLevel(character) * 3
  : 0;
