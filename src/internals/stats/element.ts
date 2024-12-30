import { type Config } from "../data";

export const mainWeaponElement = (config: Config) =>
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
      : "NEUTRAL",
    )
    .reduce((prev, curr) => (curr !== "NEUTRAL" ? curr : prev), "NEUTRAL");

export const subWeaponElement = (config: Config) =>
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
      stat[0] === "EARTH_ELEMENT" ? "earth"
      : stat[0] === "FIRE_ELEMENT" ? "fire"
      : stat[0] === "WIND_ELEMENT" ? "wind"
      : stat[0] === "WATER_ELEMENT" ? "water"
      : stat[0] === "DARK_ELEMENT" ? "dark"
      : stat[0] === "LIGHT_ELEMENT" ? "light"
      : "neutral",
    )
    .reduce((prev, curr) => (curr !== "neutral" ? curr : prev), "neutral");
