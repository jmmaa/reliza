import type { Config } from "../../types";

export const MPBoostLevel = (config: Config) =>
  config["character.skills.survivalSkills.MPBoost.level"];

export const MPBoostTotalFlatMaxMP = (config: Config) =>
  MPBoostLevel(config) * 30;
