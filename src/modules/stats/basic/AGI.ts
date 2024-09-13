import { StatId } from "../../../types";
import { type IntermediateConfig } from "../../../types";
import { godspeedTotalFlatAGI } from "../../dualSwordSkills";
import { sum, total, flattenedStats } from "../../utils";

export const totalPercentAGIFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentAGI)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentAGI = (config: IntermediateConfig) =>
  totalPercentAGIFromEquipment(config);

export const totalFlatAGIFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatAGI)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatAGI = (config: IntermediateConfig) =>
  totalFlatAGIFromEquipment(config) + godspeedTotalFlatAGI(config);

export const totalAGI = (config: IntermediateConfig) =>
  total(
    config["character.AGI"],
    totalPercentAGI(config),
    totalFlatAGI(config),
  );
