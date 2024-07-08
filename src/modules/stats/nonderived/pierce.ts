import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
import { get, sum, flattenedStats } from "../../utils";

export const totalMagicPierce = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.magicPierce)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPhysicalPierce = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.physicalPierce)
    .map((stat) => stat[1])
    .reduce(sum, 0);
