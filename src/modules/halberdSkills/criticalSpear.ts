import { Config } from "../../types";
import { floor } from "../utils";

export const criticalSpearLevel = (config: Config) =>
  config["character.skills.halberdSkills.criticalSpear.level"];

export const criticalSpearTotalPercentCriticalRate = (config: Config) =>
  config["character.mainweapon.type"] === "halberd" ?
    floor(criticalSpearLevel(config) * 0.5)
  : 0;

export const criticalSpearTotalFlatCriticalRate = (config: Config) =>
  config["character.mainweapon.type"] === "halberd" ?
    floor(criticalSpearLevel(config) * 0.5 + 0.5)
  : 0;
