import { Character } from "../../types";

export const siphonBarrier = (character: Character) =>
  character.skills.magicBladeSkills.siphonBarrier;

export const siphonBarrierLevel = (character: Character) =>
  siphonBarrier(character).level;

export const siphonBarrierIsActive = (character: Character) =>
  siphonBarrier(character).isActive;

export const siphonBarrierTotalPhysicalResistance = (
  character: Character,
) =>
  (
    (character.mainWeapon.type === "magic-device" ||
      character.subWeapon.type === "magic-device") &&
    siphonBarrierIsActive(character)
  ) ?
    siphonBarrierLevel(character) * 9
  : 0;

export const siphonBarrierTotalMagicResistance = (character: Character) =>
  (
    (character.mainWeapon.type === "magic-device" ||
      character.subWeapon.type === "magic-device") &&
    siphonBarrierIsActive(character)
  ) ?
    siphonBarrierLevel(character) * 9
  : 0;
