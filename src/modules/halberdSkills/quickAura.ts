import type { Config } from "../../types";
import { floor } from "../utils";

export const quickAuraLevel = (config: Config) =>
  config["character.skills.halberdSkills.quickAura.level"];

export const quickAuraIsActive = (config: Config) =>
  config["character.skills.halberdSkills.quickAura.isActive"];

export const quickAuraTotalFlatASPD = (config: Config) =>
  quickAuraIsActive(config) ? quickAuraLevel(config) * 50 : 0;

export const quickAuraTotalPercentASPD = (config: Config) =>
  quickAuraIsActive(config) ? floor(quickAuraLevel(config) * 2.5) : 0;
