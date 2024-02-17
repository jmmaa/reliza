import * as pino from "@jmmaa/pino";
import * as d from "./api";

import {
  BareHand,
  CompatibleSubWeaponType,
  MainWeapon,
  MainWeaponType,
  None,
  SubWeapon,
  SubWeaponType,
} from "./types";

export const declare = <T>(mapping: T) => {
  return <S>(status: S): S & T => {
    return { ...status, ...mapping };
  };
};

// declarations

// export const mainWeaponSlot = <S>(status: S): S & { mainWeapon: {} } => {
//   return { ...status, mainWeapon: {} };
// };

// export const mainWeaponType =
//   (value: MainWeaponType) =>
//   <S extends { mainWeapon: {} }>(
//     status: S
//   ): S & { mainWeapon: { type: MainWeaponType } } => {
//     return {
//       ...status,
//       mainWeapon: { ...status.mainWeapon, type: value },
//     };
//   };

// export const mainWeaponATK =
//   (value: number) =>
//   <S extends { mainWeapon: {} }>(
//     status: S
//   ): S & { mainWeapon: { ATK: number } } => {
//     return { ...status, mainWeapon: { ...status.mainWeapon, ATK: value } };
//   };

// export const mainWeaponStability =
//   (value: number) =>
//   <S extends { mainWeapon: {} }>(
//     status: S
//   ): S & { mainWeapon: { stability: number } } => {
//     return {
//       ...status,
//       mainWeapon: { ...status.mainWeapon, stability: value },
//     };
//   };

// export const subWeaponSlot = <S>(status: S): S & { subWeapon: {} } => {
//   return { ...status, subWeapon: {} };
// };

// export const subWeaponType =
//   <S extends { mainWeapon: { type: MainWeaponType }; subWeapon: {} }>(
//     value: CompatibleSubWeaponType<S>
//   ) =>
//   (
//     status: S
//   ): S & { subWeapon: { type: CompatibleSubWeaponType<S> } } => ({
//     ...status,
//     subWeapon: { ...status.subWeapon, type: value },
//   });

// functors

export class Status<T> {
  mapping: T & {
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

    weaponType:
      | "one-handed-sword"
      | "two-handed-sword"
      | "dual-wield"
      | "bow"
      | "bowgun"
      | "staff"
      | "magic-device"
      | "halberd"
      | "katana"
      | "knuckle"
      | "bare-hand";
    baseWeaponATK: number;
    weaponRefinement: number;
    weaponStats?: {
      name: string;
      value: number;
      predicate?: (status: T) => boolean;
    }[];
    weaponCrystals?: {
      name: string;
      value: number;
      predicate?: (status: T) => boolean;
    }[][];
  };

  constructor(mapping: T) {
    this.mapping = {
      level: 1,
      STR: 1,
      DEX: 1,
      INT: 1,
      VIT: 1,
      AGI: 1,
      CRT: 0,
      MTL: 0,
      TEC: 0,
      LUK: 0,
      // mainWeapon: { type: "bare-hand", ATK: 0, stability: 0 },
      // subWeapon: { type: "none" },
      weaponType: "bare-hand",
      baseWeaponATK: 0,
      weaponStability: 0,
      weaponRefinement: 0,
      ...mapping,
    };
  }

  add<N>(f: (status: T) => N): Status<N> {
    return new Status(f(this.mapping));
  }

  // default() {
  //   const mapping = this.mapping;

  //   return new Status(mapping)
  //     .add(mainWeaponSlot)
  //     .add(mainWeaponType("bare-hand"))
  //     .add(mainWeaponATK(0))
  //     .add(mainWeaponStability(0))
  //     .add(subWeaponSlot)
  //     .add(subWeaponType("dagger"));
  // }

  calculate() {
    const mapping = this.mapping;

    return (
      new Status(mapping)
        .add(d.totalBaseSTR)
        .add(d.totalBaseINT)
        .add(d.totalBaseDEX)
        .add(d.totalBaseVIT)
        .add(d.totalBaseAGI)
        .add(d.totalPercentSTR)
        .add(d.totalPercentINT)
        .add(d.totalPercentDEX)
        .add(d.totalPercentVIT)
        .add(d.totalPercentAGI)
        .add(d.totalFlatSTR)
        .add(d.totalFlatINT)
        .add(d.totalFlatDEX)
        .add(d.totalFlatVIT)
        .add(d.totalFlatAGI)
        .add(d.totalSTR)
        .add(d.totalINT)
        .add(d.totalDEX)
        .add(d.totalVIT)
        .add(d.totalAGI)

        // personal
        .add(totalBaseMTL)
        .add(totalBaseCRT)
        .add(totalBaseLUK)
        .add(totalBaseTEC)

        // hp
        .add(d.totalBaseMaxHP)
        .add(d.totalBaseMaxMP)

        // cast speed
        .add(d.totalBaseCSPD)
        .add(d.totalPercentCSPD)
        .add(d.totalFlatCSPD)
        .add(d.totalCSPD)
        .add(d.totalCastTimeReduction)

        // attack speed
        .add(d.totalBaseASPD)
        .add(d.totalPercentASPD)
        .add(d.totalFlatASPD)
        .add(d.totalASPD)
        .add(d.totalActionTimeReduction)

        // crit rate
        .add(d.totalBaseCriticalRate)

        // crit damage
        .add(d.totalBaseCriticalDamage)

        // weapon attack
        .add(d.totalBaseWeaponATK)
        .add(d.totalPercentWeaponATK)
        .add(d.totalFlatWeaponATK)
        .add(d.totalWeaponRefinementBonusWeaponATK)
        .add(d.totalWeaponATK)
    );
  }
}

// consts
export const level = (value: number) => {
  return <S>(status: S): S & { level: number } => ({
    ...status,
    level: value,
  });
};

//  calcs

export const totalBaseCRT = <S extends { CRT: number }>(
  status: S
): S & { totalBaseCRT: number } => ({
  ...status,
  totalBaseCRT: status.CRT,
});

export const totalBaseLUK = <S extends { LUK: number }>(
  status: S
): S & { totalBaseLUK: number } => ({
  ...status,
  totalBaseLUK: status.LUK,
});

export const totalBaseMTL = <S extends { MTL: number }>(
  status: S
): S & { totalBaseMTL: number } => ({
  ...status,
  totalBaseMTL: status.MTL,
});

export const totalBaseTEC = <S extends { TEC: number }>(
  status: S
): S & { totalBaseTEC: number } => ({
  ...status,
  totalBaseTEC: status.TEC,
});

// export
// weapon declaration

export const baseWeaponAttack =
  (value: number) =>
  <S>(status: S): S & { baseWeaponAttack: number } => {
    return { ...status, baseWeaponAttack: value };
  };

export const weaponType =
  (
    value:
      | "one-handed-sword"
      | "two-handed-sword"
      | "dual-wield"
      | "bow"
      | "bowgun"
      | "staff"
      | "magic-device"
      | "halberd"
      | "katana"
      | "knuckle"
      | "bare-hand"
  ) =>
  <S>(
    status: S
  ): S & {
    weaponType:
      | "one-handed-sword"
      | "two-handed-sword"
      | "dual-wield"
      | "bow"
      | "bowgun"
      | "staff"
      | "magic-device"
      | "halberd"
      | "katana"
      | "knuckle"
      | "bare-hand";
  } => {
    return { ...status, weaponType: value };
  };

export const weaponStability =
  (value: number) =>
  <S>(status: S): S & { weaponStability: number } => {
    return { ...status, weaponStability: value };
  };

export const weaponRefinement =
  (value: number) =>
  <S>(status: S): S & { weaponRefinement: number } => {
    return { ...status, weaponRefinement: value };
  };

export const weaponStats = <
  S,
  T extends {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[]
>(
  arr: T
) => {
  return (status: S): S & { weaponStats: T } => {
    return { ...status, weaponStats: arr };
  };
};

export const weaponCrystals = <
  S,
  T extends {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[][]
>(
  arr: T
) => {
  return (status: S): S & { weaponCrystals: T } => {
    return { ...status, weaponCrystals: arr };
  };
};

// armor declaration

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

const magicDeviceSupport = new Status({
  level: 275,
  STR: 1,
  DEX: 315,
  INT: 1,
  VIT: 1,
  AGI: 220,
  CRT: 0,
  MTL: 0,
  TEC: 0,
  LUK: 0,

  // placeholders
  baseWeaponATK: 197,
})

  .add(weaponType("magic-device"))

  .add(weaponRefinement(15))
  .add(weaponStability(50))
  .add(
    weaponStats([
      d.flatCSPD(1550),
      d.percentCSPD(100 + 5 + 35 + 75 + 21 + 250 - 70),
      d.percentAGI(10),
      d.percentDEX(10 + 7 + 1),
    ])
  )

  .calculate();

const status = magicDeviceSupport.mapping;

console.log(status);

console.log(
  pino.magicDeviceBaseMagicAttack(275, status.totalWeaponATK, 465, 247)
);

// TODO
// - fix cast/action time reduction
// - finish other formulas
