import { StatId, type Config } from "../../../types";
import { floor, sum, flattenedStats } from "../../utils";

export const totalAilmentResistanceFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.ailmentResistance)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalAilmentResistanceFromMTL = (config: Config) =>
  floor(config["character.MTL"] / 3.4);

export const totalAilmentResistance = (config: Config) =>
  totalAilmentResistanceFromEquipment(config) +
  totalAilmentResistanceFromMTL(config);
