import { Config } from "../../../types";
import { sum, total, flattenedStats, get } from "../../utils";

export const totalPercentDEXFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("percentDEX")).reduce(sum, 0);

export const totalPercentDEX = (config: Config) =>
  totalPercentDEXFromEquipment(config);

export const totalFlatDEXFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("flatDEX")).reduce(sum, 0);

export const totalFlatDEX = (config: Config) =>
  totalFlatDEXFromEquipment(config);

export const totalDEX = (config: Config) =>
  total(
    config["character.DEX"],
    totalPercentDEX(config),
    totalFlatDEX(config),
  );
