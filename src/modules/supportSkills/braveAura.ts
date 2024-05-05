import { Character } from "../../types";

export const braveAura = (character: Character) =>
  character.skills.supportSkills.braveAura;

export const braveAuraLevel = (character: Character) =>
  braveAura(character).level;

export const braveAuraIsActive = (character: Character) =>
  braveAura(character).isActive;

export const braveAuraTotalPercentWeaponATK = (character: Character) =>
  braveAuraIsActive(character) ? 10 + braveAuraLevel(character) * 2 : 0;

export const braveAuraTotalLastDamageModifier = (character: Character) =>
  braveAuraIsActive(character) ? braveAuraLevel(character) * 2 : 0;
