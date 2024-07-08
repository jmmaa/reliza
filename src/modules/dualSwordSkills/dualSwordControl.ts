import type { IntermediateConfig } from "../../types";
import { isDualWielder } from "../utils";

export const dualSwordControlLevel = (config: IntermediateConfig) =>
  config["character.skills.dualSwordSkills.dualSwordControl.level"];

export const dualSwordControlTotalPercentCriticalRate = (
  config: IntermediateConfig,
) => (isDualWielder(config) ? 5 + dualSwordControlLevel(config) * 3 : 0);

export const dualSwordControlTotalPercentAccuracy = (
  config: IntermediateConfig,
) => (isDualWielder(config) ? 5 + dualSwordControlLevel(config) * 3 : 0);

export const dualSwordControlTotalFlatASPD = (
  config: IntermediateConfig,
) => (isDualWielder(config) ? 50 * dualSwordControlLevel(config) : 0);
