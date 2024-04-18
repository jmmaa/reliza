import { Character } from "../../types";
import { floor } from "../utils";

export const defenseUPLevel = (character: Character) =>
  character.skills.battleSkills.defenseUP.level;

export const defenseUPTotalFlatDEF = (character: Character) =>
  floor(character.level * ((2.5 * defenseUPLevel(character)) / 100));

export const defenseUPTotalFlatMDEF = (character: Character) =>
  floor(character.level * ((2.5 * defenseUPLevel(character)) / 100));
