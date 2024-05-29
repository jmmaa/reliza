import type { Config } from "../../types";
import { floor } from "../utils";

export const advancedGuardLevel = (config: Config) =>
  config["character.skills.guardSkills.advancedGuard.level"];

export const advancedGuardTotalGuardRecharge = (config: Config) =>
  config["character.armor.type"] === "heavy" ?
    advancedGuardLevel(config)
  : 0;

export const advancedGuardTotalGuardPower = (config: Config) =>
  config["character.armor.type"] === "heavy" ?
    floor((1 + advancedGuardLevel(config)) / 2)
  : 0;
