import type { IntermediateConfig } from "../../types";

export const forceShieldLevel = (config: IntermediateConfig) =>
  config["character.skills.shieldSkills.forceShield.level"];

export const forceShieldTotalFlatDEF = (config: IntermediateConfig) =>
  config["character.subweapon.type"] === "shield" ?
    forceShieldLevel(config) * 2
  : 0;

export const forceShieldTotalPercentDEF = (config: IntermediateConfig) =>
  config["character.subweapon.type"] === "shield" ?
    forceShieldLevel(config)
  : 0;

export const forceShieldTotalFlatMaxHP = (config: IntermediateConfig) =>
  config["character.subweapon.type"] === "shield" ?
    forceShieldLevel(config) * 50
  : 0;

export const forceShieldTotalPhysicalResistance = (
  config: IntermediateConfig,
) =>
  config["character.subweapon.type"] === "shield" ?
    forceShieldLevel(config)
  : 0;
