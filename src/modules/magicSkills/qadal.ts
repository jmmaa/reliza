import { Character } from "../../types";

export const qadal = (character: Character) =>
  character.skills.magicSkills.qadal;

export const qadalLevel = (character: Character) => qadal(character).level;

export const qadalIsActive = (character: Character) =>
  qadal(character).isActive;

export const qadalCharge = (character: Character) =>
  qadal(character).charge;

export const qadalTimer = (character: Character) => qadal(character).timer;

export const qadalTotalLastDamageModifier = (character: Character) =>
  qadalIsActive(character) ?
    qadalCharge(character) > Math.floor(qadalTimer(character) / 3) ?
      Math.floor(qadalTimer(character) / 3)
    : qadalCharge(character)
  : 0;
