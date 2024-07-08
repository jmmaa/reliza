import type { IntermediateConfig } from "../../types";

export const siphonBarrierLevel = (config: IntermediateConfig) =>
  config["character.skills.magicBladeSkills.siphonBarrier.level"];

export const siphonBarrierIsActive = (config: IntermediateConfig) =>
  config["character.skills.magicBladeSkills.siphonBarrier.isActive"];

export const siphonBarrierTotalPhysicalResistance = (
  config: IntermediateConfig,
) =>
  (
    (config["character.mainweapon.type"] === "magic-device" ||
      config["character.subweapon.type"] === "magic-device") &&
    siphonBarrierIsActive(config)
  ) ?
    siphonBarrierLevel(config) * 9
  : 0;

export const siphonBarrierTotalMagicResistance = (
  config: IntermediateConfig,
) =>
  (
    (config["character.mainweapon.type"] === "magic-device" ||
      config["character.subweapon.type"]) &&
    siphonBarrierIsActive(config)
  ) ?
    siphonBarrierLevel(config) * 9
  : 0;
