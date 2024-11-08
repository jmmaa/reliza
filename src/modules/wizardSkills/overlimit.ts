import type { IntermediateConfig } from "../../types";
import {
  sorceryGuideTotalCSPDPenaltyReductionForOverlimit,
  sorceryGuideTotalElementDamageModifierBonusForOverlimit,
} from "./sorceryGuide";

export const overlimitLevel = (config: IntermediateConfig) =>
  config["character.skills.wizardSkills.overlimit.level"];

export const overlimitIsActive = (config: IntermediateConfig) =>
  config["character.skills.wizardSkills.overlimit.isActive"];

export const overlimitTotalElementDamageModifier = (
  config: IntermediateConfig,
) =>
  overlimitIsActive(config) ?
    overlimitLevel(config) +
    sorceryGuideTotalElementDamageModifierBonusForOverlimit(config)
  : 0;

export const overlimitTotalFlatCSPD = (config: IntermediateConfig) =>
  overlimitIsActive(config) ?
    -1000 + sorceryGuideTotalCSPDPenaltyReductionForOverlimit(config)
  : 0;
