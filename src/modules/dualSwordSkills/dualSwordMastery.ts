import type { IntermediateConfig } from "../../types";
import { isDualWielder } from "../utils";

export const dualSwordMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.dualSwordSkills.dualSwordMastery.level"];

export const dualSwordMasteryTotalPercentCriticalRate = (
  config: IntermediateConfig,
) => (isDualWielder(config) ? -55 + dualSwordMasteryLevel(config) * 3 : 0);

export const dualSwordMasteryTotalPercentAccuracy = (
  config: IntermediateConfig,
) => (isDualWielder(config) ? -55 + dualSwordMasteryLevel(config) * 3 : 0);
