import * as pino from "@jmmaa/pino";
import * as d from "./api";

import {
  MainWeaponType,
  SubWeaponType,
  StatSource,
  NinjutsuScroll,
  BareHand,
} from "./types";
import { DEFAULT, stats } from "./api/helper";

// functors

export const pipe = <T>(value: T) => {
  return {
    value: value,
    _: <N>(f: (value: T) => N) => pipe(f(value)),
  };
};

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
  } & StatSource<S>
>(
  status: S
) => {
  const allCalculations = pipe(status)
    ._(d.totalBaseSTR)
    ._(d.totalBaseINT)
    ._(d.totalBaseDEX)
    ._(d.totalBaseVIT)
    ._(d.totalBaseAGI)
    ._(d.totalPercentSTR)
    ._(d.totalPercentINT)
    ._(d.totalPercentDEX)
    ._(d.totalPercentVIT)
    ._(d.totalPercentAGI)
    ._(d.totalFlatSTR)
    ._(d.totalFlatINT)
    ._(d.totalFlatDEX)
    ._(d.totalFlatVIT)
    ._(d.totalFlatAGI)
    ._(d.totalSTR)
    ._(d.totalINT)
    ._(d.totalDEX)
    ._(d.totalVIT)
    ._(d.totalAGI)

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
    ._(d.totalASPD)
    ._(d.totalActionTimeReduction)

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

  return { ...status, ...allCalculations };
};

export const status = () => pipe({});

const magicDeviceSupport2 = pipe({})
  ._(d.level(275))
  ._(d.STR(1))
  ._(d.DEX(315))
  ._(d.INT(1))
  ._(d.VIT(1))
  ._(d.AGI(220))
  ._(d.TEC(0))
  ._(d.MTL(0))
  ._(d.LUK(0))
  ._(d.CRT(0))

  ._(d.mainWeaponType("bare-hand"))
  ._(d.mainWeaponATK(99))
  ._(d.mainWeaponRefinement(15))
  ._(d.mainWeaponStability(70))
  ._(
    d.mainWeaponStats([
      stats(DEFAULT, {
        percentDEF: 15,
        percentMDEF: 15,
        // physicalResistance: 30,
        // magicResistance: 30,
        flatCriticalRate: 30,
        percentCSPD: 100,
      }),
    ])
  )
  // ._(d.main)

  ._(d.subWeaponType("ninjutsu-scroll"))
  ._(d.scrollCastTimeReduction(3))
  ._(d.scrollMPReduction(2))

  ._(d.armorType("light"))
  ._(d.armorDEF(200))
  ._(d.armorRefinement(15))
  ._(
    d.armorStats([
      stats(DEFAULT, {
        percentAGI: 10,
        percentDEX: 10,
        percentCSPD: 21,
        percentASPD: 21,
        percentMaxHP: 10,
      }),
    ])
  )
  // ._(
  //   d.armorStats([
  //     stats((status) => status.armorType === "normal", { flatSTR: 21 }),
  //   ])
  // )
  ._(calculate);

console.log(magicDeviceSupport2.value);
