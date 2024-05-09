import { Character } from "../../types";
import {
  sorceryGuideTotalCSPDPenaltyReductionForOverlimit,
  sorceryGuideTotalElementDamageModifierBonusForOverlimit,
} from "./sorceryGuide";

export const overlimit = (character: Character) =>
  character.skills.wizardSkills.overlimit;

export const overlimitLevel = (character: Character) =>
  overlimit(character).level;

export const overlimitIsActive = (character: Character) =>
  overlimit(character).isActive;

export const overlimitTotalElementDamageModifier = (
  character: Character,
) =>
  overlimitIsActive(character) ?
    overlimitLevel(character) +
    sorceryGuideTotalElementDamageModifierBonusForOverlimit(character)
  : 0;

export const overlimitTotalFlatCSPD = (character: Character) =>
  overlimitIsActive(character) ?
    -1000 + sorceryGuideTotalCSPDPenaltyReductionForOverlimit(character)
  : 0;
