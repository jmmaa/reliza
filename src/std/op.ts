import { defaultCharacter, defaultStatMap } from "./default";
import { Character, StatMap } from "./types";

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * (1 + percent / 100) + flat);

export const sum = (first: number, second: number) => first + second;

export const get =
  <M extends {}, K extends keyof M>(key: K) =>
  (map: M) =>
    map[key];

export const floor = Math.floor;

export const concat = <V>(first: V[], second: V[]) => first.concat(second);

// funcs

export const statMap = (
  stats: Partial<StatMap>
): Partial<StatMap> & StatMap => ({
  ...(defaultStatMap as StatMap),
  ...stats,
});

export const character = (
  character: Partial<Character>
): Partial<Character> & Character => ({
  ...(defaultCharacter as Character),
  ...character,
});
