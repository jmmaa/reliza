import * as pino from "@jmmaa/pino";
import * as d from "./api";

import {
  MainWeaponType,
  SubWeaponType,
  StatSource,
  NinjutsuScroll,
  BareHand,
  ArmorType,
} from "./types";
import { DEFAULT, stats } from "./api/helper";

import { pipe } from "./api/helper";
// functors

export const calculate = <
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
    subWeaponType: SubWeaponType;
    armorType: ArmorType;
  } & StatSource<S>
>(
  status: S
) => {
  const allCalculations = pipe(status)
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

    // weapon attack
    ._(d.totalBaseWeaponATK)
    ._(d.totalPercentWeaponATK)
    ._(d.totalFlatWeaponATK)
    ._(d.totalWeaponRefinementBonusWeaponATK)
    ._(d.totalWeaponATK);

  return allCalculations.value;
};

export const status = () => pipe({});

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
  ._(d.mainWeaponRefinement(15))
  ._(d.mainWeaponStability(70))
  ._(
    d.mainWeaponStats([
      stats(DEFAULT, {
        flatAGI: 2, // test
        percentDEF: 15,
        percentMDEF: 15,
        physicalResistance: 30,
        magicResistance: 30,
        flatCriticalRate: 30,
        percentCSPD: 100,
      }),
    ])
  )
  ._(
    d.mainWeaponCrystals([
      [stats(DEFAULT, { percentDEX: 7, percentMATK: 9, percentCSPD: 5 })],
    ])
  )
  ._(d.subWeaponType("ninjutsu-scroll"))
  ._(
    d.subWeaponStats([
      stats(DEFAULT, {
        flatAGI: 2, // test
      }),
    ])
  )
  ._(d.scrollCastTimeReduction(3))
  ._(d.scrollMPReduction(2))

  ._(d.armorType("light"))
  ._(d.armorDEF(200))
  ._(d.armorRefinement(15))
  ._(
    d.armorStats([
      stats(DEFAULT, {
        flatAGI: 2, // test
        percentAGI: 10,
        percentDEX: 10,
        percentCSPD: 21,
        percentASPD: 21,
        percentMaxHP: 10,
      }),
    ])
  )
  ._(
    d.armorStats([
      stats((status) => status.armorType === "normal", { flatSTR: 21 }),
    ])
  )
  ._(calculate);

console.log(magicDeviceSupport2.value);
