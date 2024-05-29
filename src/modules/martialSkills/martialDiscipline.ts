import type { Config } from "../../types";

export const martialDisciplineLevel = (config: Config) =>
  config["character.skills.martialSkills.martialDiscipline.level"];

export const martialDisciplineTotalMartialSkillDamageBonus = (
  config: Config,
) =>
  config["character.mainweapon.type"] === "knuckle" ?
    martialDisciplineLevel(config)
  : 0;

export const martialDisciplineTotalPercentASPD = (config: Config) =>
  config["character.mainweapon.type"] === "knuckle" ?
    martialDisciplineLevel(config)
  : 0;

export const martialDisciplineTotalFlatASPD = (config: Config) =>
  config["character.mainweapon.type"] === "knuckle" ?
    martialDisciplineLevel(config)
  : 0;
