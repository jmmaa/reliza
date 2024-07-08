import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const quickAuraLevel = (config: IntermediateConfig) =>
  config["character.skills.halberdSkills.quickAura.level"];

export const quickAuraIsActive = (config: IntermediateConfig) =>
  config["character.skills.halberdSkills.quickAura.isActive"];

export const quickAuraTotalFlatASPD = (config: IntermediateConfig) =>
  quickAuraIsActive(config) ? quickAuraLevel(config) * 50 : 0;

export const quickAuraTotalPercentASPD = (config: IntermediateConfig) =>
  quickAuraIsActive(config) ? floor(quickAuraLevel(config) * 2.5) : 0;
