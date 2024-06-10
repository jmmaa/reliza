import { StatId, type Config } from "../../../types";
import { sum, total, flattenedStats } from "../../utils";

export const totalPercentVITFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentVIT)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentVIT = (config: Config) =>
  totalPercentVITFromEquipment(config);

export const totalFlatVITFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatVIT)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatVIT = (config: Config) =>
  totalFlatVITFromEquipment(config);

export const totalVIT = (config: Config) =>
  total(
    config["character.VIT"],
    totalPercentVIT(config),
    totalFlatVIT(config),
  );
