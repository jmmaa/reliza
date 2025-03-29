import { type StatCalcConfig } from "../types";
import {
  flattenedStatsFromMainWeapon,
  flattenedStatsFromSubWeapon,
} from "../utils";

export const mainWeaponElement = (config: StatCalcConfig) =>
  flattenedStatsFromMainWeapon(config)
    .filter(
      (stat) =>
        stat.earthElement > 0 ||
        stat.fireElement > 0 ||
        stat.waterElement > 0 ||
        stat.windElement ||
        stat.darkElement > 0 ||
        stat.lightElement > 0,
    )

    .map((stat) =>
      // group element stats from stat groups
      [
        ["earthElement", stat.earthElement],
        ["fireElement", stat.fireElement],
        ["windElement", stat.windElement],
        ["waterElement", stat.waterElement],
        ["darkElement", stat.darkElement],
        ["lightElement", stat.lightElement],
      ].reduce(
        (prev, curr) => (curr[1] > prev[1] ? curr : prev),
        ["neutralElement", 0],
      ),
    )
    .reduce(
      (prev, curr) => (curr[1] > prev[1] ? curr : prev),
      ["neutralElement", 0],
    )[1];

export const subWeaponElement = (config: StatCalcConfig) =>
  flattenedStatsFromSubWeapon(config)
    .filter(
      (stat) =>
        stat.earthElement > 0 ||
        stat.fireElement > 0 ||
        stat.waterElement > 0 ||
        stat.windElement ||
        stat.darkElement > 0 ||
        stat.lightElement > 0,
    )

    .map((stat) =>
      // group element stats from stat groups
      [
        ["earthElement", stat.earthElement],
        ["fireElement", stat.fireElement],
        ["windElement", stat.windElement],
        ["waterElement", stat.waterElement],
        ["darkElement", stat.darkElement],
        ["lightElement", stat.lightElement],
      ].reduce(
        (prev, curr) => (curr[1] > prev[1] ? curr : prev),
        ["neutralElement", 0],
      ),
    )
    .reduce(
      (prev, curr) => (curr[1] > prev[1] ? curr : prev),
      ["neutralElement", 0],
    )[1];

export const calculateElement = (config: StatCalcConfig) => ({
  mainWeaponElement: mainWeaponElement(config),
  subWeaponElement: subWeaponElement(config),
});
