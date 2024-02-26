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
} from "./types";
import { DEFAULT, stats } from "./api/helper";

import { pipe } from "./api/helper";

export const calculate = <
  Sub extends SubWeaponType,
  S extends {
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
    subWeaponType: AvailableSubWeaponType<Sub, S["mainWeaponType"]>;

    subWeaponATK: S["subWeaponType"] extends SubWeaponTypeWithATK
      ? number
      : 0;
    subWeaponRefinement: S["subWeaponType"] extends SubWeaponTypeWithRefinement
      ? number
      : 0;

    subWeaponStability: S["subWeaponType"] extends SubWeaponTypeWithStability
      ? number
      : 0;
    armorType: ArmorType;
    mainWeaponStats: StatGroupWithPredicate<S>[];
    subWeaponStats: StatGroupWithPredicate<S>[];
    additionalGearStats: StatGroupWithPredicate<S>[];
    armorStats: StatGroupWithPredicate<S>[];
    specialGearStats: StatGroupWithPredicate<S>[];
  }
>(
  status: S
) => {
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

    // crit damage
    ._(d.totalBaseCriticalDamage)

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
    ._(d.totalATK);

  return allDefaultCalculations.value;
};

export const WickedDragonFazzino = [
  stats(DEFAULT, { percentDEX: 7, percentMATK: 9, percentCSPD: 5 }),
];

const magicDeviceSupport2 = pipe({})
  ._(d.level(275))
  ._(d.STR(1))
  ._(d.DEX(315))
  ._(d.INT(1))
  ._(d.VIT(178))
  ._(d.AGI(220))
  ._(d.TEC(0))
  ._(d.MTL(0))
  ._(d.LUK(0))
  ._(d.CRT(0))
  ._(d.mainWeaponType("magic-device"))
  ._(d.mainWeaponATK(99))
  ._(d.mainWeaponRefinement(0))
  ._(d.mainWeaponStability(70))
  ._(
    d.mainWeaponStats([
      stats(DEFAULT, {
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
    ])
  )
  ._(
    d.mainWeaponCrystals([
      [stats(DEFAULT, { percentDEX: 7, percentMATK: 9, percentCSPD: 5 })],
    ])
  )
  ._(d.subWeaponType("ninjutsu-scroll"))
  // ._(d.subWeaponATK(200))
  // ._(d.subWeaponRefinement(15))
  ._(d.subWeaponATK(0))
  ._(d.subWeaponRefinement(0))
  ._(d.subWeaponStability(0))
  ._(
    d.subWeaponStats([
      stats(DEFAULT, {
        flatASPD: 250,
      }),
      stats((status) => (status.mainWeaponType as unknown) === "katana", {
        flatCriticalRate: 5,
      }),
    ])
  )
  ._(d.scrollCastTimeReduction(3))
  ._(d.scrollMPReduction(2))
  ._(d.additionalGearDEF(140))
  ._(
    d.additionalGearStats([
      stats(DEFAULT, {
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
    ])
  )

  ._(d.armorType("light"))
  ._(d.armorDEF(200))
  ._(d.armorRefinement(15))
  ._(
    d.armorStats([
      stats(DEFAULT, {
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
    ])
  )
  ._(
    d.specialGearStats([
      stats(DEFAULT, {
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
    ])
  )

  ._(calculate);

console.log(magicDeviceSupport2.value);
