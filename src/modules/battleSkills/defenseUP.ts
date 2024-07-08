import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const defenseUPLevel = (config: IntermediateConfig) =>
  config["character.skills.battleSkills.defenseUP.level"];

export const defenseUPTotalFlatDEF = (config: IntermediateConfig) =>
  floor(
    config["character.level"] * ((2.5 * defenseUPLevel(config)) / 100),
  );

export const defenseUPTotalFlatMDEF = (config: IntermediateConfig) =>
  floor(
    config["character.level"] * ((2.5 * defenseUPLevel(config)) / 100),
  );
