import { StatId } from "../../../types";
import { type IntermediateConfig } from "../../../types";
import { berserkTotalStability } from "../../bladeSkills/berserk";
import { twoHandedTotalStability } from "../../mononofuSkills";
import { samuraiArcheryTotalStability } from "../../shotSkills/samuraiArchery";
import { floor, get, sum, flattenedStats } from "../../utils";
import { totalBaseStability } from "../derived";

export const totalStabilityFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.stability)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalStabilityFromSkills = (config: IntermediateConfig) =>
  berserkTotalStability(config) +
  samuraiArcheryTotalStability(config) +
  twoHandedTotalStability(config);

export const totalStability = (config: IntermediateConfig) =>
  totalBaseStability(config) +
  totalStabilityFromEquipment(config) +
  totalStabilityFromSkills(config);

/** graze effect lacking here */
export const totalMinimumStability = (config: IntermediateConfig) =>
  totalStability(config);

/** graze effect lacking here */
export const totalMaximumStability = (config: IntermediateConfig) => 100;

export const totalMagicStability = (config: IntermediateConfig) =>
  floor((100 + totalStability(config)) / 2);

export const totalMinimumMagicStability = (config: IntermediateConfig) =>
  totalMagicStability(config);

export const totalMaximumMagicStability = (config: IntermediateConfig) =>
  totalMagicStability(config) > 90 ?
    totalMagicStability(config) - 90 + 100
  : 100;
