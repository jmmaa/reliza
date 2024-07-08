import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const attackUPLevel = (config: IntermediateConfig) =>
  config["character.skills.battleSkills.attackUP.level"];

export const attackUPTotalFlatATK = (config: IntermediateConfig) =>
  floor((config["character.level"] * (2.5 * attackUPLevel(config))) / 100);
