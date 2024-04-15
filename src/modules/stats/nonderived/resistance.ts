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

export const totalPhysicalResistance = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("physicalResistance"))
    .reduce(sum, 0);

  const fromSkills =
    forceShieldTotalPhysicalResistance(character) +
    godspeedWieldTotalPhysicalResistance(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalMagicResistance = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("magicResistance"))
    .reduce(sum, 0);

  const fromSkills =
    magicalShieldTotalMagicResistance(character) +
    godspeedWieldTotalMagicResistance(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalLightResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("lightResistance"))
    .reduce(sum, 0);
};

export const totalDarkResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("darkResistance"))
    .reduce(sum, 0);
};

export const totalFireResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("fireResistance"))
    .reduce(sum, 0);
};

export const totalEarthResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("earthResistance"))
    .reduce(sum, 0);
};

export const totalWindResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("windResistance"))
    .reduce(sum, 0);
};

export const totalWaterResistance = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("waterResistance"))
    .reduce(sum, 0);
};
