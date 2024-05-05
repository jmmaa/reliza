import { Character } from "../../types";

export const manaRecharge = (character: Character) =>
  character.skills.supportSkills.manaRecharge;

export const manaRechargeLevel = (character: Character) =>
  manaRecharge(character).level;

export const manaRechargeIsActive = (character: Character) =>
  manaRecharge(character).isActive;

export const manaRechargeTotalLastDamageModifier = (
  character: Character,
) =>
  manaRechargeIsActive(character) ?
    -(50 - manaRechargeLevel(character) * 2.5)
  : 0;
