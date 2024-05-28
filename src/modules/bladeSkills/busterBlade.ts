import { Config } from "../../types";
import { isMainOHS, isMainTHS } from "../utils";

export const busterBladeLevel = (config: Config) =>
  config["character.skills.bladeSkills.busterBlade.level"];

export const busterBladeIsActive = (config: Config) =>
  config["character.skills.bladeSkills.busterBlade.isActive"];

export const busterBladeTotalPercentWeaponATK = (config: Config) =>
  isMainOHS(config) || isMainTHS(config) ?
    busterBladeIsActive(config) ? busterBladeLevel(config)
    : 0
  : 0;
