import type { Config } from "../../types";

export const magicMasteryLevel = (config: Config) =>
  config["character.skills.magicSkills.magicMastery.level"];

export const magicMasteryTotalPercentMATK = (config: Config) =>
  (
    config["character.mainweapon.type"] === "staff" ||
    config["character.mainweapon.type"] === "magic-device"
  ) ?
    magicMasteryLevel(config) >= 8 ? 3
    : magicMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const magicMasteryTotalPercentWeaponATK = (config: Config) =>
  (
    config["character.mainweapon.type"] === "staff" ||
    config["character.mainweapon.type"] === "magic-device"
  ) ?
    magicMasteryLevel(config) * 3
  : 0;
