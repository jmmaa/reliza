import type { IntermediateConfig } from "../../types";

export const qadalLevel = (config: IntermediateConfig) =>
  config["character.skills.magicSkills.qadal.level"];

export const qadalIsActive = (config: IntermediateConfig) =>
  config["character.skills.magicSkills.qadal.isActive"];

export const qadalCharge = (config: IntermediateConfig) =>
  config["character.skills.magicSkills.qadal.charge"];

export const qadalTimer = (config: IntermediateConfig) =>
  config["character.skills.magicSkills.qadal.timeActive"];

export const qadalTotalLastDamageModifier = (
  config: IntermediateConfig,
) =>
  qadalIsActive(config) ?
    qadalCharge(config) > Math.floor(qadalTimer(config) / 3) ?
      Math.floor(qadalTimer(config) / 3)
    : qadalCharge(config)
  : 0;
