import { StatId } from "../../../types";
import { type IntermediateConfig } from "../../../types";
import { sum, total, flattenedStats } from "../../utils";

export const totalPercentVITFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentVIT)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentVIT = (config: IntermediateConfig) =>
  totalPercentVITFromEquipment(config);

export const totalFlatVITFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatVIT)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatVIT = (config: IntermediateConfig) =>
  totalFlatVITFromEquipment(config);

export const totalVIT = (config: IntermediateConfig) =>
  total(
    config["character.VIT"],
    totalPercentVIT(config),
    totalFlatVIT(config),
  );
