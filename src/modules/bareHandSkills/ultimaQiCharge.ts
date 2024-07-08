import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const ultimaQiChargeLevel = (config: IntermediateConfig) =>
  config["character.skills.bareHandSkills.ultimaQiCharge.level"];

export const ultimaQiChargeTotalFlatAMPR = (config: IntermediateConfig) =>
  (
    config["character.mainweapon.type"] === "bare-hand" &&
    config["character.subweapon.type"] === "none"
  ) ?
    floor(ultimaQiChargeLevel(config) * 0.5)
  : 0;

export const ultimaQiChargeTotalCostQiReductionForNonBareHandSkills = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "bare-hand" &&
    config["character.subweapon.type"] === "none"
  ) ?
    20 - ultimaQiChargeLevel(config)
  : 0;
