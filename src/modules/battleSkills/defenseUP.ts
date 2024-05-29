import type { Config } from "../../types";
import { floor } from "../utils";

export const defenseUPLevel = (config: Config) =>
  config["character.skills.battleSkills.defenseUP.level"];

export const defenseUPTotalFlatDEF = (config: Config) =>
  floor(
    config["character.level"] * ((2.5 * defenseUPLevel(config)) / 100),
  );

export const defenseUPTotalFlatMDEF = (config: Config) =>
  floor(
    config["character.level"] * ((2.5 * defenseUPLevel(config)) / 100),
  );
