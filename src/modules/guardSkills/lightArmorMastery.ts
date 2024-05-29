import type { Config } from "../../types";

export const lightArmorMasteryLevel = (config: Config) =>
  config["character.skills.guardSkills.lightArmorMastery.level"];

export const lightArmorMasteryTotalEvasionRecharge = (config: Config) =>
  config["character.armor.type"] === "light" ?
    lightArmorMasteryLevel(config)
  : 0;
