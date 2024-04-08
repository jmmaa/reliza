import { Character } from "../../types";
import { floor } from "../utils";

export const aggravateTotalFlatAMPR = (character: Character) => {
  const skillLevel = character.skills.martialSkills.aggravate.level;

  const total =
    character.mainWeapon.type === "knuckle" ? floor(skillLevel * 0.5) : 0;

  return total;
};

export const aggravateTotalPercentAccuracy = (character: Character) => {
  const skillLevel = character.skills.martialSkills.aggravate.level;

  const total =
    character.mainWeapon.type === "knuckle" ? skillLevel * 2 : 0;

  return total;
};
