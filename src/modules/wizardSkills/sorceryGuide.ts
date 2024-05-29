import type { Config } from "../../types";

export const sorceryGuideLevel = (config: Config) =>
  config["character.skills.wizardSkills.sorceryGuide.level"];

export const sorceryGuideTotalCSPDPenaltyReductionForOverlimit = (
  config: Config,
) => sorceryGuideLevel(config) * 50;

export const sorceryGuideTotalElementDamageModifierBonusForOverlimit = (
  config: Config,
) => sorceryGuideLevel(config);
