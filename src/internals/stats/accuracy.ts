import {
  dualSwordControlTotalPercentAccuracy,
  dualSwordMasteryTotalPercentAccuracy,
} from "..";

import { samuraiArcheryTotalPercentAccuracy } from "..";

import {
  bushidoTotalFlatAccuracy,
  twoHandedTotalPercentAccuracy,
} from "..";

import { accuracyUPTotalFlatAccuracy } from "..";

import { type Config } from "../data";
import { add, flattenedStats, total } from "../utils";
import { totalDEX } from "./DEX";

export const totalBaseAccuracy = (config: Config) =>
  Math.floor(config.properties.level + totalDEX(config));

export const totalPercentAccuracyFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ACCURACY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentAccuracyFromSkills = (config: Config) =>
  dualSwordMasteryTotalPercentAccuracy(config) +
  dualSwordControlTotalPercentAccuracy(config) +
  samuraiArcheryTotalPercentAccuracy(config) +
  twoHandedTotalPercentAccuracy(config);

export const totalPercentAccuracy = (config: Config) =>
  totalPercentAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalFlatAccuracyFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_ACCURACY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAccuracyFromSkills = (config: Config) =>
  bushidoTotalFlatAccuracy(config) + accuracyUPTotalFlatAccuracy(config);

export const totalFlatAccuracy = (config: Config) =>
  totalFlatAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalAccuracy = (config: Config) =>
  total(
    totalBaseAccuracy(config),
    totalPercentAccuracy(config),
    totalFlatAccuracy(config),
  );

export const calculateAccuracy = (config: Config) => ({
  totalBaseAccuracy: totalBaseAccuracy(config),
  totalPercentAccuracy: totalPercentAccuracy(config),
  totalFlatAccuracy: totalFlatAccuracy(config),
  totalAccuracy: totalAccuracy(config),

  totalAnticipate: totalAnticipate(config),
});

export const totalAnticipate = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "ANTICIPATE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateAnticipate = (config: Config) => ({
  totalAnticipate: totalAnticipate(config),
});
