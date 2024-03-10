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
export * from "./final";

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
    ._(d.calculateMagicPierce)
    ._(d.calculateFinal);

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

const ohsMwarr = status({
  level: 280,

  INT: 475,
  STR: 247,

  mainWeaponType: "one-handed-sword",
  mainWeaponATK: 504,
  mainWeaponRefinement: 15,
  mainWeaponStability: 80,
  mainWeaponStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        percentMATK: 10,
        percentINT: 10,
        percentCriticalDamage: 10,
        flatCriticalDamage: 22,
        flatCriticalRate: 27,
      }),
    },
  ],

  mainWeaponCrystals: [
    [
      {
        predicate: DEFAULT,
        stats: stats({
          stability: 5,
          magicPierce: 20,
          aggro: -15,
        }),
      },
    ],
  ],

  subWeaponType: "magic-device",
  subWeaponATK: 333,
  subWeaponRefinement: 15,
  subWeaponStats: [
    {
      predicate: DEFAULT,
      stats: stats({ element: "light" }),
    },
  ],

  additionalGearDEF: 200,
  additionalGearStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        percentCriticalRate: 50,
        flatCriticalRate: 25,
        magicPierce: 20,
      }),
    },
  ],

  additionalGearCrystals: [
    [
      {
        predicate: DEFAULT,
        stats: stats({
          shortRangeDamage: 8,
          longRangeDamage: 8,
          percentUnsheatheAttack: 8,
        }),
      },
      {
        predicate: DEFAULT,
        stats: stats({
          percentUnsheatheAttack: 18,
          flatMaxMP: -100,
          percentDodge: -5,
        }),
      },
    ],
  ],
  armorDEF: 9,
  // armorRefinement: 15,
  armorStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        percentINT: 10,
        percentCriticalDamage: 11,
        flatCriticalDamage: 22,
        percentCriticalRate: 27,
        flatCriticalRate: 27,
        physicalPierce: -7,
      }),
    },
  ],

  armorCrystals: [
    [
      {
        predicate: DEFAULT,
        stats: stats({
          percentSTR: 6,
          percentVIT: 6,
        }),
      },
      {
        predicate: (status) => status.armorType === "light",
        stats: stats({
          shortRangeDamage: 11,
          stability: -5,
        }),
      },
      {
        predicate: (status) => status.armorType === "heavy",
        stats: stats({
          longRangeDamage: 11,
        }),
      },
    ],
    [
      {
        predicate: DEFAULT,
        stats: stats({
          percentUnsheatheAttack: 18,
          flatMaxMP: -100,
          percentDodge: -5,
        }),
      },
    ],
  ],
  specialGearDEF: 0,
  specialGearStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        flatASPD: 750,
        flatCSPD: 750,
        flatMaxMP: 200,
        ailmentResistance: -8,
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
          flatASPD: 1100,
          motionSpeed: 5,
        }),
      },
    ],
    [
      {
        predicate: DEFAULT,
        stats: stats({
          percentUnsheatheAttack: 18,
          flatMaxMP: -100,
          percentDodge: -5,
        }),
      },
    ],
  ],

  armorType: "light",

  magicWarriorMasteryLevel: 10,
  conversionLevel: 10,
  resonanceLevel: 10,
  enchantedSpellLevel: 10,
  dualBringerLevel: 10,
  dualBringerIsActive: true,

  etherFlareLevel: 10,
  elementSlashLevel: 10,
  enchantSwordLevel: 10,
  enchantedBurstLevel: 10,
  unionSwordLevel: 10,
});

const start = performance.now();
console.log(calculate(ohsMwarr));

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
// finish passives
