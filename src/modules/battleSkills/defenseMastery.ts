import { Character } from "../../types";
import { floor } from "../utils";

export const defenseMasteryLevel = (character: Character) =>
  character.skills.battleSkills.defenseMastery.level;

export const defenseMasteryTotalFlatDEF = (character: Character) =>
  floor(character.level * ((2.5 * defenseMasteryLevel(character)) / 100));

export const defenseMasteryTotalFlatMDEF = (character: Character) =>
  floor(character.level * ((2.5 * defenseMasteryLevel(character)) / 100));
