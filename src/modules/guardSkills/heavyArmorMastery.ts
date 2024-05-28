import { Config } from "../../types";

export const heavyArmorMasteryLevel = (config: Config) =>
  config["character.skills.guardSkills.heavyArmorMastery.level"];

export const heavyArmorMasteryTotalGuardRecharge = (config: Config) =>
  config["character.armor.type"] === "heavy" ?
    heavyArmorMasteryLevel(config)
  : 0;
