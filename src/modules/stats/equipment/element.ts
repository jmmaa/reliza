import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";

export const mainWeaponElement = (config: IntermediateConfig) =>
  config["character.mainweapon.stats"]
    .filter(
      (stat) =>
        (stat[0] === StatId.earthElement ||
          stat[0] === StatId.fireElement ||
          stat[0] === StatId.windElement ||
          stat[0] === StatId.waterElement ||
          stat[0] === StatId.darkElement ||
          stat[0] === StatId.lightElement) &&
        stat[1] > 0,
    )
    .map((stat) =>
      stat[0] === StatId.earthElement ? "earth"
      : stat[0] === StatId.fireElement ? "fire"
      : stat[0] === StatId.windElement ? "wind"
      : stat[0] === StatId.waterElement ? "water"
      : stat[0] === StatId.darkElement ? "dark"
      : stat[0] === StatId.lightElement ? "light"
      : "neutral",
    )
    .reduce((prev, curr) => (curr !== "neutral" ? curr : prev), "neutral");

export const subWeaponElement = (config: IntermediateConfig) =>
  config["character.subweapon.stats"]
    .filter(
      (stat) =>
        (stat[0] === StatId.earthElement ||
          stat[0] === StatId.fireElement ||
          stat[0] === StatId.windElement ||
          stat[0] === StatId.waterElement ||
          stat[0] === StatId.darkElement ||
          stat[0] === StatId.lightElement) &&
        stat[1] > 0,
    )
    .map((stat) =>
      stat[0] === StatId.earthElement ? "earth"
      : stat[0] === StatId.fireElement ? "fire"
      : stat[0] === StatId.windElement ? "wind"
      : stat[0] === StatId.waterElement ? "water"
      : stat[0] === StatId.darkElement ? "dark"
      : stat[0] === StatId.lightElement ? "light"
      : "neutral",
    )
    .reduce((prev, curr) => (curr !== "neutral" ? curr : prev), "neutral");
