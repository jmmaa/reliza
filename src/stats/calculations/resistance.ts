import { type StatCalcConfig } from "../types";
import {
  add,
  flattenedStats,
  halberdSkills,
  isUsingMainHAL,
  isUsingMainMD,
  isUsingSubMD,
  isUsingSubShield,
  magicBladeSkills,
  shieldSkills,
} from "../utils";

export const godspeedWieldPRESReduction = (config: StatCalcConfig) =>
  halberdSkills(config).godspeedWield.buffIsActive ?
    isUsingMainHAL(config) ?
      -(
        (100 - 3 * halberdSkills(config).godspeedWield.level) *
          halberdSkills(config).godspeedWield.stacks +
        45 * halberdSkills(config).godspeedWield.stacks +
        Math.floor(halberdSkills(config).almightyWield.level * 0.5) *
          halberdSkills(config).godspeedWield.stacks
      )
    : -(
        (100 - 3 * halberdSkills(config).godspeedWield.level) *
        halberdSkills(config).godspeedWield.stacks
      )
  : 0;

export const godspeedWieldMRESReduction = (config: StatCalcConfig) =>
  godspeedWieldPRESReduction(config);

export const siphonBarrierMRESBuff = (config: StatCalcConfig) =>
  (
    (isUsingMainMD(config) || isUsingSubMD(config)) &&
    magicBladeSkills(config).siphonBarrier.buffIsActive
  ) ?
    magicBladeSkills(config).siphonBarrier.level * 9
  : 0;

export const siphonBarrierPRESBuff = (config: StatCalcConfig) =>
  siphonBarrierMRESBuff(config);

export const forceShieldPRES = (config: StatCalcConfig) =>
  isUsingSubShield(config) ? shieldSkills(config).forceShield.level : 0;
export const magicalShieldMRES = (config: StatCalcConfig) =>
  isUsingSubShield(config) ? shieldSkills(config).magicalShield.level : 0;

export const totalPhysicalResistanceFromEquipment = (
  config: StatCalcConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PHYSICAL_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPhysicalResistanceFromSkills = (
  config: StatCalcConfig,
) =>
  forceShieldPRES(config) +
  godspeedWieldPRESReduction(config) +
  siphonBarrierPRESBuff(config);

export const totalPhysicalResistance = (config: StatCalcConfig) =>
  totalPhysicalResistanceFromEquipment(config) +
  totalPhysicalResistanceFromSkills(config);

export const totalMagicResistanceFromEquipment = (
  config: StatCalcConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "MAGIC_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalMagicResistanceFromSkills = (config: StatCalcConfig) =>
  magicalShieldMRES(config) +
  godspeedWieldMRESReduction(config) +
  siphonBarrierMRESBuff(config);

export const totalMagicResistance = (config: StatCalcConfig) =>
  totalMagicResistanceFromEquipment(config) +
  totalMagicResistanceFromSkills(config);

export const totalLightResistance = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "LIGHT_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDarkResistance = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DARK_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFireResistance = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FIRE_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalEarthResistance = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "EARTH_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalWindResistance = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "WIND_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalWaterResistance = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "WATER_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const calculateResistance = (config: StatCalcConfig) => ({
  totalPhysicalResistance: totalPhysicalResistance(config),
  totalMagicResistance: totalMagicResistance(config),

  totalEarthResistance: totalEarthResistance(config),
  totalFireResistance: totalFireResistance(config),
  totalWaterResistance: totalWaterResistance(config),
  totalWindResistance: totalWindResistance(config),
});
