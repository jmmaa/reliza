import type { IntermediateConfig } from "../../types";

export const shieldMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.shieldSkills.shieldMastery.level"];

export const shieldMasteryPercentASPDPenaltyReduction = (
  config: IntermediateConfig,
) =>
  config["character.subweapon.type"] === "shield" ?
    shieldMasteryLevel(config) * 5
  : 0;
