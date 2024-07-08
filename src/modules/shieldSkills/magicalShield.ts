import type { IntermediateConfig } from "../../types";

export const magicalShieldLevel = (config: IntermediateConfig) =>
  config["character.skills.shieldSkills.magicalShield.level"];

export const magicalShieldTotalFlatMDEF = (config: IntermediateConfig) =>
  config["character.subweapon.type"] === "shield" ?
    magicalShieldLevel(config) * 2
  : 0;

export const magicalShieldTotalPercentMDEF = (
  config: IntermediateConfig,
) =>
  config["character.subweapon.type"] === "shield" ?
    magicalShieldLevel(config)
  : 0;

export const magicalShieldTotalFlatMaxHP = (config: IntermediateConfig) =>
  config["character.subweapon.type"] === "shield" ?
    magicalShieldLevel(config) * 50
  : 0;

export const magicalShieldTotalMagicResistance = (
  config: IntermediateConfig,
) =>
  config["character.subweapon.type"] === "shield" ?
    magicalShieldLevel(config)
  : 0;
