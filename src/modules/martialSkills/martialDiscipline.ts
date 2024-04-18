import { Character } from "../../types";

export const martialDisciplineLevel = (character: Character) =>
  character.skills.martialSkills.martialDiscipline.level;

export const martialDisciplineTotalMartialSkillDamageBonus = (
  character: Character,
) =>
  character.mainWeapon.type === "knuckle" ?
    martialDisciplineLevel(character)
  : 0;

export const martialDisciplineTotalPercentASPD = (character: Character) =>
  character.mainWeapon.type === "knuckle" ?
    martialDisciplineLevel(character)
  : 0;

export const martialDisciplineTotalFlatASPD = (character: Character) =>
  character.mainWeapon.type === "knuckle" ?
    martialDisciplineLevel(character)
  : 0;
