import { Character } from "../../types";

export const lightArmorMasteryLevel = (character: Character) =>
  character.skills.guardSkills.lightArmorMastery.level;

export const lightArmorMasteryTotalEvasionRecharge = (
  character: Character,
) =>
  character.armor.type === "light" ? lightArmorMasteryLevel(character) : 0;
