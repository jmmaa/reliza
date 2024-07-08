import type { IntermediateConfig } from "../../types";

export const sorceryGuideLevel = (config: IntermediateConfig) =>
  config["character.skills.wizardSkills.sorceryGuide.level"];

export const sorceryGuideTotalCSPDPenaltyReductionForOverlimit = (
  config: IntermediateConfig,
) => sorceryGuideLevel(config) * 50;

export const sorceryGuideTotalElementDamageModifierBonusForOverlimit = (
  config: IntermediateConfig,
) => sorceryGuideLevel(config);
