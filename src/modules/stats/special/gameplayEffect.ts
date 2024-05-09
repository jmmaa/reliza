import { Character } from "../../../types";
import { flattenedStats, get, sum } from "../../utils";

export const isFlinchUnavailable = (character: Character) =>
  flattenedStats(character)
    .map(get("flinchUnavailable"))
    .reduce((prev, next) => prev || next);

export const isStunUnavailable = (character: Character) =>
  flattenedStats(character)
    .map(get("stunUnavailable"))
    .reduce((prev, next) => prev || next);

export const isTumbleUnavailable = (character: Character) =>
  flattenedStats(character)
    .map(get("tumbleUnavailable"))
    .reduce((prev, next) => prev || next);

export const itemCooldown = (character: Character) =>
  10 - flattenedStats(character).map(get("itemCooldown")).reduce(sum, 0);

export const invincibleAid = (character: Character) =>
  flattenedStats(character).map(get("invincibleAid")).reduce(sum, 0);
