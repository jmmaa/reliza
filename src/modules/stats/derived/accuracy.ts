import { Config } from "../../../types";
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

export const totalBaseAccuracy = (config: Config) =>
  floor(config["character.level"] + totalDEX(config));

export const totalPercentAccuracyFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("percentAccuracy")).reduce(sum, 0);

export const totalPercentAccuracyFromSkills = (config: Config) =>
  samuraiArcheryTotalPercentAccuracy(config) +
  twoHandedTotalPercentAccuracy(config) +
  dualSwordMasteryTotalPercentAccuracy(config) +
  dualSwordControlTotalPercentAccuracy(config);

export const totalPercentAccuracy = (config: Config) =>
  totalPercentAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalFlatAccuracyFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("flatAccuracy")).reduce(sum, 0);

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
