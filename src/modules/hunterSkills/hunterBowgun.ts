import { Character } from "../../types";
import { floor } from "../utils";

export const hunterBowgunLevel = (character: Character) =>
  character.skills.hunterSkills.hunterBowgun.level;

export const hunterBowgunTotalBaseATK = (character: Character) =>
  (
    character.mainWeapon.type === "bowgun" &&
    !(
      character.subWeapon.type === "arrow" ||
      character.subWeapon.type === "none"
    )
  ) ?
    (1 + (floor(hunterBowgunLevel(character) * 1.5) * 5) / 3 / 100) *
    character.mainWeapon.ATK
  : 0;
