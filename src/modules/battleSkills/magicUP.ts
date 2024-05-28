import { Config } from "../../types";
import { floor } from "../utils";

export const magicUPLevel = (config: Config) =>
  config["character.skills.battleSkills.magicUP.level"];

export const magicUPTotalFlatMATK = (config: Config) =>
  floor((config["character.level"] * (2.5 * magicUPLevel(config))) / 100);
