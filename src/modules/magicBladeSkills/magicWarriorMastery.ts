import type { Config } from "../../types";

export const magicWarriorMasteryLevel = (config: Config) =>
  config["character.skills.magicBladeSkills.magicWarriorMastery.level"];

export const magicWarriorMasteryTotalPercentATKPenaltyReduction = (
  config: Config,
) =>
  config["character.subweapon.type"] === "magic-device" ?
    magicWarriorMasteryLevel(config) +
    (config["character.mainweapon.type"] === "one-handed-sword" ? 5 : 0)
  : 0;

export const magicWarriorMasteryTotalFlatMATK = (config: Config) =>
  config["character.subweapon.type"] === "magic-device" ?
    magicWarriorMasteryLevel(config) * 2 +
    (magicWarriorMasteryLevel(config) - 5 > 0 ?
      magicWarriorMasteryLevel(config) - 5
    : 0)
  : 0;

export const magicWarriorMasteryTotalFlatCSPD = (config: Config) =>
  config["character.subweapon.type"] === "magic-device" ?
    magicWarriorMasteryLevel(config) * 10
  : 0;

export const magicWarriorMasteryTotalPercentCSPD = (config: Config) =>
  config["character.subweapon.type"] === "magic-device" ?
    magicWarriorMasteryLevel(config) * 1 +
    Math.max(magicWarriorMasteryLevel(config) - 5, 0)
  : 0;
