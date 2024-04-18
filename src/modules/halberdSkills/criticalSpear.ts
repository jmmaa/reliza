import { Character } from "../../types";
import { floor } from "../utils";

export const criticalSpearLevel = (character: Character) =>
  character.skills.halberdSkills.criticalSpear.level;

export const criticalSpearTotalPercentCriticalRate = (
  character: Character,
) =>
  character.mainWeapon.type === "halberd" ?
    floor(criticalSpearLevel(character) * 0.5)
  : 0;

export const criticalSpearTotalFlatCriticalRate = (
  character: Character,
) =>
  character.mainWeapon.type === "halberd" ?
    floor(criticalSpearLevel(character) * 0.5 + 0.5)
  : 0;
