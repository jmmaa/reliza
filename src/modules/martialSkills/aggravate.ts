import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const aggravateLevel = (config: IntermediateConfig) =>
  config["character.skills.martialSkills.aggravate.level"];

export const aggravateTotalFlatAMPR = (config: IntermediateConfig) =>
  config["character.mainweapon.type"] === "knuckle" ?
    floor(aggravateLevel(config) * 0.5)
  : 0;

export const aggravateTotalPercentAccuracy = (
  config: IntermediateConfig,
) =>
  config["character.mainweapon.type"] === "knuckle" ?
    aggravateLevel(config) * 2
  : 0;
