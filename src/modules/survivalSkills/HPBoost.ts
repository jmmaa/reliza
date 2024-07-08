import type { IntermediateConfig } from "../../types";

export const HPBoostLevel = (config: IntermediateConfig) =>
  config["character.skills.survivalSkills.HPBoost.level"];

export const HPBoostTotalPercentMaxHP = (config: IntermediateConfig) =>
  HPBoostLevel(config) * 2;

export const HPBoostTotalFlatMaxHP = (config: IntermediateConfig) =>
  HPBoostLevel(config) * 100;
