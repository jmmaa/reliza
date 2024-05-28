import { Config } from "../../../types";
import { sum, total, flattenedStats, get } from "../../utils";

export const totalPercentINTFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("percentINT")).reduce(sum, 0);

export const totalPercentINT = (config: Config) =>
  totalPercentINTFromEquipment(config);

export const totalFlatINTFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("flatINT")).reduce(sum, 0);

export const totalFlatINT = (config: Config) =>
  totalFlatINTFromEquipment(config);

export const totalINT = (config: Config) =>
  total(
    config["character.INT"],
    totalPercentINT(config),
    totalFlatINT(config),
  );
