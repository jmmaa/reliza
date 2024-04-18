import { Character } from "../../types";
import { floor } from "../utils";

export const magicUPLevel = (character: Character) =>
  character.skills.battleSkills.magicUP.level;

export const magicUPTotalFlatMATK = (character: Character) =>
  floor((character.level * (2.5 * magicUPLevel(character))) / 100);
