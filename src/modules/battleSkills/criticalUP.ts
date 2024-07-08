import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const criticalUPLevel = (config: IntermediateConfig) =>
  config["character.skills.battleSkills.criticalUP.level"];

export const criticalUPTotalFlatCriticalRate = (
  config: IntermediateConfig,
) => floor(criticalUPLevel(config) / 2);

export const criticalUPTotalPercentCriticalDamage = (
  config: IntermediateConfig,
) => floor(criticalUPLevel(config) / 2);
