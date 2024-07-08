import type { IntermediateConfig } from "../../types";
import { isMainOHS, isMainTHS } from "../utils";

export const busterBladeLevel = (config: IntermediateConfig) =>
  config["character.skills.bladeSkills.busterBlade.level"];

export const busterBladeIsActive = (config: IntermediateConfig) =>
  config["character.skills.bladeSkills.busterBlade.isActive"];

export const busterBladeTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  isMainOHS(config) || isMainTHS(config) ?
    busterBladeIsActive(config) ? busterBladeLevel(config)
    : 0
  : 0;
