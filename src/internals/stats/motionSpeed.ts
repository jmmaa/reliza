import { type Config } from "../data";
import { add, flattenedStats, halberdSkills } from "../utils";

import { totalASPD } from "./ASPD";

export const godspeedWieldMotionSpeedBuff = (config: Config) =>
  halberdSkills(config).godspeedWield.buffIsActive ?
    halberdSkills(config).godspeedWield.stacks *
    halberdSkills(config).godspeedWield.level
  : 0;

export const totalMotionSpeedFromASPD = (config: Config) =>
  Math.floor(
    totalASPD(config) > 1000 ? (totalASPD(config) - 1000) / 180 : 0,
  );

export const totalMotionSpeedFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "MOTION_SPEED")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalMotionSpeedFromSkills = (config: Config) =>
  godspeedWieldMotionSpeedBuff(config);

export const totalMotionSpeed = (config: Config) =>
  totalMotionSpeedFromEquipment(config) +
  totalMotionSpeedFromASPD(config) +
  totalMotionSpeedFromSkills(config);

export const calculateMotionSpeed = (config: Config) => ({
  totalMotionSpeed: totalMotionSpeed(config),
});
