import { StatId } from "../../../types";
import { type IntermediateConfig } from "../../../types";
import { sum, total, flattenedStats } from "../../utils";

export const totalPercentSTRFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentSTR)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentSTR = (config: IntermediateConfig) =>
  totalPercentSTRFromEquipment(config);

export const totalFlatSTRFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatSTR)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatSTR = (config: IntermediateConfig) =>
  totalFlatSTRFromEquipment(config);

export const totalSTR = (config: IntermediateConfig) =>
  total(
    config["character.STR"],
    totalPercentSTR(config),
    totalFlatSTR(config),
  );
