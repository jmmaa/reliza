import type { IntermediateConfig } from "../../types";

export const prayerLevel = (config: IntermediateConfig) =>
  config["character.skills.priestSkills.prayer.level"];

export const prayerIsActive = (config: IntermediateConfig) =>
  config["character.skills.priestSkills.prayer.isActive"];

export const prayerTotalPercentMATK = (config: IntermediateConfig) =>
  prayerIsActive(config) ?
    config["character.mainweapon.type"] === "magic-device" ?
      prayerLevel(config) + 5
    : prayerLevel(config)
  : 0;
