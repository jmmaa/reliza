import { type Config } from "../data";
import { add, flattenedStats } from "../utils";

import { totalASPD } from "./ASPD";

export const totalMotionSpeed = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "MOTION_SPEED")
    .map((stat) => stat[1])
    .reduce(add, 0) +
  Math.floor(
    totalASPD(config) > 1000 ? (totalASPD(config) - 1000) / 180 : 0,
  );

export const calculateMotionSpeed = (config: Config) => ({
  totalMotionSpeed: totalMotionSpeed(config),
});
