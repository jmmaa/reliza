import { Config } from "../../types";
import { floor } from "../utils";

export const defenseMasteryLevel = (config: Config) =>
  config["character.skills.battleSkills.defenseMastery.level"];

export const defenseMasteryTotalFlatDEF = (config: Config) =>
  floor(
    config["character.level"] *
      ((2.5 * defenseMasteryLevel(config)) / 100),
  );

export const defenseMasteryTotalFlatMDEF = (config: Config) =>
  floor(
    config["character.level"] *
      ((2.5 * defenseMasteryLevel(config)) / 100),
  );
