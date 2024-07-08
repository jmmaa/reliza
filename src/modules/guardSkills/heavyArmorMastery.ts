import type { IntermediateConfig } from "../../types";

export const heavyArmorMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.guardSkills.heavyArmorMastery.level"];

export const heavyArmorMasteryTotalGuardRecharge = (
  config: IntermediateConfig,
) =>
  config["character.armor.type"] === "heavy" ?
    heavyArmorMasteryLevel(config)
  : 0;
