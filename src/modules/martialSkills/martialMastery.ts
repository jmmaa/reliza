import { Config } from "../../types";

export const martialMasteryLevel = (config: Config) =>
  config["character.skills.martialSkills.martialMastery.level"];

export const martialMasteryTotalPercentATK = (config: Config) =>
  config["character.mainweapon.type"] === "knuckle" ?
    martialMasteryLevel(config) >= 8 ? 3
    : martialMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const martialMasteryTotalPercentWeaponATK = (config: Config) =>
  config["character.mainweapon.type"] === "knuckle" ?
    martialMasteryLevel(config) * 3
  : 0;
