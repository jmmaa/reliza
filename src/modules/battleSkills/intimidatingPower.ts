import type { Config } from "../../types";
import { floor } from "../utils";

export const intimidatingPowerLevel = (config: Config) =>
  config["character.skills.battleSkills.intimidatingPower.level"];

export const intimidatingPowerTotalFlatATK = (config: Config) =>
  floor(
    (config["character.level"] * (2.5 * intimidatingPowerLevel(config))) /
      100,
  );
