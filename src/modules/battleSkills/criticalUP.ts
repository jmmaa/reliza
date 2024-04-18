import { Character } from "../../types";
import { floor } from "../utils";

export const criticalUPLevel = (character: Character) =>
  character.skills.battleSkills.criticalUP.level;

export const criticalUPTotalFlatCriticalRate = (character: Character) =>
  floor(criticalUPLevel(character) / 2);

export const criticalUPTotalPercentCriticalDamage = (
  character: Character,
) => floor(criticalUPLevel(character) / 2);
