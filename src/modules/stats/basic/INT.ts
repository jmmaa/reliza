import { StatId, type Config } from "../../../types";
import { sum, total, flattenedStats } from "../../utils";

export const totalPercentINTFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentINT)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentINT = (config: Config) =>
  totalPercentINTFromEquipment(config);

export const totalFlatINTFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatINT)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatINT = (config: Config) =>
  totalFlatINTFromEquipment(config);

export const totalINT = (config: Config) =>
  total(
    config["character.INT"],
    totalPercentINT(config),
    totalFlatINT(config),
  );
