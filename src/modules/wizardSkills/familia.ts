import { Config } from "../../types";
import { floor } from "../utils";

export const familiaIsActive = (config: Config) =>
  config["character.skills.wizardSkills.familia.isActive"];

export const familiaLevel = (config: Config) =>
  config["character.skills.wizardSkills.familia.level"];

export const familiaTotalFlatMATK = (config: Config) =>
  familiaIsActive(config) ?
    floor(config["character.level"] / (10 - familiaLevel(config) * 0.6))
  : 0;

export const familiaTotalFlatMaxMP = (config: Config) =>
  familiaIsActive(config) ? 100 + familiaLevel(config) * 10 : 0;

export const familiaTotalAdditionalMagic = (config: Config) =>
  familiaIsActive(config) ? 5 * familiaLevel(config) : 0;

// not yet added to stats!
