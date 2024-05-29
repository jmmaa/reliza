import type { Config } from "../../types";

export const manaRechargeLevel = (config: Config) =>
  config["character.skills.supportSkills.manaRecharge.level"];

export const manaRechargeIsActive = (config: Config) =>
  config["character.skills.supportSkills.manaRecharge.isActive"];

export const manaRechargeTotalLastDamageModifier = (config: Config) =>
  manaRechargeIsActive(config) ?
    -(50 - manaRechargeLevel(config) * 2.5)
  : 0;
