import { type IntermediateConfig } from "../../../types";
import { StatId } from "../../utils";
import { sum, total, flattenedStats } from "../../utils";

export const totalPercentDEXFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentDEX)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentDEX = (config: IntermediateConfig) =>
  totalPercentDEXFromEquipment(config);

export const totalFlatDEXFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatDEX)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatDEX = (config: IntermediateConfig) =>
  totalFlatDEXFromEquipment(config);

export const totalDEX = (config: IntermediateConfig) =>
  total(
    config["character.DEX"],
    totalPercentDEX(config),
    totalFlatDEX(config),
  );
