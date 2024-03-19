import { get } from "../../../std/op";
import { Character } from "../../../std/types";

export const mainWeaponElement = (character: Character) => {
  const element = character.mainWeapon.stats
    .map(get("element"))
    .reduce((prev, next) => (next !== "neutral" ? next : prev), "neutral");

  return element;
};

export const subWeaponElement = (character: Character) => {
  const element = character.subWeapon.stats
    .map(get("element"))
    .reduce((prev, next) => (next !== "neutral" ? next : prev), "neutral");

  return element;
};
