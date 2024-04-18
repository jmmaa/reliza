import { Character } from "../../types";
import { floor } from "../utils";

export const aggravateLevel = (character: Character) =>
  character.skills.martialSkills.aggravate.level;

export const aggravateTotalFlatAMPR = (character: Character) =>
  character.mainWeapon.type === "knuckle" ?
    floor(aggravateLevel(character) * 0.5)
  : 0;

export const aggravateTotalPercentAccuracy = (character: Character) =>
  character.mainWeapon.type === "knuckle" ?
    aggravateLevel(character) * 2
  : 0;
