import type { Config } from "../../types";

export const siphonBarrierLevel = (config: Config) =>
  config["character.skills.magicBladeSkills.siphonBarrier.level"];

export const siphonBarrierIsActive = (config: Config) =>
  config["character.skills.magicBladeSkills.siphonBarrier.isActive"];

export const siphonBarrierTotalPhysicalResistance = (config: Config) =>
  (
    (config["character.mainweapon.type"] === "magic-device" ||
      config["character.subweapon.type"] === "magic-device") &&
    siphonBarrierIsActive(config)
  ) ?
    siphonBarrierLevel(config) * 9
  : 0;

export const siphonBarrierTotalMagicResistance = (config: Config) =>
  (
    (config["character.mainweapon.type"] === "magic-device" ||
      config["character.subweapon.type"]) &&
    siphonBarrierIsActive(config)
  ) ?
    siphonBarrierLevel(config) * 9
  : 0;
