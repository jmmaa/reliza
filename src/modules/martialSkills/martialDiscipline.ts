import type { IntermediateConfig } from "../../types";

export const martialDisciplineLevel = (config: IntermediateConfig) =>
  config["character.skills.martialSkills.martialDiscipline.level"];

export const martialDisciplineTotalMartialSkillDamageBonus = (
  config: IntermediateConfig,
) =>
  config["character.mainweapon.type"] === "knuckle" ?
    martialDisciplineLevel(config)
  : 0;

export const martialDisciplineTotalPercentASPD = (
  config: IntermediateConfig,
) =>
  config["character.mainweapon.type"] === "knuckle" ?
    martialDisciplineLevel(config)
  : 0;

export const martialDisciplineTotalFlatASPD = (
  config: IntermediateConfig,
) =>
  config["character.mainweapon.type"] === "knuckle" ?
    martialDisciplineLevel(config)
  : 0;
