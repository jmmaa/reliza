import type { Config } from "../../types";

export const shotMasteryLevel = (config: Config) =>
  config["character.skills.shotSkills.shotMastery.level"];

export const shotMasteryTotalPercentATK = (config: Config) =>
  (
    config["character.mainweapon.type"] === "bowgun" ||
    config["character.mainweapon.type"] === "bow"
  ) ?
    shotMasteryLevel(config) >= 8 ? 3
    : shotMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const shotMasteryTotalPercentWeaponATK = (config: Config) =>
  (
    config["character.mainweapon.type"] === "bowgun" ||
    config["character.mainweapon.type"] === "bow"
  ) ?
    shotMasteryLevel(config) * 3
  : 0;
