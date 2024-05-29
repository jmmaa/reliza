import type { Config } from "../../types";

export const advancedEvasionLevel = (config: Config) =>
  config["character.skills.guardSkills.advancedEvasion.level"];

export const advancedEvasionTotalEvasionRecharge = (config: Config) =>
  config["character.armor.type"] === "light" ?
    advancedEvasionLevel(config)
  : 0;
