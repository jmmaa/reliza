import { Character } from "../../types";
import { floor } from "../utils";

export const attackUPLevel = (character: Character) =>
  character.skills.battleSkills.attackUP.level;

export const attackUPTotalFlatATK = (character: Character) =>
  floor((character.level * (2.5 * attackUPLevel(character))) / 100);
