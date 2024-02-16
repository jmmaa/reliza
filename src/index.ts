import * as pino from "@jmmaa/pino";
import * as d from "./api";

export const declare = <T>(mapping: T) => {
  return <S>(status: S): S & T => {
    return { ...status, ...mapping };
  };
};

// declarations

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
      STR: 0,
      DEX: 0,
      INT: 0,
      VIT: 0,
      AGI: 0,
      CRT: 0,
      MTL: 0,
      TEC: 0,
      LUK: 0,
      weaponType: "bare-hand",
      baseWeaponATK: 0,
      weaponRefinement: 0,
      ...mapping,
    };
  }

  add<N>(f: (status: T) => N): Status<N> {
    return new Status(f(this.mapping));
  }

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

  // calculate<
  //   N,
  //   T extends {
  //     level: number;
  //     STR: number;
  //     DEX: number;
  //     INT: number;
  //     VIT: number;
  //     AGI: number;
  //     CRT: number;
  //     MTL: number;
  //     TEC: number;
  //     LUK: number;
  //     weaponType:
  //       | "one-handed-sword"
  //       | "two-handed-sword"
  //       | "dual-wield"
  //       | "bow"
  //       | "bowgun"
  //       | "staff"
  //       | "magic-device"
  //       | "halberd"
  //       | "katana"
  //       | "knuckle"
  //       | "bare-hand";
  //     baseWeaponATK: number;
  //     weaponRefinement: number;
  //     weaponStats?: {
  //       name: string;
  //       value: number;
  //       predicate?: (status: T) => boolean;
  //     }[];
  //     weaponCrystals?: {
  //       name: string;
  //       value: number;
  //       predicate?: (status: T) => boolean;
  //     }[][];
  //   }
  // >(): Status<T & N> {
  //   return (
  //     this.add(d.totalBaseSTR)
  //       .add(d.totalBaseINT)
  //       .add(d.totalBaseDEX)
  //       .add(d.totalBaseVIT)
  //       .add(d.totalBaseAGI)
  //       .add(d.totalPercentSTR)
  //       .add(d.totalPercentINT)
  //       .add(d.totalPercentDEX)
  //       .add(d.totalPercentVIT)
  //       .add(d.totalPercentAGI)
  //       .add(d.totalFlatSTR)
  //       .add(d.totalFlatINT)
  //       .add(d.totalFlatDEX)
  //       .add(d.totalFlatVIT)
  //       .add(d.totalFlatAGI)
  //       .add(d.totalSTR)
  //       .add(d.totalINT)
  //       .add(d.totalDEX)
  //       .add(d.totalVIT)
  //       .add(d.totalAGI)

  //       // personal
  //       .add(totalBaseMTL)
  //       .add(totalBaseCRT)
  //       .add(totalBaseLUK)
  //       .add(totalBaseTEC)

  //       // hp
  //       .add(d.totalBaseMaxHP)
  //       .add(d.totalBaseMaxMP)

  //       // cast speed
  //       .add(d.totalBaseCSPD)
  //       .add(d.totalPercentCSPD)
  //       .add(d.totalFlatCSPD)
  //       .add(d.totalCSPD)
  //       .add(d.totalCastTimeReduction)

  //       // attack speed
  //       .add(d.totalBaseASPD)
  //       .add(d.totalPercentASPD)
  //       .add(d.totalFlatASPD)
  //       .add(d.totalASPD)
  //       .add(d.totalActionTimeReduction)

  //       // crit rate
  //       .add(d.totalBaseCriticalRate)

  //       // crit damage
  //       .add(d.totalBaseCriticalDamage)

  //       // weapon attack
  //       .add(d.totalBaseWeaponATK)
  //       .add(d.totalPercentWeaponATK)
  //       .add(d.totalFlatWeaponATK)
  //       .add(d.totalWeaponRefinementBonusWeaponATK)
  //       .add(d.totalWeaponATK)
  //   );
  // }
}

// const compose =
//   <T extends []>(arr: T) =>
//   <T>(value: T) =>
//     arr.reduce((p, c) => c(p), value);

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

type StatContainer<S> = {
  weaponStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];
  armorStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];
  additionalGearStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];
  specialGearStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];
};

export const accumulateStat = <S extends StatContainer<S>>(
  status: S,
  key: string
) => {
  const weaponStats = status.weaponStats;

  const armorStats = status.armorStats;

  const additionalGearStats = status.additionalGearStats;

  const specialGearStats = status.specialGearStats;

  const weaponTotal =
    weaponStats !== undefined
      ? weaponStats.reduce((total, curr) => {
          if (curr.name === key) {
            if (curr.predicate !== undefined) {
              return curr.predicate(status) ? total + curr.value : total;
            } else {
              return total;
            }
          } else {
            return total;
          }
        }, 0)
      : 0;

  const armorTotal =
    armorStats !== undefined
      ? armorStats.reduce((total, curr) => {
          if (curr.name === key) {
            if (curr.predicate !== undefined) {
              return curr.predicate(status) ? total + curr.value : total;
            } else {
              return total;
            }
          } else {
            return total;
          }
        }, 0)
      : 0;

  const additionalGearTotal =
    additionalGearStats !== undefined
      ? additionalGearStats.reduce((total, curr) => {
          if (curr.name === key) {
            if (curr.predicate !== undefined) {
              return curr.predicate(status) ? total + curr.value : total;
            } else {
              return total;
            }
          } else {
            return total;
          }
        }, 0)
      : 0;

  const specialGearTotal =
    specialGearStats !== undefined
      ? specialGearStats.reduce((total, curr) => {
          if (curr.name === key) {
            if (curr.predicate !== undefined) {
              return curr.predicate(status) ? total + curr.value : total;
            } else {
              return total;
            }
          } else {
            return total;
          }
        }, 0)
      : 0;

  return weaponTotal + armorTotal + additionalGearTotal + specialGearTotal;
};

// export const totalBaseSTR = <S extends { STR: number }>(
//   status: S
// ): S & { totalBaseSTR: number } => ({
//   ...status,
//   totalBaseSTR: status.STR,
// });

// export const totalFlatSTR = <S extends DeclaredStatContainer<S>>(
//   status: S
// ): S & { totalFlatSTR: number } => {
//   return {
//     ...status,
//     totalFlatSTR: accumulateStat(status, "flatSTR"),
//   };
// };

// export const totalPercentSTR = <S extends DeclaredStatContainer<S>>(
//   status: S
// ): S & { totalPercentSTR: number } => {
//   return {
//     ...status,
//     totalPercentSTR: accumulateStat(status, "percentSTR"),
//   };
// };

export const totalBaseAGI = <S extends { AGI: number }>(
  status: S
): S & { totalBaseAGI: number } => ({
  ...status,
  totalBaseAGI: status.AGI,
});

export const totalPercentAGI = <S extends StatContainer<S>>(
  status: S
): S & { totalPercentAGI: number } => {
  return {
    ...status,
    totalPercentAGI: accumulateStat(status, "percentAGI"),
  };
};

export const totalFlatAGI = <S extends StatContainer<S>>(
  status: S
): S & { totalFlatAGI: number } => {
  return { ...status, totalFlatAGI: accumulateStat(status, "flatAGI") };
};

// export const totalBaseDEX = <S extends { DEX: number }>(
//   status: S
// ): S & { totalBaseDEX: number } => ({
//   ...status,
//   totalBaseDEX: status.DEX,
// });

// export const totalPercentDEX = <S extends StatContainer<S>>(
//   status: S
// ): S & { totalPercentDEX: number } => {
//   return {
//     ...status,
//     totalPercentDEX: accumulateStat(status, "percentDEX"),
//   };
// };

// export const totalFlatDEX = <S extends StatContainer<S>>(
//   status: S
// ): S & { totalFlatDEX: number } => {
//   return { ...status, totalFlatDEX: accumulateStat(status, "flatDEX") };
// };

export const totalBaseINT = <S extends { INT: number }>(
  status: S
): S & { totalBaseINT: number } => ({
  ...status,
  totalBaseINT: status.INT,
});

export const totalPercentINT = <S extends StatContainer<S>>(
  status: S
): S & { totalPercentINT: number } => {
  return {
    ...status,
    totalPercentINT: accumulateStat(status, "percentINT"),
  };
};

export const totalFlatINT = <S extends StatContainer<S>>(
  status: S
): S & { totalFlatINT: number } => {
  return { ...status, totalFlatINT: accumulateStat(status, "flatINT") };
};

export const totalBaseVIT = <S extends { VIT: number }>(
  status: S
): S & { totalBaseVIT: number } => ({
  ...status,
  totalBaseVIT: status.VIT,
});

export const totalPercentVIT = <S extends StatContainer<S>>(
  status: S
): S & { totalPercentVIT: number } => {
  return {
    ...status,
    totalPercentVIT: accumulateStat(status, "percentVIT"),
  };
};

export const totalFlatVIT = <S extends StatContainer<S>>(
  status: S
): S & { totalFlatVIT: number } => {
  return { ...status, totalFlatVIT: accumulateStat(status, "flatVIT") };
};

export const totalBaseCastSpeed = <
  S extends { level: number; totalAGI: number; totalDEX: number }
>(
  status: S
): S & { totalBaseCastSpeed: number } => {
  const totalBaseCastSpeed = pino.baseCastSpeed(
    status.level,
    status.totalAGI,
    status.totalDEX
  );
  return {
    ...status,
    totalBaseCastSpeed,
  };
};

export const totalBaseCriticalDamage = <
  S extends { totalAGI: number; totalSTR: number }
>(
  status: S
): S & { totalBaseCriticalDamage: number } => {
  const totalBaseCriticalDamage = pino.baseCriticalDamage(
    status.totalAGI,
    status.totalSTR
  );

  return { ...status, totalBaseCriticalDamage };
};

export const totalBaseCriticalRate = <S extends { totalBaseCRT: number }>(
  status: S
): S & { totalBaseCriticalRate: number } => {
  const totalBaseCriticalRate = pino.baseCriticalRate(status.totalBaseCRT);

  return { ...status, totalBaseCriticalRate };
};

// export const totalSTR = <
//   S extends {
//     totalBaseSTR: number;
//     totalPercentSTR: number;
//     totalFlatSTR: number;
//   }
// >(
//   status: S
// ): S & { totalSTR: number } => {
//   return {
//     ...status,
//     totalSTR: Math.floor(
//       status.totalBaseSTR * (1 + status.totalPercentSTR) +
//         status.totalFlatSTR
//     ),
//   };
// };

// export const totalDEX = <
//   S extends {
//     totalBaseDEX: number;
//     totalPercentDEX: number;
//     totalFlatDEX: number;
//   }
// >(
//   status: S
// ): S & { totalDEX: number } => {
//   return {
//     ...status,
//     totalDEX: Math.floor(
//       status.totalBaseDEX * (1 + status.totalPercentDEX) +
//         status.totalFlatDEX
//     ),
//   };
// };

// export const totalVIT = <
//   S extends {
//     totalBaseVIT: number;
//     totalPercentVIT: number;
//     totalFlatVIT: number;
//   }
// >(
//   status: S
// ): S & { totalVIT: number } => {
//   return {
//     ...status,
//     totalVIT: Math.floor(
//       status.totalBaseVIT * (1 + status.totalPercentVIT) +
//         status.totalFlatVIT
//     ),
//   };
// };

// export const totalINT = <
//   S extends {
//     totalBaseINT: number;
//     totalPercentINT: number;
//     totalFlatINT: number;
//   }
// >(
//   status: S
// ): S & { totalINT: number } => {
//   return {
//     ...status,
//     totalINT: Math.floor(
//       status.totalBaseINT * (1 + status.totalPercentINT) +
//         status.totalFlatINT
//     ),
//   };
// };

// export const totalAGI = <
//   S extends {
//     totalBaseAGI: number;
//     totalPercentAGI: number;
//     totalFlatAGI: number;
//   }
// >(
//   status: S
// ): S & { totalAGI: number } => {
//   return {
//     ...status,
//     totalAGI: Math.floor(
//       status.totalBaseAGI * (1 + status.totalPercentAGI) +
//         status.totalFlatAGI
//     ),
//   };
// };

export const totalCastSpeed = <
  S extends {
    percentCastSpeed: number;
    flatCastSpeed: number;
    totalBaseCastSpeed: number;
  }
>(
  status: S
) => {
  return {
    ...status,
    totalCastSpeed: Math.floor(
      status.totalBaseCastSpeed * (1 + status.percentCastSpeed) +
        status.flatCastSpeed
    ),
  };
};

export const totalBaseMaxHealthPoints = <
  S extends { totalVIT: number; level: number }
>(
  status: S
): S & { totalMaxHealthPoints: number } => {
  return {
    ...status,
    totalMaxHealthPoints: pino.baseMaxHP(status.level, status.totalVIT),
  };
};

export const totalBaseMaxManaPoints = <
  S extends { totalINT: number; totalBaseTEC: number; level: number }
>(
  status: S
): S & { totalMaxManaPoints: number } => {
  return {
    ...status,
    totalMaxManaPoints: pino.baseMaxMP(
      status.level,
      status.totalINT,
      status.totalBaseTEC
    ),
  };
};

export const weaponAttackRefinementBonus = <
  S extends { weaponRefinement: number; baseWeaponAttack: number }
>(
  status: S
): S & { weaponRefinementBonusWeaponAttack: number } => {
  return {
    ...status,
    weaponRefinementBonusWeaponAttack:
      pino.weaponRefinementBonusWeaponAttack(
        status.weaponRefinement,
        status.baseWeaponAttack
      ),
  };
};

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
