import { get, sum } from "../../std/op";
import { Character } from "../../std/types";
import { flattenStatsFromEquipment } from "../utils";

export const totalDamageToDark = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("damageToDark"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalDamageToLight = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("damageToLight"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalDamageToFire = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("damageToFire"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalDamageToEarth = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("damageToEarth"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalDamageToWind = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("damageToWind"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalDamageToWater = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("damageToWater"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};
