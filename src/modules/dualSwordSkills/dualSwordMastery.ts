import { Config } from "../../types";
import { isDualWielder } from "../utils";

export const dualSwordMasteryLevel = (config: Config) =>
  config["character.skills.dualSwordSkills.dualSwordMastery.level"];

export const dualSwordMasteryTotalPercentCriticalRate = (
  config: Config,
) => (isDualWielder(config) ? -55 + dualSwordMasteryLevel(config) * 3 : 0);

export const dualSwordMasteryTotalPercentAccuracy = (config: Config) =>
  isDualWielder(config) ? -55 + dualSwordMasteryLevel(config) * 3 : 0;
