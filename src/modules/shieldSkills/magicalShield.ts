import type { Config } from "../../types";

export const magicalShieldLevel = (config: Config) =>
  config["character.skills.shieldSkills.magicalShield.level"];

export const magicalShieldTotalFlatMDEF = (config: Config) =>
  config["character.subweapon.type"] === "shield" ?
    magicalShieldLevel(config) * 2
  : 0;

export const magicalShieldTotalPercentMDEF = (config: Config) =>
  config["character.subweapon.type"] === "shield" ?
    magicalShieldLevel(config)
  : 0;

export const magicalShieldTotalFlatMaxHP = (config: Config) =>
  config["character.subweapon.type"] === "shield" ?
    magicalShieldLevel(config) * 50
  : 0;

export const magicalShieldTotalMagicResistance = (config: Config) =>
  config["character.subweapon.type"] === "shield" ?
    magicalShieldLevel(config)
  : 0;
