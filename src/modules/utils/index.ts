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

// export const armor = (character: Character) => character.armor;
// export const armorCrystals = (character: Character) =>
//   armor(character).crystals;
// export const armorStats = (character: Character) => armor(character).stats;

// export const additionalGear = (character: Character) =>
//   character.additionalGear;
// export const additionalGearCrystals = (character: Character) =>
//   additionalGear(character).crystals;
// export const additionalGearStats = (character: Character) =>
//   additionalGear(character).stats;

// export const specialGear = (character: Character) => character.specialGear;
// export const specialGearCrystals = (character: Character) =>
//   specialGear(character).crystals;
// export const specialGearStats = (character: Character) =>
//   specialGear(character).stats;

// export const subWeapon = (character: Character) => character.subWeapon;
// export const subWeaponCrystals = (character: Character) =>
//   subWeapon(character).crystals;
// export const subWeaponStats = (character: Character) =>
//   subWeapon(character).stats;

// export const mainWeapon = (character: Character) => character.mainWeapon;
// export const mainWeaponCrystals = (character: Character) =>
//   mainWeapon(character).crystals;
// export const mainWeaponStats = (character: Character) =>
//   mainWeapon(character).stats;

// export const statsMapping = (character: Character) => ({
//   mainWeapon: mainWeaponStats(character),
//   subWeapon: subWeaponStats(character),
//   additionalGear: additionalGearStats(character),
//   armor: armorStats(character),
//   specialGear: specialGearStats(character),
// });

// export const crystalsMapping = (character: Character) => ({
//   mainWeapon: mainWeaponCrystals(character),
//   subWeapon: subWeaponCrystals(character),
//   additionalGear: additionalGearCrystals(character),
//   armor: armorCrystals(character),
//   specialGear: specialGearCrystals(character),
// });

// export const

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
        crystals.map((crystal) => crystal(character)),
      ),
    )
    .reduce((left, right) => left.concat(right))
    .concat(character.foodBuffs)
    .concat(character.consumables);

export const flattenStatsFromEquipment = (character: Character) =>
  equipmentStats(character)
    .concat(
      equipmentCrystals(character).map((crystals) =>
        crystals.map((crystal) => crystal(character)),
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
