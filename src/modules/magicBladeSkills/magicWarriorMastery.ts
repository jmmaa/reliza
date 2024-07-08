import type { IntermediateConfig } from "../../types";

export const magicWarriorMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.magicBladeSkills.magicWarriorMastery.level"];

export const magicWarriorMasteryTotalPercentATKPenaltyReduction = (
  config: IntermediateConfig,
) =>
  config["character.subweapon.type"] === "magic-device" ?
    magicWarriorMasteryLevel(config) +
    (config["character.mainweapon.type"] === "one-handed-sword" ? 5 : 0)
  : 0;

export const magicWarriorMasteryTotalFlatMATK = (
  config: IntermediateConfig,
) =>
  config["character.subweapon.type"] === "magic-device" ?
    magicWarriorMasteryLevel(config) * 2 +
    (magicWarriorMasteryLevel(config) - 5 > 0 ?
      magicWarriorMasteryLevel(config) - 5
    : 0)
  : 0;

export const magicWarriorMasteryTotalFlatCSPD = (
  config: IntermediateConfig,
) =>
  config["character.subweapon.type"] === "magic-device" ?
    magicWarriorMasteryLevel(config) * 10
  : 0;

export const magicWarriorMasteryTotalPercentCSPD = (
  config: IntermediateConfig,
) =>
  config["character.subweapon.type"] === "magic-device" ?
    magicWarriorMasteryLevel(config) * 1 +
    Math.max(magicWarriorMasteryLevel(config) - 5, 0)
  : 0;
