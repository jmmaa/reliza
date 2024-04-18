import { Character } from "../../types";

export const heavyArmorMasteryLevel = (character: Character) =>
  character.skills.guardSkills.heavyArmorMastery.level;

export const heavyArmorMasteryTotalGuardRecharge = (
  character: Character,
) =>
  character.armor.type === "heavy" ? heavyArmorMasteryLevel(character) : 0;
