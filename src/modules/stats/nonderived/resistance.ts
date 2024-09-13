import { StatId } from "../../../types";
import { type IntermediateConfig } from "../../../types";
import {
  godspeedWieldTotalMagicResistance,
  godspeedWieldTotalPhysicalResistance,
} from "../../halberdSkills/godspeedWield";
import {
  siphonBarrierTotalMagicResistance,
  siphonBarrierTotalPhysicalResistance,
} from "../../magicBladeSkills/siphonBarrier";
import {
  forceShieldTotalPhysicalResistance,
  magicalShieldTotalMagicResistance,
} from "../../shieldSkills";
import { get, sum, flattenedStats } from "../../utils";

export const totalPhysicalResistanceFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.physicalResistance)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPhysicalResistanceFromSkills = (
  config: IntermediateConfig,
) =>
  forceShieldTotalPhysicalResistance(config) +
  godspeedWieldTotalPhysicalResistance(config) +
  siphonBarrierTotalPhysicalResistance(config);

export const totalPhysicalResistance = (config: IntermediateConfig) =>
  totalPhysicalResistanceFromEquipment(config) +
  totalPhysicalResistanceFromSkills(config);

export const totalMagicResistanceFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.magicResistance)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalMagicResistanceFromSkills = (
  config: IntermediateConfig,
) =>
  magicalShieldTotalMagicResistance(config) +
  godspeedWieldTotalMagicResistance(config) +
  siphonBarrierTotalMagicResistance(config);

export const totalMagicResistance = (config: IntermediateConfig) =>
  totalMagicResistanceFromEquipment(config) +
  totalMagicResistanceFromSkills(config);

export const totalLightResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.lightResistance)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalDarkResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.darkResistance)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFireResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.fireResistance)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalEarthResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.earthResistance)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalWindResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.windResistance)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalWaterResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.waterResistance)
    .map((stat) => stat[1])
    .reduce(sum, 0);
