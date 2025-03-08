import { type StatCalcConfig } from "../types";

export const mainWeaponElement = (config: StatCalcConfig) =>
  config.equipments.mainweapon
    .stats(config)
    .filter(
      (stat) =>
        (stat[0] === "EARTH_ELEMENT" ||
          stat[0] === "FIRE_ELEMENT" ||
          stat[0] === "WIND_ELEMENT" ||
          stat[0] === "WATER_ELEMENT" ||
          stat[0] === "DARK_ELEMENT" ||
          stat[0] === "LIGHT_ELEMENT") &&
        stat[1] > 0,
    )
    .map((stat) =>
      stat[0] === "EARTH_ELEMENT" ? "EARTH_ELEMENT"
      : stat[0] === "FIRE_ELEMENT" ? "FIRE_ELEMENT"
      : stat[0] === "WIND_ELEMENT" ? "WIND_ELEMENT"
      : stat[0] === "WATER_ELEMENT" ? "WATER_ELEMENT"
      : stat[0] === "DARK_ELEMENT" ? "DARK_ELEMENT"
      : stat[0] === "LIGHT_ELEMENT" ? "LIGHT_ELEMENT"
      : "NEUTRAL_ELEMENT",
    )
    .reduce(
      (prev, curr) => (curr !== "NEUTRAL_ELEMENT" ? curr : prev),
      "NEUTRAL_ELEMENT",
    );

export const subWeaponElement = (config: StatCalcConfig) =>
  config.equipments.subweapon
    .stats(config)
    .filter(
      (stat) =>
        (stat[0] === "EARTH_ELEMENT" ||
          stat[0] === "FIRE_ELEMENT" ||
          stat[0] === "WIND_ELEMENT" ||
          stat[0] === "WATER_ELEMENT" ||
          stat[0] === "DARK_ELEMENT" ||
          stat[0] === "LIGHT_ELEMENT") &&
        stat[1] > 0,
    )
    .map((stat) =>
      stat[0] === "EARTH_ELEMENT" ? "EARTH_ELEMENT"
      : stat[0] === "FIRE_ELEMENT" ? "FIRE_ELEMENT"
      : stat[0] === "WIND_ELEMENT" ? "WIND_ELEMENT"
      : stat[0] === "WATER_ELEMENT" ? "WATER_ELEMENT"
      : stat[0] === "DARK_ELEMENT" ? "DARK_ELEMENT"
      : stat[0] === "LIGHT_ELEMENT" ? "LIGHT_ELEMENT"
      : "NEUTRAL_ELEMENT",
    )
    .reduce(
      (prev, curr) => (curr !== "NEUTRAL_ELEMENT" ? curr : prev),
      "NEUTRAL_ELEMENT",
    );

export const calculateElement = (config: StatCalcConfig) => ({
  mainWeaponElement: mainWeaponElement(config),
  subWeaponElement: subWeaponElement(config),
});
