import { StatId, type Config } from "../../../types";
import { sum, total, flattenedStats } from "../../utils";

export const totalPercentSTRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentSTR)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentSTR = (config: Config) =>
  totalPercentSTRFromEquipment(config);

export const totalFlatSTRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatSTR)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatSTR = (config: Config) =>
  totalFlatSTRFromEquipment(config);

export const totalSTR = (config: Config) =>
  total(
    config["character.STR"],
    totalPercentSTR(config),
    totalFlatSTR(config),
  );
