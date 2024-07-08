import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const intimidatingPowerLevel = (config: IntermediateConfig) =>
  config["character.skills.battleSkills.intimidatingPower.level"];

export const intimidatingPowerTotalFlatATK = (
  config: IntermediateConfig,
) =>
  floor(
    (config["character.level"] * (2.5 * intimidatingPowerLevel(config))) /
      100,
  );
