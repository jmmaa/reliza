import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
import { floor, sum, flattenedStats } from "../../utils";

export const totalAilmentResistanceFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.ailmentResistance)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalAilmentResistanceFromMTL = (
  config: IntermediateConfig,
) => floor(config["character.MTL"] / 3.4);

export const totalAilmentResistance = (config: IntermediateConfig) =>
  totalAilmentResistanceFromEquipment(config) +
  totalAilmentResistanceFromMTL(config);
