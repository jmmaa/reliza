import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const etherFlareLevel = (config: IntermediateConfig) =>
  config["character.skills.magicBladeSkills.etherFlare.level"];

export const etherFlareInflictedIgniteOnEnemy = (
  config: IntermediateConfig,
) => config["character.skills.magicBladeSkills.etherFlare.isActive"];

export const etherFlareTotalFlatAMPR = (config: IntermediateConfig) =>
  (
    config["character.subweapon.type"] === "magic-device" &&
    etherFlareInflictedIgniteOnEnemy(config)
  ) ?
    15 +
    floor(etherFlareLevel(config) / 6) * 5 +
    floor(etherFlareLevel(config) / 5) * 5
  : 0;
