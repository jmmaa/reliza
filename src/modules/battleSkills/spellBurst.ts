import type { IntermediateConfig } from "../../types";

export const spellBurstLevel = (config: IntermediateConfig) =>
  config["character.skills.battleSkills.spellBurst.level"];

export const spellBurstTotalMagicCriticalDamageConversion = (
  config: IntermediateConfig,
) => spellBurstLevel(config) * 2.5;

export const spellBurstTotalMagicCriticalRateConversion = (
  config: IntermediateConfig,
) => spellBurstLevel(config) * 2.5;

// did not include this to the main calcs yet
