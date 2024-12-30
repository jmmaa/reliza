import { type Config } from "../data";
import { add, flattenedStats } from "../utils";

import {
  forceShieldTotalPhysicalResistance,
  magicalShieldTotalMagicResistance,
} from "..";

import {
  siphonBarrierTotalMagicResistance,
  siphonBarrierTotalPhysicalResistance,
} from "..";

import {
  godspeedWieldTotalMagicResistance,
  godspeedWieldTotalPhysicalResistance,
} from "..";

export const totalPhysicalResistanceFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PHYSICAL_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPhysicalResistanceFromSkills = (config: Config) =>
  forceShieldTotalPhysicalResistance(config) +
  godspeedWieldTotalPhysicalResistance(config) +
  siphonBarrierTotalPhysicalResistance(config);

export const totalPhysicalResistance = (config: Config) =>
  totalPhysicalResistanceFromEquipment(config) +
  totalPhysicalResistanceFromSkills(config);

export const totalMagicResistanceFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "MAGIC_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalMagicResistanceFromSkills = (config: Config) =>
  magicalShieldTotalMagicResistance(config) +
  godspeedWieldTotalMagicResistance(config) +
  siphonBarrierTotalMagicResistance(config);

export const totalMagicResistance = (config: Config) =>
  totalMagicResistanceFromEquipment(config) +
  totalMagicResistanceFromSkills(config);

export const totalLightResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "LIGHT_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDarkResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DARK_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFireResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FIRE_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalEarthResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "EARTH_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalWindResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "WIND_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalWaterResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "WATER_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateResistance = (config: Config) => ({
  totalPhysicalResistance: totalPhysicalResistance(config),
  totalMagicResistance: totalMagicResistance(config),

  totalEarthResistance: totalEarthResistance(config),
  totalFireResistance: totalFireResistance(config),
  totalWaterResistance: totalWaterResistance(config),
  totalWindResistance: totalWindResistance(config),
});
