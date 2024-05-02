import { Character, Entries } from "../../types";

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * ((100 + percent) / 100)) + flat;

export const sum = (first: number, second: number) => first + second;

export const product = (first: number, second: number) => first * second;

export const get =
  <M extends {}, K extends keyof M>(key: K) =>
  (map: M) =>
    map[key];

export const floor = Math.floor;

export const max = Math.max;

export const min = Math.min;

export const concat = <V>(first: V[], second: V[]) => first.concat(second);

export const entries = (character: Character) =>
  Object.entries(character) as Entries<Character>;

export const equipmentStatSources = <T extends Character>(character: T) =>
  entries(character).filter(
    (value) =>
      value[0] === "mainWeapon" ||
      value[0] === "subWeapon" ||
      value[0] === "additionalGear" ||
      value[0] === "armor" ||
      value[0] === "specialGear",
  ) as Entries<{
    mainWeapon: T["mainWeapon"];
    subWeapon: T["subWeapon"];
    additionalGear: T["additionalGear"];
    armor: T["armor"];
    specialGear: T["specialGear"];
  }>;

export const equipmentStats = (character: Character) =>
  equipmentStatSources(character)
    .filter(
      (value) =>
        value[0] === "mainWeapon" ||
        (value[0] === "subWeapon" &&
          (value[1].type === "arrow" ||
            value[1].type === "dagger" ||
            value[1].type === "ninjutsu-scroll" ||
            value[1].type === "shield")) ||
        value[0] === "additionalGear" ||
        value[0] === "armor" ||
        value[0] === "specialGear",
    )
    .map((source) => source[1].stats);

export const equipmentCrystals = (character: Character) =>
  equipmentStatSources(character)
    .filter(
      (value) =>
        value[0] === "mainWeapon" ||
        value[0] === "additionalGear" ||
        value[0] === "armor" ||
        value[0] === "specialGear",
    )
    .map((source) => source[1].crystals);

export const flattenedStats = (character: Character) =>
  equipmentStats(character)
    .concat(
      equipmentCrystals(character).map((crystals) =>
        crystals.reduce((array, crystal) => array.concat(crystal), []),
      ),
    )
    .reduce((left, right) => left.concat(right))
    .concat(character.foodBuffs)
    .concat(character.consumables);

export const flattenStatsFromEquipment = (character: Character) =>
  equipmentStats(character)
    .concat(
      equipmentCrystals(character).map((crystals) =>
        crystals.reduce((array, crystal) => array.concat(crystal), []),
      ),
    )
    .reduce((left, right) => left.concat(right))
    .concat(character.foodBuffs)
    .concat(character.consumables);

//  -- data accessors --

export const isDualWielder = (character: Character) =>
  character.mainWeapon.type === "one-handed-sword" &&
  character.subWeapon.type === "one-handed-sword" &&
  character.skills.dualSwordSkills.dualSwordMastery.level > 0;

// export const toMultiplier= (n: number ) => (n/100)

// export type Argument<F extends Function> =
//   F extends (...args: infer A) => any ? A : never;

// export type ReturnOf<F extends Function> =
//   F extends (...args: any) => infer R ? R : never;

// export type TypedFunc<F extends Function> = (
//   ...args: Argument<F>
// ) => ReturnOf<F>;

// export type TraceFunc = <F extends Function>(
//   func: F,
//   message: string,
// ) => TypedFunc<F>;

// export const trace: TraceFunc =
//   (func, message) =>
//   (...args) => {
//     const result = func(...args);

//     console.log(message, result);

//     return result;
//   };
