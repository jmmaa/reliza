import type { Config } from "../../../types";
import { get, sum, flattenedStats } from "../../utils";

export const totalMagicPierce = (config: Config) =>
  flattenedStats(config).map(get("magicPierce")).reduce(sum, 0);

export const totalPhysicalPierce = (config: Config) =>
  flattenedStats(config).map(get("physicalPierce")).reduce(sum, 0);
