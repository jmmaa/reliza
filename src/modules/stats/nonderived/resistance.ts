import { Character } from "../../../types";
import {
  godspeedWieldTotalMagicResistance,
  godspeedWieldTotalPhysicalResistance,
} from "../../halberdSkills/godspeedWield";
import {
  forceShieldTotalPhysicalResistance,
  magicalShieldTotalMagicResistance,
} from "../../shieldSkills";
import { get, sum, flattenStatsFromEquipment } from "../../utils";

export const totalPhysicalResistanceFromEquipment = (
  character: Character,
) =>
  flattenStatsFromEquipment(character)
    .map(get("physicalResistance"))
    .reduce(sum, 0);

export const totalPhysicalResistanceFromSkills = (character: Character) =>
  forceShieldTotalPhysicalResistance(character) +
  godspeedWieldTotalPhysicalResistance(character);

export const totalPhysicalResistance = (character: Character) =>
  totalPhysicalResistanceFromEquipment(character) +
  totalPhysicalResistanceFromSkills(character);

export const totalMagicResistanceFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("magicResistance"))
    .reduce(sum, 0);

export const totalMagicResistanceFromSkills = (character: Character) =>
  magicalShieldTotalMagicResistance(character) +
  godspeedWieldTotalMagicResistance(character);

export const totalMagicResistance = (character: Character) =>
  totalMagicResistanceFromEquipment(character) +
  totalMagicResistanceFromSkills(character);

export const totalLightResistance = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("lightResistance"))
    .reduce(sum, 0);

export const totalDarkResistance = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("darkResistance"))
    .reduce(sum, 0);

export const totalFireResistance = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("fireResistance"))
    .reduce(sum, 0);

export const totalEarthResistance = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("earthResistance"))
    .reduce(sum, 0);

export const totalWindResistance = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("windResistance"))
    .reduce(sum, 0);

export const totalWaterResistance = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("waterResistance"))
    .reduce(sum, 0);
