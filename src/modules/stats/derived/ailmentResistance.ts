import { StatId } from "../../../types";
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
) =>
  config["character.personalStat"] === "MTL" ?
    floor(config["character.personalStatValue"] / 3.4)
  : 0;

export const totalAilmentResistance = (config: IntermediateConfig) =>
  totalAilmentResistanceFromEquipment(config) +
  totalAilmentResistanceFromMTL(config);
