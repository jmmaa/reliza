import { Character } from "../../types";
import { floor } from "../utils";

export const quickAura = (character: Character) =>
  character.skills.halberdSkills.quickAura;

export const quickAuraLevel = (character: Character) =>
  quickAura(character).level;

export const quickAuraIsActive = (character: Character) =>
  quickAura(character).isActive;

export const quickAuraTotalFlatASPD = (character: Character) =>
  quickAuraIsActive(character) ? quickAuraLevel(character) * 50 : 0;

export const quickAuraTotalPercentASPD = (character: Character) =>
  quickAuraIsActive(character) ?
    floor(quickAuraLevel(character) * 2.5)
  : 0;
