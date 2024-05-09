import { Character } from "../../types";
import { floor } from "../utils";

export const godspeedWield = (character: Character) =>
  character.skills.halberdSkills.godspeedWield;

export const godspeedWieldStacks = (character: Character) =>
  godspeedWield(character).stacks;

export const godspeedWieldLevel = (character: Character) =>
  godspeedWield(character).level;

export const godspeedWieldIsActive = (character: Character) =>
  godspeedWield(character).isActive;

export const godspeedWieldTotalFlatASPD = (character: Character) =>
  godspeedWieldIsActive(character) ?
    character.mainWeapon.type === "halberd" ?
      30 * godspeedWieldLevel(character) * godspeedWieldStacks(character) +
      100 * godspeedWieldStacks(character)
    : 30 * godspeedWieldLevel(character) * godspeedWieldStacks(character)
  : 0;

export const godspeedWieldTotalMotionSpeed = (character: Character) =>
  godspeedWieldIsActive(character) ?
    godspeedWieldLevel(character) * godspeedWieldStacks(character)
  : 0;

export const almightyWieldLevel = (character: Character) =>
  character.skills.halberdSkills.almightyWield.level;

export const godspeedWieldTotalPhysicalResistance = (
  character: Character,
) =>
  godspeedWieldIsActive(character) ?
    character.mainWeapon.type === "halberd" ?
      -(
        (100 - 3 * godspeedWieldLevel(character)) *
          godspeedWieldStacks(character) +
        45 * godspeedWieldStacks(character) +
        floor(almightyWieldLevel(character) * 0.5) *
          godspeedWieldStacks(character)
      )
    : -(
        (100 - 3 * godspeedWieldLevel(character)) *
        godspeedWieldStacks(character)
      )
  : 0;

export const godspeedWieldTotalMagicResistance = (character: Character) =>
  godspeedWieldIsActive(character) ?
    character.mainWeapon.type === "halberd" ?
      -(
        (100 - 3 * godspeedWieldLevel(character)) *
          godspeedWieldStacks(character) +
        45 * godspeedWieldStacks(character) +
        floor(almightyWieldLevel(character) * 0.5) *
          godspeedWieldStacks(character)
      )
    : -(
        (100 - 3 * godspeedWieldLevel(character)) *
        godspeedWieldStacks(character)
      )
  : 0;

export const godspeedWieldTotalFlatMaxMP = (character: Character) =>
  godspeedWieldIsActive(character) ?
    -(100 * godspeedWieldStacks(character))
  : 0;

export const godspeedWieldTotalPercentEvasionRecharge = (
  character: Character,
) =>
  godspeedWieldIsActive(character) ?
    godspeedWieldLevel(character) * godspeedWieldStacks(character)
  : 0;
