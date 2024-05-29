import type { Config } from "../../../types";
import { sum, total, flattenedStats, get } from "../../utils";

export const totalPercentSTRFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("percentSTR")).reduce(sum, 0);

export const totalPercentSTR = (config: Config) =>
  totalPercentSTRFromEquipment(config);

export const totalFlatSTRFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("flatSTR")).reduce(sum, 0);

export const totalFlatSTR = (config: Config) =>
  totalFlatSTRFromEquipment(config);

export const totalSTR = (config: Config) =>
  total(
    config["character.STR"],
    totalPercentSTR(config),
    totalFlatSTR(config),
  );
