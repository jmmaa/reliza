import * as pino from "@jmmaa/pino";
import * as d from "./api";

import {
  MainWeaponType,
  SubWeaponType,
  StatSource,
  NinjutsuScroll,
  BareHand,
  ArmorType,
  AvailableSubWeaponType,
  StatGroupWithPredicate,
  SubWeaponTypeWithATK,
  SubWeaponTypeWithRefinement,
  SubWeaponTypeWithStability,
  Shield,
  StatMap,
  None,
} from "./types";
import { DEFAULT, stats } from "./api/helper";

import { pipe } from "./api/helper";

export type Effect<S> = {
  predicate: (status: S) => boolean;
  stats: StatMap;
};

export type Status = {
  level: number;
  STR: number;
  DEX: number;
  INT: number;
  VIT: number;
  AGI: number;
  CRT: number;
  MTL: number;
  TEC: number;
  LUK: number;

  mainWeaponType: MainWeaponType;
  mainWeaponATK: number;
  mainWeaponRefinement: number;
  mainWeaponStability: number;

  subWeaponType: SubWeaponType;
  subWeaponATK: Status["subWeaponType"] extends SubWeaponTypeWithATK
    ? number
    : 0;
  subWeaponRefinement: Status["subWeaponType"] extends SubWeaponTypeWithRefinement
    ? number
    : 0;

  subWeaponStability: Status["subWeaponType"] extends SubWeaponTypeWithStability
    ? number
    : 0;

  subWeaponDEF: Status["subWeaponType"] extends Shield ? number : 0;

  scrollCastTimeReduction: Status["subWeaponType"] extends NinjutsuScroll
    ? number
    : 0;

  scrollMPReduction: Status["subWeaponType"] extends NinjutsuScroll
    ? number
    : 0;

  armorDEF: number;
  armorType: ArmorType;

  additionalGearDEF: number;
  specialGearDEF: number;

  mainWeaponStats: Effect<Status>[];
  subWeaponStats: Effect<Status>[];
  additionalGearStats: Effect<Status>[];
  armorStats: Effect<Status>[];
  specialGearStats: Effect<Status>[];
};

export const calculate = (status: Status) => {
  const allDefaultCalculations = pipe(status)
    // AGI
    ._(d.totalBaseAGI)
    ._(d.totalPercentAGI)
    ._(d.totalFlatAGI)
    ._(d.totalAGI)

    // DEX
    ._(d.totalBaseDEX)
    ._(d.totalPercentDEX)
    ._(d.totalFlatDEX)
    ._(d.totalDEX)

    // REFACTOR ALL OF THESE BELOW
    ._(d.totalBaseSTR)
    ._(d.totalBaseINT)
    ._(d.totalBaseVIT)
    ._(d.totalPercentSTR)
    ._(d.totalPercentINT)
    ._(d.totalPercentVIT)
    ._(d.totalFlatSTR)
    ._(d.totalFlatINT)
    ._(d.totalFlatVIT)

    //
    ._(d.totalSTR)
    ._(d.totalINT)
    ._(d.totalVIT)

    // personal
    ._(d.totalBaseMTL)
    ._(d.totalBaseCRT)
    ._(d.totalBaseLUK)
    ._(d.totalBaseTEC)

    // hp
    ._(d.totalBaseMaxHP)
    ._(d.totalBaseMaxMP)

    // cast speed
    ._(d.totalBaseCSPD)
    ._(d.totalPercentCSPD)
    ._(d.totalFlatCSPD)
    ._(d.totalCSPD)
    ._(d.totalCastTimeReduction)

    // attack speed
    ._(d.totalBaseASPD)
    ._(d.totalPercentASPD)
    ._(d.totalFlatASPD)
    ._(d.lightArmorASPDModifier)
    ._(d.heavyArmorASPDModifier)
    ._(d.totalASPD)
    ._(d.totalActionTimeReduction)

    // equipment type modifier

    // crit rate
    ._(d.totalBaseCriticalRate)
    ._(d.totalPercentCriticalRate)
    ._(d.totalFlatCriticalRate)
    ._(d.totalCriticalRate)

    // crit damage
    ._(d.totalBaseCriticalDamage)
    ._(d.totalPercentCriticalDamage)
    ._(d.totalFlatCriticalDamage)
    ._(d.totalCriticalDamage)

    // main weapon attack
    ._(d.totalBaseMainWeaponATK)
    ._(d.totalPercentMainWeaponATK)
    ._(d.totalFlatMainWeaponATK)
    ._(d.totalMainWeaponRefinementBonusMainWeaponATK)
    ._(d.totalMainWeaponATK)

    // sub weapon attack
    ._(d.totalBaseSubWeaponATK)
    ._(d.totalPercentSubWeaponATK)
    ._(d.totalFlatSubWeaponATK)
    ._(d.totalSubWeaponRefinementBonusSubWeaponATK)
    ._(d.totalSubWeaponATK)

    // ATK
    ._(d.totalBaseATK)
    ._(d.totalPercentATK)
    ._(d.subWeaponMagicDeviceATKModifier)
    ._(d.totalFlatATK)
    ._(d.totalATK)

    // MATK
    ._(d.totalBaseMATK)
    ._(d.totalPercentMATK)
    ._(d.subWeaponKnuckleMATKModifier)
    ._(d.totalFlatMATK)
    ._(d.totalMATK);

  return allDefaultCalculations.value;
};

export const defaultDeclarations: Status = {
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

  subWeaponType: "none",
  subWeaponATK: 0,
  subWeaponDEF: 0,
  subWeaponRefinement: 0,
  subWeaponStability: 0,
  scrollCastTimeReduction: 0,
  scrollMPReduction: 0,
  subWeaponStats: [],

  additionalGearDEF: 0,
  additionalGearStats: [],

  armorDEF: 0,
  armorType: "none",
  armorStats: [],

  specialGearDEF: 0,
  specialGearStats: [],
};

export const status = (declarations: Partial<Status>): Status => ({
  ...defaultDeclarations,
  ...declarations,
});

export const flatCritRate = (value: number) => ({
  predicate: (status: Status) => status.armorType === "heavy",
  stats: stats({ flatCriticalRate: value }),
});

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
        percentDEF: 15,
        percentMDEF: 15,
        physicalResistance: 30,
        magicResistance: 30,
        flatCriticalRate: 30,
        percentCSPD: 100 + 5,

        percentMATK: 9,
        percentDEX: 7,
      }),
    },
  ],

  subWeaponType: "ninjutsu-scroll",

  subWeaponStats: [
    { predicate: DEFAULT, stats: stats({ flatASPD: 250 }) },
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

    flatCritRate(27),
  ],

  armorType: "none",
});

console.log(calculate(magicDeviceSupport));

// - Resort to object based declaration and complete
// - remove unecessary functions
