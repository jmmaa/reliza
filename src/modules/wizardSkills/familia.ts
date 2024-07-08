import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const familiaIsActive = (config: IntermediateConfig) =>
  config["character.skills.wizardSkills.familia.isActive"];

export const familiaLevel = (config: IntermediateConfig) =>
  config["character.skills.wizardSkills.familia.level"];

export const familiaTotalFlatMATK = (config: IntermediateConfig) =>
  familiaIsActive(config) ?
    floor(config["character.level"] / (10 - familiaLevel(config) * 0.6))
  : 0;

export const familiaTotalFlatMaxMP = (config: IntermediateConfig) =>
  familiaIsActive(config) ? 100 + familiaLevel(config) * 10 : 0;

export const familiaTotalAdditionalMagic = (config: IntermediateConfig) =>
  familiaIsActive(config) ? 5 * familiaLevel(config) : 0;

// not yet added to stats!
