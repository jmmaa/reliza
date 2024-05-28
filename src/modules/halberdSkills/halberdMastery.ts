import { Config } from "../../types";

export const halberdMasteryLevel = (config: Config) =>
  config["character.skills.halberdSkills.halberdMastery.level"];

export const halberdMasteryTotalPercentATK = (config: Config) =>
  config["character.mainweapon.type"] === "halberd" ?
    halberdMasteryLevel(config) >= 8 ? 3
    : halberdMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const halberdMasteryTotalPercentWeaponATK = (config: Config) =>
  config["character.mainweapon.type"] ?
    halberdMasteryLevel(config) * 3
  : 0;
