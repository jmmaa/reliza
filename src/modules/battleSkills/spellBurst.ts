import { Character } from "../../types";

export const spellBurstLevel = (character: Character) =>
  character.skills.battleSkills.spellBurst.level;

export const spellBurstTotalMagicCriticalDamageConversion = (
  character: Character,
) => spellBurstLevel(character) * 2.5;

export const spellBurstTotalMagicCriticalRateConversion = (
  character: Character,
) => spellBurstLevel(character) * 2.5;

// did not include this to the main calcs yet
