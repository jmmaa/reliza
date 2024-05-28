import { Character, Config } from "../../types";
import {
  sorceryGuideTotalCSPDPenaltyReductionForOverlimit,
  sorceryGuideTotalElementDamageModifierBonusForOverlimit,
} from "./sorceryGuide";

export const overlimitLevel = (config: Config) =>
  config["character.skills.wizardSkills.overlimit.level"];

export const overlimitIsActive = (config: Config) =>
  config["character.skills.wizardSkills.overlimit.isActive"];

export const overlimitTotalElementDamageModifier = (config: Config) =>
  overlimitIsActive(config) ?
    overlimitLevel(config) +
    sorceryGuideTotalElementDamageModifierBonusForOverlimit(config)
  : 0;

export const overlimitTotalFlatCSPD = (config: Config) =>
  overlimitIsActive(config) ?
    -1000 + sorceryGuideTotalCSPDPenaltyReductionForOverlimit(config)
  : 0;
