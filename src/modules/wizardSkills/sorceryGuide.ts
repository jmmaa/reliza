import { Character } from "../../types";

export const sorceryGuideLevel = (charater: Character) =>
  charater.skills.wizardSkills.sorceryGuide.level;

export const sorceryGuideTotalCSPDPenaltyReductionForOverlimit = (
  character: Character,
) => sorceryGuideLevel(character) * 50;

export const sorceryGuideTotalElementDamageModifierBonusForOverlimit = (
  character: Character,
) => sorceryGuideLevel(character);
