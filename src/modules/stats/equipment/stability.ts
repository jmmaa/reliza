import { Config } from "../../../types";
import { berserkTotalStability } from "../../bladeSkills/berserk";
import { twoHandedTotalStability } from "../../mononofuSkills";
import { samuraiArcheryTotalStability } from "../../shotSkills/samuraiArchery";
import { floor, get, sum, flattenedStats } from "../../utils";
import { totalBaseStability } from "../derived";

export const totalStabilityFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("stability")).reduce(sum, 0);

export const totalStabilityFromSkills = (config: Config) =>
  berserkTotalStability(config) +
  samuraiArcheryTotalStability(config) +
  twoHandedTotalStability(config);

export const totalStability = (config: Config) =>
  totalBaseStability(config) +
  totalStabilityFromEquipment(config) +
  totalStabilityFromSkills(config);

/** graze effect lacking here */
export const totalMinimumStability = (config: Config) =>
  totalStability(config);

/** graze effect lacking here */
export const totalMaximumStability = (config: Config) => 100;

export const totalMagicStability = (config: Config) =>
  floor((100 + totalStability(config)) / 2);

export const totalMinimumMagicStability = (config: Config) =>
  totalMagicStability(config);

export const totalMaximumMagicStability = (config: Config) =>
  totalMagicStability(config) > 90 ?
    totalMagicStability(config) - 90 + 100
  : 100;
