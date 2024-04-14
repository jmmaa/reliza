import { Character } from "../../types";

export const spellBurstTotalPercentMagicCriticalDamageConversion = (
  character: Character,
) => {
  const skillLevel = character.skills.battleSkills.spellBurst.level;

  return skillLevel * 2.5;
};

export const spellBurstTotalPercentMagicCriticalRateConversion = (
  character: Character,
) => {
  const skillLevel = character.skills.battleSkills.spellBurst.level;

  return skillLevel * 2.5;
};

// did not include this to the main calcs yet
