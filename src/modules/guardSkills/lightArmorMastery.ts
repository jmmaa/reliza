import type { IntermediateConfig } from "../../types";

export const lightArmorMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.guardSkills.lightArmorMastery.level"];

export const lightArmorMasteryTotalEvasionRecharge = (
  config: IntermediateConfig,
) =>
  config["character.armor.type"] === "light" ?
    lightArmorMasteryLevel(config)
  : 0;
