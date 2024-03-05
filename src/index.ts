export * from "./STR";
export * from "./DEX";
export * from "./INT";
export * from "./VIT";
export * from "./AGI";
export * from "./personal";

export * from "./criticalRate";
export * from "./criticalDamage";
export * from "./weaponATK";
export * from "./ASPD";
export * from "./CSPD";
export * from "./maxHP";
export * from "./maxMP";

export * from "./ATK";
export * from "./MATK";

export * from "./unsheatheAttack";
export * from "./shortRangeDamage";
export * from "./longRangeDamage";
export * from "./stability";

export * from "./motionSpeed";

export * from "./DTE";

export * from "./resistance";

export * from "./aggro";

import * as d from ".";
import { pipe, stats, status, DEFAULT } from "./helper";
import { DeclaredStatusMap } from "./types";

export const calculate = <S extends DeclaredStatusMap>(status: S) => {
  const allCalculations = pipe(status)
    ._(d.calculateSTR)
    ._(d.calculateINT)
    ._(d.calculateDEX)
    ._(d.calculateVIT)
    ._(d.calculateAGI)
    ._(d.calculatePersonal)
    ._(d.calculateHP)
    ._(d.calculateMP)
    ._(d.calculateCSPD)
    ._(d.calculateASPD)
    ._(d.calculateMotionSpeed)
    ._(d.calculateCriticalRate)
    ._(d.calculateCriticalDamage)
    ._(d.calculateWeaponATK)
    ._(d.calculateATK)
    ._(d.calculateMATK)
    ._(d.calculateDTE)
    ._(d.calculateUnsheatheAttack)
    ._(d.calculateLongRangeDamage)
    ._(d.calculateShortRangeDamage)
    ._(d.calculateStability)
    ._(d.calculateResistance)
    ._(d.calculateAggro);

  return allCalculations.value;
};

export const WickedDragonFazzino = [
  {
    predicate: DEFAULT,
    stats: stats({
      percentCSPD: 5,
      percentMATK: 9,
      percentDEX: 7,
    }),
  },
];

const magicDeviceSupport = status({
  level: 275,

  DEX: 315,
  VIT: 178,
  AGI: 220,

  mainWeaponType: "magic-device",
  mainWeaponATK: 99,
  mainWeaponRefinement: 0,
  mainWeaponStability: 70,
  mainWeaponStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        // with crystals btw
        element: "light",
        percentDEF: 15,
        percentMDEF: 15,
        physicalResistance: 30,
        magicResistance: 30,
        flatCriticalRate: 30,
        percentCSPD: 100,
      }),
    },
  ],

  mainWeaponCrystals: [WickedDragonFazzino],

  subWeaponType: "ninjutsu-scroll",

  subWeaponStats: [
    {
      predicate: DEFAULT,
      stats: stats({ flatASPD: 250 }),
    },
    {
      predicate: (status) => status.mainWeaponType === "katana",
      stats: stats({ flatCriticalRate: 5 }),
    },
  ],

  additionalGearDEF: 0,
  additionalGearStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        // with crystals btw
        percentINT: 8,
        flatMaxMP: 400 - 300,
        percentATK: 8,
        // flatAttackMPRecovery: 4

        flatASPD: 800,
        percentMaxHP: 30,
        percentMATK: 5,
        percentCSPD: 75,
      }),
    },
  ],

  armorStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        // with crystals btw

        percentAGI: 10,
        percentDEX: 10,
        percentCSPD: 21 + 35,
        percentASPD: 21,
        flatASPD: 300,
        percentMaxHP: 10,
        flatMaxHP: 1000,

        percentINT: 3,
        percentMATK: 7,

        // percentAttackMPRecovery: 10
      }),
    },
  ],
  specialGearStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        // with crystals btw
        percentMaxHP: 25,
        flatCriticalRate: 25,
        // percentAggro : 25
        flatASPD: 1100,
        motionSpeed: 5,
        percentCriticalRate: 40 + 20,
        percentCSPD: -70,
        flatCSPD: 1000,
        flatMaxMP: 300,
      }),
    },
  ],

  armorType: "light",

  conversionLevel: 10,
});

const start = performance.now();
console.log(calculate(magicDeviceSupport));

const end = performance.now();

const result = end - start;

console.log(result);
// - Resort to object based declaration and complete

// const sample = status({
//   mainWeaponType: "one-handed-sword",
//   subWeaponType: "magic-device",
//   subWeaponRefinement: 15,

//   resonanceLevel: 10,
//   isResonanceActive: false,
// });

// console.log(calculate(sample));
