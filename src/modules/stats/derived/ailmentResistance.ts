import { Config } from "../../../types";
import { floor, sum, flattenedStats } from "../../utils";

export const totalAilmentResistanceFromEquipment = (config: Config) =>
  flattenedStats(config)
    .map((value) => value["ailmentResistance"])
    .reduce(sum, 0);

export const totalAilmentResistanceFromMTL = (config: Config) =>
  floor(config["character.MTL"] / 3.4);

export const totalAilmentResistance = (config: Config) =>
  totalAilmentResistanceFromEquipment(config) +
  totalAilmentResistanceFromMTL(config);
