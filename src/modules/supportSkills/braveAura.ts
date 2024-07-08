import type { IntermediateConfig } from "../../types";

export const braveAuraLevel = (config: IntermediateConfig) =>
  config["character.skills.supportSkills.braveAura.level"];

export const braveAuraIsActive = (config: IntermediateConfig) =>
  config["character.skills.supportSkills.braveAura.isActive"];

export const braveAuraTotalPercentWeaponATK = (
  config: IntermediateConfig,
) => (braveAuraIsActive(config) ? 10 + braveAuraLevel(config) * 2 : 0);

export const braveAuraTotalLastDamageModifier = (
  config: IntermediateConfig,
) => (braveAuraIsActive(config) ? braveAuraLevel(config) * 2 : 0);

// CONTINUE THIS TOMORROW
