import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
import { sum, total, flattenedStats } from "../../utils";

export const totalPercentINTFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentINT)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentINT = (config: IntermediateConfig) =>
  totalPercentINTFromEquipment(config);

export const totalFlatINTFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatINT)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatINT = (config: IntermediateConfig) =>
  totalFlatINTFromEquipment(config);

export const totalINT = (config: IntermediateConfig) =>
  total(
    config["character.INT"],
    totalPercentINT(config),
    totalFlatINT(config),
  );
