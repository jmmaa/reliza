import { Character } from "../../../types";
import { get, sum, flattenStatsFromEquipment, floor } from "../../utils";

export const totalMagicDamageToElementBasedFromINT = (
  character: Character,
) => floor(character.INT / 10);

export const totalDamageToDark = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("damageToDark"))
    .reduce(sum, 0);

export const totalDamageToLight = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("damageToLight"))
    .reduce(sum, 0);

export const totalDamageToFire = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("damageToFire"))
    .reduce(sum, 0);

export const totalDamageToEarth = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("damageToEarth"))
    .reduce(sum, 0);

export const totalDamageToWind = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("damageToWind"))
    .reduce(sum, 0);

export const totalDamageToWater = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("damageToWater"))
    .reduce(sum, 0);
