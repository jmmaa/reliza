import { Character } from "../../types";
import { isDualWielder } from "../utils";

export const flashBlast = (character: Character) =>
  character.skills.dualSwordSkills.flashBlast;
export const flashBlastLevel = (character: Character) =>
  flashBlast(character).level;

export const flashBlastIsActive = (character: Character) =>
  flashBlast(character).isActive;

export const flashBlastTotalPercentUnsheatheAttack = (
  character: Character,
) => (flashBlastIsActive(character) ? flashBlastLevel(character) : 0);

export const flashBlastTotalPercentMainWeaponATK = (
  character: Character,
) =>
  flashBlastIsActive(character) ?
    isDualWielder(character) && flashBlastLevel(character) > 0 ?
      25
    : 0
  : 0;
