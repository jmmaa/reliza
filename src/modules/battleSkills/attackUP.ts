import { Config } from "../../types";
import { floor } from "../utils";

export const attackUPLevel = (config: Config) =>
  config["character.skills.battleSkills.attackUP.level"];

export const attackUPTotalFlatATK = (config: Config) =>
  floor((config["character.level"] * (2.5 * attackUPLevel(config))) / 100);
