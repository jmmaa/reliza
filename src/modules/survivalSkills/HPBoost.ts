import type { Config } from "../../types";

export const HPBoostLevel = (config: Config) =>
  config["character.skills.survivalSkills.HPBoost.level"];

export const HPBoostTotalPercentMaxHP = (config: Config) =>
  HPBoostLevel(config) * 2;

export const HPBoostTotalFlatMaxHP = (config: Config) =>
  HPBoostLevel(config) * 100;
