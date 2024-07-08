import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
import { accuracyUPTotalFlatAccuracy } from "../../battleSkills";
import {
  dualSwordControlTotalPercentAccuracy,
  dualSwordMasteryTotalPercentAccuracy,
} from "../../dualSwordSkills";
import {
  bushidoTotalFlatAccuracy,
  twoHandedTotalPercentAccuracy,
} from "../../mononofuSkills";
import { samuraiArcheryTotalPercentAccuracy } from "../../shotSkills";
import { sum, floor, flattenedStats, total, get } from "../../utils";
import { totalDEX } from "../basic";

export const totalBaseAccuracy = (config: IntermediateConfig) =>
  floor(config["character.level"] + totalDEX(config));

// refactor

export const totalPercentAccuracyFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentAccuracy)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentAccuracyFromSkills = (
  config: IntermediateConfig,
) =>
  samuraiArcheryTotalPercentAccuracy(config) +
  twoHandedTotalPercentAccuracy(config) +
  dualSwordMasteryTotalPercentAccuracy(config) +
  dualSwordControlTotalPercentAccuracy(config);

export const totalPercentAccuracy = (config: IntermediateConfig) =>
  totalPercentAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalFlatAccuracyFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatAccuracy)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatAccuracyFromSkills = (config: IntermediateConfig) =>
  bushidoTotalFlatAccuracy(config) + accuracyUPTotalFlatAccuracy(config);

export const totalFlatAccuracy = (config: IntermediateConfig) =>
  totalFlatAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalAccuracy = (config: IntermediateConfig) =>
  total(
    totalBaseAccuracy(config),
    totalPercentAccuracy(config),
    totalFlatAccuracy(config),
  );
