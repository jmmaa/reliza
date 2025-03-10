import { type StatCalcConfig } from "../types";

export const mainWeaponElement = (config: StatCalcConfig) =>
  config.equipments.mainweapon
    .stats(config)
    .filter(
      (stat) =>
        (stat[0] === "EARTH" ||
          stat[0] === "FIRE" ||
          stat[0] === "WIND" ||
          stat[0] === "WATER" ||
          stat[0] === "DARK" ||
          stat[0] === "LIGHT") &&
        stat[1] > 0,
    )
    .map((stat) =>
      stat[0] === "EARTH" ? "EARTH"
      : stat[0] === "FIRE" ? "FIRE"
      : stat[0] === "WIND" ? "WIND"
      : stat[0] === "WATER" ? "WATER"
      : stat[0] === "DARK" ? "DARK"
      : stat[0] === "LIGHT" ? "LIGHT"
      : "NEUTRAL",
    )
    .reduce((prev, curr) => (curr !== "NEUTRAL" ? curr : prev), "NEUTRAL");

export const subWeaponElement = (config: StatCalcConfig) =>
  config.equipments.subweapon
    .stats(config)
    .filter(
      (stat) =>
        (stat[0] === "EARTH" ||
          stat[0] === "FIRE" ||
          stat[0] === "WIND" ||
          stat[0] === "WATER" ||
          stat[0] === "DARK" ||
          stat[0] === "LIGHT") &&
        stat[1] > 0,
    )
    .map((stat) =>
      stat[0] === "EARTH" ? "EARTH"
      : stat[0] === "FIRE" ? "FIRE"
      : stat[0] === "WIND" ? "WIND"
      : stat[0] === "WATER" ? "WATER"
      : stat[0] === "DARK" ? "DARK"
      : stat[0] === "LIGHT" ? "LIGHT"
      : "NEUTRAL",
    )
    .reduce((prev, curr) => (curr !== "NEUTRAL" ? curr : prev), "NEUTRAL");

export const calculateElement = (config: StatCalcConfig) => ({
  mainWeaponElement: mainWeaponElement(config),
  subWeaponElement: subWeaponElement(config),
});
