import { Config } from "../../types";

export const spellBurstLevel = (config: Config) =>
  config["character.skills.battleSkills.spellBurst.level"];

export const spellBurstTotalMagicCriticalDamageConversion = (
  config: Config,
) => spellBurstLevel(config) * 2.5;

export const spellBurstTotalMagicCriticalRateConversion = (
  config: Config,
) => spellBurstLevel(config) * 2.5;

// did not include this to the main calcs yet
