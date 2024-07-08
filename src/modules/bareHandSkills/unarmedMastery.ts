import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const unarmedMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.bareHandSkills.unarmedMastery.level"];

export const unarmedMasteryTotalFlatWeaponATK = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "bare-hand" &&
    config["character.subweapon.type"] === "none"
  ) ?
    floor((config["character.level"] * unarmedMasteryLevel(config)) / 10)
  : 0;

export const unarmedMasteryTotalQiChargeLimit = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "bare-hand" &&
    config["character.subweapon.type"] === "none"
  ) ?
    unarmedMasteryLevel(config) < 10 ?
      10 + unarmedMasteryLevel(config) * 10
    : 100 + config["character.level"]
  : 0;
