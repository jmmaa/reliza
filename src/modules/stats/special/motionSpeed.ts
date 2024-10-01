import { type IntermediateConfig } from "../../../types";
import { StatId } from "../../utils";
import { get, sum, floor, flattenedStats } from "../../utils";
import { totalASPD } from "../derived";

export const totalMotionSpeed = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.motionSpeed)
    .map((stat) => stat[1])
    .reduce(sum, 0) + floor((totalASPD(config) - 1000) / 180);
