import { Config } from "../../types";
import { floor } from "../utils";

export const etherFlareLevel = (config: Config) =>
  config["character.skills.magicBladeSkills.etherFlare.level"];

export const etherFlareInflictedIgniteOnEnemy = (config: Config) =>
  config[
    "character.skills.magicBladeSkills.etherFlare.inflictedIgniteOnEnemey"
  ];

export const etherFlareTotalFlatAMPR = (config: Config) =>
  (
    config["character.subweapon.type"] === "magic-device" &&
    etherFlareInflictedIgniteOnEnemy(config)
  ) ?
    15 +
    floor(etherFlareLevel(config) / 6) * 5 +
    floor(etherFlareLevel(config) / 5) * 5
  : 0;
