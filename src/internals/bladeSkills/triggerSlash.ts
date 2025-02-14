import { type Config } from "../data";
import { mainWeaponElement } from "../stats";
import { bladeSkills, isUsingMainOHS, isUsingMainTHS } from "../utils";

export const triggerSlash = (config: Config) =>
  bladeSkills(config).triggerslash;

export const triggerSlashLevel = (config: Config) =>
  triggerSlash(config).level;

export const triggerSlashAMPRBuffAmount = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    triggerSlashLevel(config) * 2
  : 0;

export const triggerSlashSkillMultiplier = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    150 + 5 * triggerSlashLevel(config)
  : 0;

export const triggerSlashSkillConstant = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    200 + 10 * triggerSlashLevel(config)
  : 0;

export const triggerSlashMPCost = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    triggerSlashLevel(config) >= 1 && triggerSlashLevel(config) <= 5 ? 300
    : triggerSlashLevel(config) >= 6 && triggerSlashLevel(config) <= 10 ?
      200
    : 300
  : 0;

export const triggerSlashElement = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    mainWeaponElement(config)
  : "NEUTRAL_ELEMENT";

export const calculateTriggerSlash = (config: Config) => ({
  triggerSlashLevel: triggerSlashLevel(config),
  triggerSlashAMPRBuffAmount: triggerSlashAMPRBuffAmount(config),
  triggerSlashElement: triggerSlashElement(config),
  triggerSlashMPCost: triggerSlashMPCost(config),
  triggerSlashSkillConstant: triggerSlashSkillConstant(config),
  triggerSlashSkillMultiplier: triggerSlashSkillMultiplier(config),
});
