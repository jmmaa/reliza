import { Config } from "../../../types";
import { get, sum, floor, flattenedStats } from "../../utils";
import { totalASPD } from "../derived";

export const totalMotionSpeed = (config: Config) =>
  flattenedStats(config).map(get("motionSpeed")).reduce(sum, 0) +
  floor((totalASPD(config) - 1000) / 180);
