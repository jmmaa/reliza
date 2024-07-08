import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const criticalSpearLevel = (config: IntermediateConfig) =>
  config["character.skills.halberdSkills.criticalSpear.level"];

export const criticalSpearTotalPercentCriticalRate = (
  config: IntermediateConfig,
) =>
  config["character.mainweapon.type"] === "halberd" ?
    floor(criticalSpearLevel(config) * 0.5)
  : 0;

export const criticalSpearTotalFlatCriticalRate = (
  config: IntermediateConfig,
) =>
  config["character.mainweapon.type"] === "halberd" ?
    floor(criticalSpearLevel(config) * 0.5 + 0.5)
  : 0;
