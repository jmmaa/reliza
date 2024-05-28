import { Config } from "../../types";

export const braveAuraLevel = (config: Config) =>
  config["character.skills.supportSkills.braveAura.level"];

export const braveAuraIsActive = (config: Config) =>
  config["character.skills.supportSkills.braveAura.isActive"];

export const braveAuraTotalPercentWeaponATK = (config: Config) =>
  braveAuraIsActive(config) ? 10 + braveAuraLevel(config) * 2 : 0;

export const braveAuraTotalLastDamageModifier = (config: Config) =>
  braveAuraIsActive(config) ? braveAuraLevel(config) * 2 : 0;

// CONTINUE THIS TOMORROW
