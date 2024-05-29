import type { Config } from "../../../types";
import { sum, total, flattenedStats, get } from "../../utils";

export const totalPercentVITFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("percentVIT")).reduce(sum, 0);

export const totalPercentVIT = (config: Config) =>
  totalPercentVITFromEquipment(config);

export const totalFlatVITFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("flatVIT")).reduce(sum, 0);

export const totalFlatVIT = (config: Config) =>
  totalFlatVITFromEquipment(config);

export const totalVIT = (config: Config) =>
  total(
    config["character.VIT"],
    totalPercentVIT(config),
    totalFlatVIT(config),
  );
