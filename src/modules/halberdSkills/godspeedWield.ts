import { Config } from "../../types";
import { floor } from "../utils";

export const godspeedWieldStacks = (config: Config) =>
  config["character.skills.halberdSkills.godspeedWield.stacks"];

export const godspeedWieldLevel = (config: Config) =>
  config["character.skills.halberdSkills.godspeedWield.level"];

export const godspeedWieldIsActive = (config: Config) =>
  config["character.skills.halberdSkills.godspeedWield.isActive"];

export const godspeedWieldTotalFlatASPD = (config: Config) =>
  godspeedWieldIsActive(config) ?
    config["character.mainweapon.type"] === "halberd" ?
      30 * godspeedWieldLevel(config) * godspeedWieldStacks(config) +
      100 * godspeedWieldStacks(config)
    : 30 * godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;

export const godspeedWieldTotalMotionSpeed = (config: Config) =>
  godspeedWieldIsActive(config) ?
    godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;

export const almightyWieldLevel = (config: Config) =>
  config["character.skills.halberdSkills.almightyWield.level"];

export const godspeedWieldTotalPhysicalResistance = (config: Config) =>
  godspeedWieldIsActive(config) ?
    config["character.mainweapon.type"] === "halberd" ?
      -(
        (100 - 3 * godspeedWieldLevel(config)) *
          godspeedWieldStacks(config) +
        45 * godspeedWieldStacks(config) +
        floor(almightyWieldLevel(config) * 0.5) *
          godspeedWieldStacks(config)
      )
    : -(
        (100 - 3 * godspeedWieldLevel(config)) *
        godspeedWieldStacks(config)
      )
  : 0;

export const godspeedWieldTotalMagicResistance = (config: Config) =>
  godspeedWieldIsActive(config) ?
    config["character.mainweapon.type"] === "halberd" ?
      -(
        (100 - 3 * godspeedWieldLevel(config)) *
          godspeedWieldStacks(config) +
        45 * godspeedWieldStacks(config) +
        floor(almightyWieldLevel(config) * 0.5) *
          godspeedWieldStacks(config)
      )
    : -(
        (100 - 3 * godspeedWieldLevel(config)) *
        godspeedWieldStacks(config)
      )
  : 0;

export const godspeedWieldTotalFlatMaxMP = (config: Config) =>
  godspeedWieldIsActive(config) ? -(100 * godspeedWieldStacks(config)) : 0;

export const godspeedWieldTotalPercentEvasionRecharge = (
  config: Config,
) =>
  godspeedWieldIsActive(config) ?
    godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;
