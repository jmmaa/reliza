import type { IntermediateConfig } from "../../types";
import { isDualWielder } from "../utils";

export const godspeedLevel = (config: IntermediateConfig) =>
  config["character.skills.dualSwordSkills.godspeed.level"];

export const godspeedTotalFlatAGI = (config: IntermediateConfig) =>
  godspeedLevel(config) + Math.max(godspeedLevel(config) - 5, 0);

export const godspeedTotalPercentUnsheatheAttack = (
  config: IntermediateConfig,
) =>
  isDualWielder(config) ?
    godspeedLevel(config) + 15
  : godspeedLevel(config) + 5;
