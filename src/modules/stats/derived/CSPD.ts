import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
import {
  magicWarriorMasteryTotalFlatCSPD,
  magicWarriorMasteryTotalPercentCSPD,
} from "../../magicBladeSkills";
import { magicSpeedBoostTotalFlatCSPD } from "../../regislets";
import {
  highCycleTotalFlatCSPD,
  highCycleTotalPercentCSPD,
} from "../../supportSkills";
import { floor, get, sum, total, flattenedStats } from "../../utils";
import {
  castMasteryTotalFlatCSPD,
  castMasteryTotalPercentCSPD,
  overlimitTotalFlatCSPD,
} from "../../wizardSkills";
import { totalAGI, totalDEX } from "../basic";

export const totalBaseCSPD = (config: IntermediateConfig) =>
  floor(
    config["character.level"] +
      1.16 * totalAGI(config) +
      2.94 * totalDEX(config),
  );

export const totalPercentCSPDFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentCSPD)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentCSPDFromSkills = (config: IntermediateConfig) =>
  magicWarriorMasteryTotalPercentCSPD(config) +
  highCycleTotalPercentCSPD(config) +
  castMasteryTotalPercentCSPD(config);

export const totalPercentCSPD = (config: IntermediateConfig) =>
  totalPercentCSPDFromEquipment(config) +
  totalPercentCSPDFromSkills(config);

export const totalFlatCSPDFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatCSPD)
    .map((stat) => stat[1])
    .reduce(sum, 0) + magicSpeedBoostTotalFlatCSPD(config);

export const totalFlatCSPDFromSkills = (config: IntermediateConfig) =>
  magicWarriorMasteryTotalFlatCSPD(config) +
  highCycleTotalFlatCSPD(config) +
  castMasteryTotalFlatCSPD(config) +
  overlimitTotalFlatCSPD(config);

export const totalFlatCSPD = (config: IntermediateConfig) =>
  totalFlatCSPDFromEquipment(config) + totalFlatCSPDFromSkills(config);

export const totalCSPD = (config: IntermediateConfig) =>
  total(
    totalBaseCSPD(config),
    totalPercentCSPD(config),
    totalFlatCSPD(config),
  );
