import { type Config } from "../data";
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

export const godspeedWieldPRESReduction = (config: Config) =>
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

export const godspeedWieldMRESReduction = (config: Config) =>
  godspeedWieldPRESReduction(config);

export const siphonBarrierMRESBuff = (config: Config) =>
  (
    (isUsingMainMD(config) || isUsingSubMD(config)) &&
    magicBladeSkills(config).siphonBarrier.buffIsActive
  ) ?
    magicBladeSkills(config).siphonBarrier.level * 9
  : 0;

export const siphonBarrierPRESBuff = (config: Config) =>
  siphonBarrierMRESBuff(config);

export const forceShieldPRES = (config: Config) =>
  isUsingSubShield(config) ? shieldSkills(config).forceShield.level : 0;
export const magicalShieldMRES = (config: Config) =>
  isUsingSubShield(config) ? shieldSkills(config).magicalShield.level : 0;

export const totalPhysicalResistanceFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PHYSICAL_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPhysicalResistanceFromSkills = (config: Config) =>
  forceShieldPRES(config) +
  godspeedWieldPRESReduction(config) +
  siphonBarrierPRESBuff(config);

export const totalPhysicalResistance = (config: Config) =>
  totalPhysicalResistanceFromEquipment(config) +
  totalPhysicalResistanceFromSkills(config);

export const totalMagicResistanceFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "MAGIC_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalMagicResistanceFromSkills = (config: Config) =>
  magicalShieldMRES(config) +
  godspeedWieldMRESReduction(config) +
  siphonBarrierMRESBuff(config);

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
