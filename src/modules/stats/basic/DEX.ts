import { StatId, type Config } from "../../../types";
import { sum, total, flattenedStats } from "../../utils";

export const totalPercentDEXFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentDEX)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentDEX = (config: Config) =>
  totalPercentDEXFromEquipment(config);

export const totalFlatDEXFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatDEX)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatDEX = (config: Config) =>
  totalFlatDEXFromEquipment(config);

export const totalDEX = (config: Config) =>
  total(
    config["character.DEX"],
    totalPercentDEX(config),
    totalFlatDEX(config),
  );
