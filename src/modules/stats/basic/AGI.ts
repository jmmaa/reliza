import { Config } from "../../../types";
import { godspeedTotalFlatAGI } from "../../dualSwordSkills";
import { sum, total, flattenedStats, get } from "../../utils";

export const totalPercentAGIFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("percentAGI")).reduce(sum, 0);

export const totalPercentAGI = (config: Config) =>
  totalPercentAGIFromEquipment(config);

export const totalFlatAGIFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("flatAGI")).reduce(sum, 0);

export const totalFlatAGI = (config: Config) =>
  totalFlatAGIFromEquipment(config) + godspeedTotalFlatAGI(config);

export const totalAGI = (config: Config) =>
  total(
    config["character.AGI"],
    totalPercentAGI(config),
    totalFlatAGI(config),
  );
