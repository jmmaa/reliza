import type { IntermediateConfig } from "../../types";

export const MPBoostLevel = (config: IntermediateConfig) =>
  config["character.skills.survivalSkills.MPBoost.level"];

export const MPBoostTotalFlatMaxMP = (config: IntermediateConfig) =>
  MPBoostLevel(config) * 30;
