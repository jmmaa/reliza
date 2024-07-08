import type { IntermediateConfig } from "../../types";

export const halberdMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.halberdSkills.halberdMastery.level"];

export const halberdMasteryTotalPercentATK = (
  config: IntermediateConfig,
) =>
  config["character.mainweapon.type"] === "halberd" ?
    halberdMasteryLevel(config) >= 8 ? 3
    : halberdMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const halberdMasteryTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  config["character.mainweapon.type"] ?
    halberdMasteryLevel(config) * 3
  : 0;
