import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const magicUPLevel = (config: IntermediateConfig) =>
  config["character.skills.battleSkills.magicUP.level"];

export const magicUPTotalFlatMATK = (config: IntermediateConfig) =>
  floor((config["character.level"] * (2.5 * magicUPLevel(config))) / 100);
