import { StatId, type Config } from "../../../types";
import {
  magicWarriorMasteryTotalFlatCSPD,
  magicWarriorMasteryTotalPercentCSPD,
} from "../../magicBladeSkills";
import {
  highCycleTotalFlatCSPD,
  highCycleTotalPercentCSPD,
} from "../../supportSkills";
import { floor, get, sum, total, flattenedStats } from "../../utils";
import { totalAGI, totalDEX } from "../basic";

export const totalBaseCSPD = (config: Config) =>
  floor(
    config["character.level"] +
      1.16 * totalAGI(config) +
      2.94 * totalDEX(config),
  );

export const totalPercentCSPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentCSPD)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentCSPDFromSkills = (config: Config) =>
  magicWarriorMasteryTotalPercentCSPD(config) +
  highCycleTotalPercentCSPD(config);

export const totalPercentCSPD = (config: Config) =>
  totalPercentCSPDFromEquipment(config) +
  totalPercentCSPDFromSkills(config);

export const totalFlatCSPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatCSPD)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatCSPDFromSkills = (config: Config) =>
  magicWarriorMasteryTotalFlatCSPD(config) +
  highCycleTotalFlatCSPD(config);

export const totalFlatCSPD = (config: Config) =>
  totalFlatCSPDFromEquipment(config) + totalFlatCSPDFromSkills(config);

export const totalCSPD = (config: Config) =>
  total(
    totalBaseCSPD(config),
    totalPercentCSPD(config),
    totalFlatCSPD(config),
  );
