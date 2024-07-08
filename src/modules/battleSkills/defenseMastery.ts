import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const defenseMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.battleSkills.defenseMastery.level"];

export const defenseMasteryTotalFlatDEF = (config: IntermediateConfig) =>
  floor(
    config["character.level"] *
      ((2.5 * defenseMasteryLevel(config)) / 100),
  );

export const defenseMasteryTotalFlatMDEF = (config: IntermediateConfig) =>
  floor(
    config["character.level"] *
      ((2.5 * defenseMasteryLevel(config)) / 100),
  );
