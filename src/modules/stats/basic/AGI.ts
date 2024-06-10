import { StatId, type Config } from "../../../types";
import { godspeedTotalFlatAGI } from "../../dualSwordSkills";
import { sum, total, flattenedStats } from "../../utils";

export const totalPercentAGIFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentAGI)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentAGI = (config: Config) =>
  totalPercentAGIFromEquipment(config);

export const totalFlatAGIFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatAGI)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatAGI = (config: Config) =>
  totalFlatAGIFromEquipment(config) + godspeedTotalFlatAGI(config);

export const totalAGI = (config: Config) =>
  total(
    config["character.AGI"],
    totalPercentAGI(config),
    totalFlatAGI(config),
  );
