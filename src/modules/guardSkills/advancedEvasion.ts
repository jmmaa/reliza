import { Character } from "../../types";

export const advancedEvasionLevel = (character: Character) =>
  character.skills.guardSkills.advancedEvasion.level;

export const advancedEvasionTotalEvasionRecharge = (
  character: Character,
) =>
  character.armor.type === "light" ? advancedEvasionLevel(character) : 0;
