import { Character, Config } from "../../types";

export const longRangeLevel = (config: Config) =>
  config["character.skills.shotSkills.longRange.level"];

export const longRangeTotalSkillDamageModifier = (config: Config) =>
  longRangeLevel(config);
