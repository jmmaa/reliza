import * as pino from "@jmmaa/pino";
import * as d from "./api";

import {
  MainWeaponType,
  SubWeaponType,
  StatSource,
  CompatibleSubWeaponType,
  AvailableSubWeaponType,
} from "./types";
import { DEFAULT, DeclaredStatContainer, stats } from "./api/helper";

// functors

export const compose = <T>(value: T) => {
  return {
    value: value,
    _: <N>(f: (value: T) => N) => compose(f(value)),
  };
};

export const calculate = <
  T extends {
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
  } & StatSource
>(
  status: T
) => {
  const allCalculations = compose(status)
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

export const armorRefinement =
  (value: number) =>
  <S>(status: S): S & { armorRefinement: number } => ({
    ...status,
    armorRefinement: value,
  });

export const armorDefense =
  (value: number) =>
  <S>(status: S): S & { armorDefense: number } => {
    return { ...status, armorDefense: value };
  };

export const armorStats = <
  S,
  T extends {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[]
>(
  arr: T
) => {
  return (status: S): S & { armorStats: T } => {
    return { ...status, armorStats: arr };
  };
};

// addgear declaration
export const additionalGearRefinement =
  (value: number) =>
  <S>(status: S): S & { additionalGearRefinement: number } => ({
    ...status,
    additionalGearRefinement: value,
  });

export const additionalGearDefense =
  (value: number) =>
  <S>(status: S): S & { additionalGearDefense: number } => {
    return { ...status, additionalGearDefense: value };
  };

export const additionalGearStats = <
  S,
  T extends {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[]
>(
  arr: T
) => {
  return (status: S): S & { additionalGearStats: T } => {
    return { ...status, additionalGearStats: arr };
  };
};

// special gear declaration

export const specialGearDefense =
  (value: number) =>
  <S>(status: S): S & { specialGearDefense: number } => {
    return { ...status, specialGearDefense: value };
  };

export const specialGearStats = <
  S,
  T extends {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[]
>(
  arr: T
) => {
  return (status: S): S & { specialGearStats: T } => {
    return { ...status, specialGearStats: arr };
  };
};

//

// scratch

// try implementing attack tomorrow

// const magicDeviceSupport = new Status({
//   level: 275,
//   STR: 1,
//   DEX: 315,
//   INT: 1,
//   VIT: 1,
//   AGI: 220,
//   CRT: 0,
//   MTL: 0,
//   TEC: 0,
//   LUK: 0,
// })

//   .add(mainWeaponType("magic-device"))
//   .add(mainWeaponRefinement(15))
//   .add(mainWeaponStability(50))
//   .add(d.mainWeaponStats([statGroup(DEFAULT, { flatSTR: 21 })]))
//   .calculate();

// const status = magicDeviceSupport.mapping;

// console.log(status);

// console.log(
//   pino.magicDeviceBaseMagicAttack(275, status.totalWeaponATK, 465, 247)
// );

// TODO
// - fix cast/action time reduction
// - finish other formulas

export class MainWeapon<S> {
  status: S;

  constructor(status: S) {
    this.status = status;
  }

  type<T extends MainWeaponType>(t: T) {
    const callback = d.mainWeaponType(t);
    return new MainWeapon(callback(this.status));
  }

  ATK(n: number) {
    const callback = d.mainWeaponATK(n);
    return new MainWeapon(callback(this.status));
  }

  refinement(n: number) {
    const callback = d.mainWeaponRefinement(n);
    return new MainWeapon(callback(this.status));
  }

  stability(n: number) {
    const callback = d.mainWeaponStability(n);
    return new MainWeapon(callback(this.status));
  }

  build() {
    return <S>(status: S) => ({ ...status, ...this.status });
  }
}

export class SubWeapon<S extends { mainWeaponType: MainWeaponType }> {
  status: S;

  constructor(status: S) {
    this.status = status;
  }

  type(t: CompatibleSubWeaponType<S["mainWeaponType"]>) {
    const callback = d.subWeaponType(t);
    return new SubWeapon(callback(this.status));
  }

  // WORK ON THIS TOMMORROW
  // ATK(n: number) {
  //   const callback = d.subWeaponATK(n);
  //   return new _SubWeapon(callback(this.status));
  // }

  // refinement(n: number) {
  //   const callback = d.subWeaponRefinement(n);
  //   return new _SubWeapon(callback(this.status));
  // }

  // stability(n: number) {
  //   const callback = d.subWeaponStability(n);
  //   return new _SubWeapon(callback(this.status));
  // }

  build() {
    return <S>(status: S) => ({
      ...status,
      ...this.status,
    });
  }
}

export class Equipment<S> {
  status: S;

  constructor(status: S) {
    this.status = status;
  }

  mainWeapon(mainWeapon: MainWeapon<S>) {
    const callback = mainWeapon.build();
    return new Equipment(callback(this.status));
  }

  subWeapon<S extends { mainWeaponType: MainWeaponType }>(
    subWeapon: SubWeapon<S>
  ) {
    const callback = subWeapon.build();
    return new Equipment(callback(this.status));
  }
}

const weapons = compose({})
  ._(d.mainWeaponATK(400))
  ._(d.mainWeaponStability(50))
  ._(d.mainWeaponType("magic-device"));

export const mainWeapon =
  (value: {
    stability: number;
    ATK: number;
    type: MainWeaponType;
    refinement: number;
  }) =>
  <S>(
    status: S
  ): S & {
    mainWeaponATK: number;
    mainWeaponType: MainWeaponType;
    mainWeaponStability: number;
    mainWeaponRefinement: number;
  } => {
    const composed = compose(status)
      ._(d.mainWeaponATK(value.ATK))
      ._(d.mainWeaponType(value.type))
      ._(d.mainWeaponStability(value.stability))
      ._(d.mainWeaponRefinement(value.refinement));

    return composed.value;
  };

export const subWeapon =
  <
    T extends SubWeaponType,
    S extends {
      mainWeaponType: MainWeaponType;
    }
  >(value: {
    type: AvailableSubWeaponType<T, S>;
  }) =>
  (
    status: S
  ): S & {
    subWeaponType: AvailableSubWeaponType<T, S>;
  } => {
    const composed = compose(status)._(d.subWeaponType(value.type));

    return composed.value;
  };

const magicDeviceSupport2 = compose({})
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
  ._(
    mainWeapon({
      ATK: 564,
      stability: 80,
      type: "staff",
      refinement: 15,
    })
  )
  ._(
    subWeapon({
      // stability: 100,
      type: "one-handed-sword",
      // ATK: 400,
      // refinement: 15,
    })
  )
  // ._(d.mainWeaponType("bowgun"))
  ._(d.subWeaponType("one-handed-sword"))
  // ._(d.mainWeaponStats([stats(DEFAULT, { flatSTR: 21 })]))
  ._(calculate);

// ._(d.subWeaponType("ninjutsu-scroll"))
// ._(d.scrollCastTimeReduction(3))

console.log(magicDeviceSupport2.value);
