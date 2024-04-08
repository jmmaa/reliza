import { Character } from "../../types";

export const martialDisciplineTotalMartialSkillDamageBonus = (
  character: Character
) => {
  const skillLevel =
    character.skills.martialSkills.martialDiscipline.level;

  const total = character.mainWeapon.type === "knuckle" ? skillLevel : 0;

  return total;
};

export const martialDisciplineTotalPercentASPD = (
  character: Character
) => {
  const skillLevel =
    character.skills.martialSkills.martialDiscipline.level;

  const total = character.mainWeapon.type === "knuckle" ? skillLevel : 0;

  return total;
};

export const martialDisciplineTotalFlatASPD = (character: Character) => {
  const skillLevel =
    character.skills.martialSkills.martialDiscipline.level;

  const total = character.mainWeapon.type === "knuckle" ? skillLevel : 0;

  return total;
};
