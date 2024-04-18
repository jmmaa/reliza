import { Character } from "../../types";
import { floor, isDualWielder } from "../utils";

export const godspeedLevel = (character: Character) =>
  character.skills.dualSwordSkills.godspeed.level;

export const godspeedTotalFlatAGI = (character: Character) =>
  godspeedLevel(character) + Math.max(godspeedLevel(character) - 5, 0);

export const godspeedTotalPercentUnsheatheAttack = (
  character: Character,
) =>
  isDualWielder(character) ?
    godspeedLevel(character) + 15
  : godspeedLevel(character) + 5;
