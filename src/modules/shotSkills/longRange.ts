import type { IntermediateConfig } from "../../types";

export const longRangeLevel = (config: IntermediateConfig) =>
  config["character.skills.shotSkills.longRange.level"];

export const longRangeTotalSkillDamageModifier = (
  config: IntermediateConfig,
) => longRangeLevel(config);
