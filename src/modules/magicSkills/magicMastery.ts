import type { IntermediateConfig } from "../../types";

export const magicMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.magicSkills.magicMastery.level"];

export const magicMasteryTotalPercentMATK = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "staff" ||
    config["character.mainweapon.type"] === "magic-device"
  ) ?
    magicMasteryLevel(config) >= 8 ? 3
    : magicMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const magicMasteryTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "staff" ||
    config["character.mainweapon.type"] === "magic-device"
  ) ?
    magicMasteryLevel(config) * 3
  : 0;
