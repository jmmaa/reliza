import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const hiddenTalentLevel = (config: IntermediateConfig) =>
  config["character.skills.bareHandSkills.hiddenTalent.level"];

export const hiddenTalentTotalBaseGuardPower = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "bare-hand" &&
    config["character.subweapon.type"] === "none"
  ) ?
    hiddenTalentLevel(config) * 500
  : 0;

export const hiddenTalentTotalBaseGuardRecharge = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "bare-hand" &&
    config["character.subweapon.type"] === "none"
  ) ?
    5 + 2 * hiddenTalentLevel(config)
  : 0;

export const hiddenTalentTotalEvasionCount = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "bare-hand" &&
    config["character.subweapon.type"] === "none"
  ) ?
    floor(2 + hiddenTalentLevel(config) * 0.4)
  : 0;

export const hiddenTalentTotalBaseEvasionRecharge = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "bare-hand" &&
    config["character.subweapon.type"] === "none"
  ) ?
    hiddenTalentLevel(config) < 10 ?
      0.1 * hiddenTalentLevel(config)
    : 10
  : 0;

export const hiddenTalentTotalCostQiReductionForNonBareHandSkills = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "bare-hand" &&
    config["character.subweapon.type"] === "none"
  ) ?
    floor(0.5 * hiddenTalentLevel(config))
  : 0;
