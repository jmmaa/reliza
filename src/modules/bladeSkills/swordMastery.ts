import { Character, Config } from "../../types";
import { isMainOHS, isMainTHS } from "../utils";

export const swordMasteryLevel = (config: Config) =>
  config["character.skills.bladeSkills.swordMastery.level"];

export const swordMasteryTotalPercentATK = (config: Config) =>
  isMainOHS(config) || isMainTHS(config) ?
    swordMasteryLevel(config) >= 8 ? 3
    : swordMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const swordMasteryTotalPercentWeaponATK = (config: Config) =>
  isMainOHS(config) || isMainTHS(config) ?
    swordMasteryLevel(config) * 3
  : 0;
