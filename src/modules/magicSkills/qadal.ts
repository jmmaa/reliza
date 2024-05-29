import type { Config } from "../../types";

export const qadalLevel = (config: Config) =>
  config["character.skills.magicSkills.qadal.level"];

export const qadalIsActive = (config: Config) =>
  config["character.skills.magicSkills.qadal.isActive"];

export const qadalCharge = (config: Config) =>
  config["character.skills.magicSkills.qadal.charge"];

export const qadalTimer = (config: Config) =>
  config["character.skills.magicSkills.qadal.timer"];

export const qadalTotalLastDamageModifier = (config: Config) =>
  qadalIsActive(config) ?
    qadalCharge(config) > Math.floor(qadalTimer(config) / 3) ?
      Math.floor(qadalTimer(config) / 3)
    : qadalCharge(config)
  : 0;
