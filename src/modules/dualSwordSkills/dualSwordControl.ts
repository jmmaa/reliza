import type { Config } from "../../types";
import { isDualWielder } from "../utils";

export const dualSwordControlLevel = (config: Config) =>
  config["character.skills.dualSwordSkills.dualSwordControl.level"];

export const dualSwordControlTotalPercentCriticalRate = (
  config: Config,
) => (isDualWielder(config) ? 5 + dualSwordControlLevel(config) * 3 : 0);

export const dualSwordControlTotalPercentAccuracy = (config: Config) =>
  isDualWielder(config) ? 5 + dualSwordControlLevel(config) * 3 : 0;

export const dualSwordControlTotalFlatASPD = (config: Config) =>
  isDualWielder(config) ? 50 * dualSwordControlLevel(config) : 0;
