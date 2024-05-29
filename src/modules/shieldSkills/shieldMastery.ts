import type { Config } from "../../types";

export const shieldMasteryLevel = (config: Config) =>
  config["character.skills.shieldSkills.shieldMastery.level"];

export const shieldMasteryPercentASPDPenaltyReduction = (
  config: Config,
) =>
  config["character.subweapon.type"] === "shield" ?
    shieldMasteryLevel(config) * 5
  : 0;
