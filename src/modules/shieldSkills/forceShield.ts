import { Config } from "../../types";

export const forceShieldLevel = (config: Config) =>
  config["character.skills.shieldSkills.forceShield.level"];

export const forceShieldTotalFlatDEF = (config: Config) =>
  config["character.subweapon.type"] === "shield" ?
    forceShieldLevel(config) * 2
  : 0;

export const forceShieldTotalPercentDEF = (config: Config) =>
  config["character.subweapon.type"] === "shield" ?
    forceShieldLevel(config)
  : 0;

export const forceShieldTotalFlatMaxHP = (config: Config) =>
  config["character.subweapon.type"] === "shield" ?
    forceShieldLevel(config) * 50
  : 0;

export const forceShieldTotalPhysicalResistance = (config: Config) =>
  config["character.subweapon.type"] === "shield" ?
    forceShieldLevel(config)
  : 0;
