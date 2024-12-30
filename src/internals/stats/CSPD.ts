import { Config } from "../data";
import { add, flattenedStats, total } from "../utils";

import { totalAGI } from "./AGI";
import { totalDEX } from "./DEX";

import {
  magicWarriorMasteryTotalFlatCSPD,
  magicWarriorMasteryTotalPercentCSPD,
} from "..";

import { highCycleTotalFlatCSPD, highCycleTotalPercentCSPD } from "..";

import {
  castMasteryTotalFlatCSPD,
  castMasteryTotalPercentCSPD,
  overlimitTotalFlatCSPD,
} from "..";

import { magicSpeedBoostTotalFlatCSPD } from "..";

export const totalBaseCSPD = (config: Config) =>
  Math.floor(
    config.properties.level +
      1.16 * totalAGI(config) +
      2.94 * totalDEX(config),
  );

export const totalPercentCSPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_CSPD")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentCSPDFromSkills = (config: Config) =>
  magicWarriorMasteryTotalPercentCSPD(config) +
  highCycleTotalPercentCSPD(config) +
  castMasteryTotalPercentCSPD(config);

export const totalPercentCSPD = (config: Config) =>
  totalPercentCSPDFromEquipment(config) +
  totalPercentCSPDFromSkills(config);

export const totalFlatCSPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_CSPD")
    .map((stat) => stat[1])
    .reduce(add, 0) + magicSpeedBoostTotalFlatCSPD(config);

export const totalFlatCSPDFromSkills = (config: Config) =>
  magicWarriorMasteryTotalFlatCSPD(config) +
  highCycleTotalFlatCSPD(config) +
  castMasteryTotalFlatCSPD(config) +
  overlimitTotalFlatCSPD(config);

export const totalFlatCSPD = (config: Config) =>
  totalFlatCSPDFromEquipment(config) + totalFlatCSPDFromSkills(config);

export const totalCSPD = (config: Config) =>
  total(
    totalBaseCSPD(config),
    totalPercentCSPD(config),
    totalFlatCSPD(config),
  );

export const calculateCSPD = (config: Config) => ({
  totalBaseCSPD: totalBaseCSPD(config),
  totalFlatCSPD: totalFlatCSPD(config),
  totalCSPD: totalCSPD(config),
});
