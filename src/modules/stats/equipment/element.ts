import { Character } from "../../../types";
import { get } from "../../utils";

export const mainWeaponElement = (character: Character) =>
  character.mainWeapon.stats
    .map(get("element"))
    .reduce((prev, next) => (next !== "neutral" ? next : prev), "neutral");

export const subWeaponElement = (character: Character) =>
  character.subWeapon.stats
    .map(get("element"))
    .reduce((prev, next) => (next !== "neutral" ? next : prev), "neutral");
