import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const advancedGuardLevel = (config: IntermediateConfig) =>
  config["character.skills.guardSkills.advancedGuard.level"];

export const advancedGuardTotalGuardRecharge = (
  config: IntermediateConfig,
) =>
  config["character.armor.type"] === "heavy" ?
    advancedGuardLevel(config)
  : 0;

export const advancedGuardTotalGuardPower = (
  config: IntermediateConfig,
) =>
  config["character.armor.type"] === "heavy" ?
    floor((1 + advancedGuardLevel(config)) / 2)
  : 0;
