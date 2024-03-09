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
export * from "./dodge";
export * from "./DTE";

export * from "./resistance";
export * from "./DEF";
export * from "./MDEF";
export * from "./MATKUP";
export * from "./MATKDOWN";
export * from "./ATKUP";
export * from "./ATKDOWN";
export * from "./accuracy";

export * from "./physicalPierce";
export * from "./magicPierce";
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
    ._(d.calculateDTE)
    ._(d.calculateUnsheatheAttack)
    ._(d.calculateLongRangeDamage)
    ._(d.calculateShortRangeDamage)
    ._(d.calculateStability)
    ._(d.calculateResistance)
    ._(d.calculateAggro)
    ._(d.calculateDEF)
    ._(d.calculateMDEF)
    ._(d.calculateAccuracy)
    ._(d.calculateMATKUP)
    ._(d.calculateMATKDOWN)
    ._(d.calculateATKUP)
    ._(d.calculateATKDOWN)
    ._(d.calculateATK)
    ._(d.calculateMATK)
    ._(d.calculateDodge)
    ._(d.calculatePhysicalPierce)
    ._(d.calculateMagicPierce);

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

  additionalGearDEF: 140,
  additionalGearStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        flatMaxMP: 400,
        percentINT: 8,
        percentATK: 8,
        flatAttackMPRecovery: 4,
      }),
    },
  ],

  additionalGearCrystals: [
    [
      {
        predicate: DEFAULT,
        stats: stats({
          percentMATK: 5,
          percentCSPD: 75,
          longRangeDamage: -16,
        }),
      },
      {
        predicate: DEFAULT,
        stats: stats({ flatASPD: 800, percentMaxHP: 30, flatMaxMP: -300 }),
      },
    ],
  ],
  armorDEF: 9,
  armorStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        percentAGI: 10,
        percentDEX: 10,
        percentCSPD: 21,
        percentASPD: 21,
        percentMaxHP: 10,
      }),
    },
  ],

  armorCrystals: [
    [
      {
        predicate: DEFAULT,
        stats: stats({
          percentINT: 3,
          percentMATK: 7,
          percentCSPD: 35,
          percentAttackMPRecovery: 10,
        }),
      },
    ],
    [
      {
        predicate: DEFAULT,
        stats: stats({
          flatMaxHP: 1000,
          flatASPD: 300,
          tumbleUnavailable: true,
        }),
      },
    ],
  ],
  specialGearDEF: 10,
  specialGearStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        percentMaxHP: 25,
        flatCriticalRate: 25,
        aggro: 25,
      }),
    },
  ],

  specialGearCrystals: [
    [
      {
        predicate: DEFAULT,
        stats: stats({
          percentCSPD: -70,
          percentCriticalRate: 40,
          motionSpeed: 5,
        }),
      },
    ],
    [
      {
        predicate: DEFAULT,
        stats: stats({
          flatCSPD: 1000,
          flatMaxMP: 300,
          percentCriticalRate: 20,
        }),
      },
    ],
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

// NOTE
// think about how to lay out the skills
//
// UPDATE
// FUCk IT, WE CODIN!
