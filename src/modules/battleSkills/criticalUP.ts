import type { Config } from "../../types";
import { floor } from "../utils";

export const criticalUPLevel = (config: Config) =>
  config["character.skills.battleSkills.criticalUP.level"];

export const criticalUPTotalFlatCriticalRate = (config: Config) =>
  floor(criticalUPLevel(config) / 2);

export const criticalUPTotalPercentCriticalDamage = (config: Config) =>
  floor(criticalUPLevel(config) / 2);
