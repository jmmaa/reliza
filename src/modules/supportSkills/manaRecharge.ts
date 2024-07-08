import type { IntermediateConfig } from "../../types";

export const manaRechargeLevel = (config: IntermediateConfig) =>
  config["character.skills.supportSkills.manaRecharge.level"];

export const manaRechargeIsActive = (config: IntermediateConfig) =>
  config["character.skills.supportSkills.manaRecharge.isActive"];

export const manaRechargeTotalLastDamageModifier = (
  config: IntermediateConfig,
) =>
  manaRechargeIsActive(config) ?
    -(50 - manaRechargeLevel(config) * 2.5)
  : 0;
