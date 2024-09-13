import * as basic from "./basic";
import * as equipment from "./equipment";
import { Stat, StatMapBuilder } from "./types";
import { F, createDeclarationMap, flattenedStats, merge } from "./utils";

// type _baseSTRFunc = (
//   _: number,
// ) => <O extends {}>(_: O) => O & { STR: number };
// const baseSTR: _baseSTRFunc = (value: number) => (entity) => ({
//   ...entity,
//   STR: value,
// });

// type _baseDEXFunc = (
//   _: number,
// ) => <O extends {}>(_: O) => O & { DEX: number };
// const baseDEX: _baseDEXFunc = (value: number) => (entity) => ({
//   ...entity,
//   DEX: value,
// });

// type _baseAGIFunc = (
//   _: number,
// ) => <O extends {}>(_: O) => O & { AGI: number };
// const baseAGI: _baseAGIFunc = (value: number) => (entity) => ({
//   ...entity,
//   AGI: value,
// });

// type _baseVITFunc = (
//   _: number,
// ) => <O extends {}>(_: O) => O & { VIT: number };
// const baseVIT: _baseVITFunc = (value: number) => (entity) => ({
//   ...entity,
//   VIT: value,
// });

// type _baseINTFunc = (
//   _: number,
// ) => <O extends {}>(_: O) => O & { INT: number };
// const baseINT: _baseINTFunc = (value: number) => (entity) => ({
//   ...entity,
//   INT: value,
// });

// type weaponFunc = (
//   ATK: number,
//   stability: number,
//   stats: [string, number][],
// ) => <O extends {}>(
//   _: O,
// ) => O & {
//   weapon: {
//     ATK: number;
//     stability: number;
//     stats: [string, number][];
//   };
// };

const character = F({});

const improved = character
  .map(basic.mergeTotalBaseSTR(490))
  .map(basic.mergeTotalBaseDEX(247))
  .map(basic.mergeTotalBaseINT(1))
  .map(basic.mergeTotalBaseVIT(1))
  .map(basic.mergeTotalBaseAGI(1))
  .map(basic.mergeTotalFlatSTR(490))
  .map(basic.mergeTotalFlatDEX(247))
  .map(basic.mergeTotalFlatINT(1))
  .map(basic.mergeTotalFlatVIT(1))
  .map(basic.mergeTotalFlatAGI(1))
  .map(basic.mergeTotalPercentSTR(490))
  .map(basic.mergeTotalPercentDEX(247))
  .map(basic.mergeTotalPercentINT(1))
  .map(basic.mergeTotalPercentVIT(1))
  .map(basic.mergeTotalPercentAGI(1))
  .map(basic.mergeTotalBaseSTR(490))
  .map(basic.mergeTotalBaseDEX(247))
  .map(basic.mergeTotalBaseINT(1))
  .map(basic.mergeTotalBaseVIT(1))
  .map(basic.mergeTotalBaseAGI(1))
  .map(basic.mergeTotalFlatSTR(490))
  .map(basic.mergeTotalFlatDEX(247))
  .map(basic.mergeTotalFlatINT(1))
  .map(basic.mergeTotalFlatVIT(1))
  .map(basic.mergeTotalFlatAGI(1))
  .map(basic.mergeTotalPercentSTR(490))
  .map(basic.mergeTotalPercentDEX(247))
  .map(basic.mergeTotalPercentINT(1))
  .map(basic.mergeTotalPercentVIT(1))
  .map(basic.mergeTotalPercentAGI(1))
  .map(basic.mergeTotalBaseSTR(490))
  .map(basic.mergeTotalBaseDEX(247))
  .map(basic.mergeTotalBaseINT(1))
  .map(basic.mergeTotalBaseVIT(1))
  .map(basic.mergeTotalBaseAGI(1))
  .map(basic.mergeTotalFlatSTR(490))
  .map(basic.mergeTotalFlatDEX(247))
  .map(basic.mergeTotalFlatINT(1))
  .map(basic.mergeTotalFlatVIT(1))
  .map(basic.mergeTotalFlatAGI(1))
  .map(basic.mergeTotalPercentSTR(490))
  .map(basic.mergeTotalPercentDEX(247))
  .map(basic.mergeTotalPercentINT(1))
  .map(basic.mergeTotalPercentVIT(1))
  .map(basic.mergeTotalPercentAGI(1))
  .map(basic.mergeTotalBaseSTR(490))
  .map(basic.mergeTotalBaseDEX(247))
  .map(basic.mergeTotalBaseINT(1))
  .map(basic.mergeTotalBaseVIT(1))
  .map(basic.mergeTotalBaseAGI(1))
  .map(basic.mergeTotalFlatSTR(490))
  .map(basic.mergeTotalFlatDEX(247))
  .map(basic.mergeTotalFlatINT(1))
  .map(basic.mergeTotalFlatVIT(1))
  .map(basic.mergeTotalFlatAGI(1))
  .map(basic.mergeTotalPercentSTR(490))
  .map(basic.mergeTotalPercentDEX(247))
  .map(basic.mergeTotalPercentINT(1))
  .map(basic.mergeTotalPercentVIT(1))
  .map(basic.mergeTotalPercentAGI(1))
  .map(basic.mergeTotalBaseSTR(490))
  .map(basic.mergeTotalBaseDEX(247))
  .map(basic.mergeTotalBaseINT(1))
  .map(basic.mergeTotalBaseVIT(1))
  .map(basic.mergeTotalBaseAGI(1))
  .map(basic.mergeTotalFlatSTR(490))
  .map(basic.mergeTotalFlatDEX(247))
  .map(basic.mergeTotalFlatINT(1))
  .map(basic.mergeTotalFlatVIT(1))
  .map(basic.mergeTotalFlatAGI(1))
  .map(basic.mergeTotalPercentSTR(490))
  .map(basic.mergeTotalPercentDEX(247))
  .map(basic.mergeTotalPercentINT(1))
  .map(basic.mergeTotalPercentVIT(1))
  .map(basic.mergeTotalPercentAGI(1))
  .map(basic.mergeTotalBaseSTR(490))
  .map(basic.mergeTotalBaseDEX(247))
  .map(basic.mergeTotalBaseINT(1))
  .map(basic.mergeTotalBaseVIT(1))
  .map(basic.mergeTotalBaseAGI(1))
  .map(basic.mergeTotalFlatSTR(490))
  .map(basic.mergeTotalFlatDEX(247))
  .map(basic.mergeTotalFlatINT(1))
  .map(basic.mergeTotalFlatVIT(1))
  .map(basic.mergeTotalFlatAGI(1))
  .map(basic.mergeTotalPercentSTR(490))
  .map(basic.mergeTotalPercentDEX(247))
  .map(basic.mergeTotalPercentINT(1))
  .map(basic.mergeTotalPercentVIT(1))
  .map(basic.mergeTotalPercentAGI(1))
  .map(basic.mergeTotalSTR)
  .map(basic.mergeTotalDEX)
  .map(basic.mergeTotalINT)
  .map(basic.mergeTotalVIT)
  .map(basic.mergeTotalAGI)
  .map(equipment.mergeWeaponType("one-handed-sword"))
  .map(equipment.mergeSubweaponType("magic-device"))
  .map(equipment.mergeTotalRawWeaponATK(550))
  .map(equipment.mergeTotalWeaponStability(80))
  .map(equipment.mergeTotalWeaponRefinement(15))
  .map(equipment.mergeTotalSubweaponRefinement(15))
  .map(equipment.mergeTotalRefinementBonusWeaponATK)
  .map(
    equipment.mergeWeaponStatBuilder((entity) =>
      entity.subweaponType === "magic-device" ?
        [["motionSpeed", 5]]
      : [["flatASPD", -900]],
    ),
  );

// test if merge replaces existing keys

const r1 = { a: 1, b: 2 };

const r2 = { b: 3, c: 4 };

const altadar: StatMapBuilder = (d) =>
  ([] as Stat[])
    .concat([["percentSTR", 6]])
    .concat([["percentVIT", 6]])
    .concat([["stability", 11]])
    .concat(
      d.characterArmorType === "heavy" ? [["longRangeDamage", 11]]
      : d.characterArmorType === "light" ? [["shortRangeDamage", 11]]
      : [],
    )
    .concat(
      (
        d.characterArmorType === "heavy" ||
          d.characterArmorType === "light"
      ) ?
        [["stability", -5]]
      : [],
    );

const myMage = createDeclarationMap({
  characterWeaponStats: (d) => [],

  characterSubweaponType: "arrow",
  characterSubweaponStats: (d) => [["flatCriticalRate", 25]],

  characterArmorCrystals: [altadar],
  characterArmorType: "heavy",

  characterFoodBuffs: [
    ["flatSTR", 30],
    ["flatMaxMP", 1000],
    ["damageToEarth", 15],
    ["flatCriticalRate", 30],
    ["flatWeaponATK", 100],
  ],
});

console.log(flattenedStats(myMage));
// console.log(myMage.characterWeaponStats(myMage));
