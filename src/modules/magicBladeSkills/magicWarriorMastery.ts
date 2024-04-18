import { Character } from "../../types";

export const magicWarriorMasteryLevel = (character: Character) =>
  character.skills.magicBladeSkills.magicWarriorMastery.level;

export const magicWarriorMasteryTotalPercentATKPenaltyReduction = (
  character: Character,
) =>
  character.subWeapon.type === "magic-device" ?
    magicWarriorMasteryLevel(character) +
    (character.mainWeapon.type === "one-handed-sword" ? 5 : 0)
  : 0;

export const magicWarriorMasteryTotalFlatMATK = (character: Character) =>
  character.subWeapon.type === "magic-device" ?
    magicWarriorMasteryLevel(character) * 2 +
    (magicWarriorMasteryLevel(character) - 5 > 0 ?
      magicWarriorMasteryLevel(character) - 5
    : 0)
  : 0;

export const magicWarriorMasteryTotalFlatCSPD = (character: Character) =>
  character.subWeapon.type === "magic-device" ?
    magicWarriorMasteryLevel(character) * 10
  : 0;

export const magicWarriorMasteryTotalPercentCSPD = (
  character: Character,
) =>
  character.subWeapon.type === "magic-device" ?
    magicWarriorMasteryLevel(character) * 1 +
    Math.max(magicWarriorMasteryLevel(character) - 5, 0)
  : 0;
