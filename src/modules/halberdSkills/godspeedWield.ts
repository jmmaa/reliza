import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const godspeedWieldStacks = (config: IntermediateConfig) =>
  config["character.skills.halberdSkills.godspeedWield.stacks"];

export const godspeedWieldLevel = (config: IntermediateConfig) =>
  config["character.skills.halberdSkills.godspeedWield.level"];

export const godspeedWieldIsActive = (config: IntermediateConfig) =>
  config["character.skills.halberdSkills.godspeedWield.isActive"];

export const godspeedWieldTotalFlatASPD = (config: IntermediateConfig) =>
  godspeedWieldIsActive(config) ?
    config["character.mainweapon.type"] === "halberd" ?
      30 * godspeedWieldLevel(config) * godspeedWieldStacks(config) +
      100 * godspeedWieldStacks(config)
    : 30 * godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;

export const godspeedWieldTotalMotionSpeed = (
  config: IntermediateConfig,
) =>
  godspeedWieldIsActive(config) ?
    godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;

export const almightyWieldLevel = (config: IntermediateConfig) =>
  config["character.skills.halberdSkills.almightyWield.level"];

export const godspeedWieldTotalPhysicalResistance = (
  config: IntermediateConfig,
) =>
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

export const godspeedWieldTotalMagicResistance = (
  config: IntermediateConfig,
) =>
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

export const godspeedWieldTotalFlatMaxMP = (config: IntermediateConfig) =>
  godspeedWieldIsActive(config) ? -(100 * godspeedWieldStacks(config)) : 0;

export const godspeedWieldTotalPercentEvasionRecharge = (
  config: IntermediateConfig,
) =>
  godspeedWieldIsActive(config) ?
    godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;
