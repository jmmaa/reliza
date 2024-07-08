import type { IntermediateConfig } from "../../types";

export const martialMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.martialSkills.martialMastery.level"];

export const martialMasteryTotalPercentATK = (
  config: IntermediateConfig,
) =>
  config["character.mainweapon.type"] === "knuckle" ?
    martialMasteryLevel(config) >= 8 ? 3
    : martialMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const martialMasteryTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  config["character.mainweapon.type"] === "knuckle" ?
    martialMasteryLevel(config) * 3
  : 0;
