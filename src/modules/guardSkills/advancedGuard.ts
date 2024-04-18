import { Character } from "../../types";
import { floor } from "../utils";

export const advancedGuardLevel = (character: Character) =>
  character.skills.guardSkills.advancedGuard.level;

export const advancedGuardTotalGuardRecharge = (character: Character) =>
  character.armor.type === "heavy" ? advancedGuardLevel(character) : 0;

export const advancedGuardTotalGuardPower = (character: Character) =>
  character.armor.type === "heavy" ?
    floor((1 + advancedGuardLevel(character)) / 2)
  : 0;
