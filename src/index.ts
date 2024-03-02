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

export * from "./DTE";

export * from "./resistance";

import * as d from ".";
import { DeclaredStatus, Effect, StatMap } from "./types";
import { DEFAULT, stats } from "./api/helper";

import { pipe } from "./api/helper";

export const calculate = <S extends DeclaredStatus>(status: S) => {
  const allCalculations = pipe(status)
    // basic
    ._(d.calculateSTR)
    ._(d.calculateINT)
    ._(d.calculateDEX)
    ._(d.calculateVIT)
    ._(d.calculateAGI)

    // personal
    ._(d.calculatePersonal)

    // hp
    ._(d.calculateHP)

    // mp
    ._(d.calculateMP)

    // cast speed
    ._(d.calculateCSPD)

    // attack speed
    ._(d.calculateASPD)

    // crit rate
    ._(d.calculateCriticalRate)

    // crit damage
    ._(d.calculateCriticalDamage)

    // weaponATK
    ._(d.calculateWeaponATK)

    // ATK
    ._(d.calculateATK)

    // MATK
    ._(d.calculateMATK)

    // dte
    ._(d.calculateDTE)

    // resistance
    ._(d.calculateResistance);

  return allCalculations.value;
};

export const defaultDeclarations: DeclaredStatus = {
  level: 1,
  STR: 1,
  DEX: 1,
  INT: 1,
  VIT: 1,
  AGI: 1,
  TEC: 0,
  MTL: 0,
  CRT: 0,
  LUK: 0,

  mainWeaponType: "bare-hand",
  mainWeaponATK: 0,
  mainWeaponStability: 0,
  mainWeaponRefinement: 0,
  mainWeaponStats: [],
  mainWeaponCrystals: [],

  subWeaponType: "none",
  subWeaponATK: 0,
  subWeaponDEF: 0,
  subWeaponRefinement: 0,
  subWeaponStability: 0,
  scrollCastTimeReduction: 0,
  scrollMPReduction: 0,
  subWeaponStats: [],
  subWeaponCrystals: [],

  additionalGearDEF: 0,
  additionalGearStats: [],
  additionalGearCrystals: [],

  armorDEF: 0,
  armorType: "none",
  armorStats: [],
  armorCrystals: [],

  specialGearDEF: 0,
  specialGearStats: [],
  specialGearCrystals: [],

  consumables: [],
  foodBuffs: [],

  magicWarriorMasteryLevel: 0,
};

export const status = (
  declarations: Partial<DeclaredStatus>
): DeclaredStatus => ({
  ...defaultDeclarations,
  ...declarations,
});

export const flatCritRate = (value: number) => ({
  predicate: (status: DeclaredStatus) => status.armorType === "heavy",
  stats: stats({ flatCriticalRate: value }),
});

export const withMagicToolsOnly = (
  statMap: Partial<StatMap>
): Effect<DeclaredStatus> => {
  return {
    predicate: (status) =>
      status.mainWeaponType === "staff" ||
      status.mainWeaponType === "magic-device",
    stats: stats(statMap),
  };
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

  mainWeaponType: "staff",
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

  subWeaponType: "magic-device",

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

  armorType: "none",
});

const start = performance.now();
console.log(calculate(magicDeviceSupport));

const end = performance.now();

const result = end - start;

console.log(result);
// - Resort to object based declaration and complete
