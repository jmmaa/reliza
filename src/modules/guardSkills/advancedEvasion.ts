import type { IntermediateConfig } from "../../types";

export const advancedEvasionLevel = (config: IntermediateConfig) =>
  config["character.skills.guardSkills.advancedEvasion.level"];

export const advancedEvasionTotalEvasionRecharge = (
  config: IntermediateConfig,
) =>
  config["character.armor.type"] === "light" ?
    advancedEvasionLevel(config)
  : 0;
