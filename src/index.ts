import * as pino from "@jmmaa/pino";
import * as d from "./declare";

export const declare = <T>(mapping: T) => {
  return <S>(status: S): S & T => {
    return { ...status, ...mapping };
  };
};

// declarations

// functors

export class Status<T> {
  mapping: T;

  constructor(mapping: T) {
    this.mapping = mapping;
  }

  add<N>(f: (status: T) => N) {
    return new Status(f(this.mapping));
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

export const totalBaseSTR = <S extends { STR: number }>(
  status: S
): S & { totalBaseSTR: number } => ({
  ...status,
  totalBaseSTR: status.STR,
});

export const totalFlatSTR = <S extends StatContainer<S>>(
  status: S
): S & { totalFlatSTR: number } => {
  return {
    ...status,
    totalFlatSTR: accumulateStat(status, "flatSTR"),
  };
};

export const totalPercentSTR = <S extends StatContainer<S>>(
  status: S
): S & { totalPercentSTR: number } => {
  return {
    ...status,
    totalPercentSTR: accumulateStat(status, "percentSTR"),
  };
};

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

export const totalBaseDEX = <S extends { DEX: number }>(
  status: S
): S & { totalBaseDEX: number } => ({
  ...status,
  totalBaseDEX: status.DEX,
});

export const totalPercentDEX = <S extends StatContainer<S>>(
  status: S
): S & { totalPercentDEX: number } => {
  return {
    ...status,
    totalPercentDEX: accumulateStat(status, "percentDEX"),
  };
};

export const totalFlatDEX = <S extends StatContainer<S>>(
  status: S
): S & { totalFlatDEX: number } => {
  return { ...status, totalFlatDEX: accumulateStat(status, "flatDEX") };
};

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

export const totalSTR = <
  S extends {
    totalBaseSTR: number;
    totalPercentSTR: number;
    totalFlatSTR: number;
  }
>(
  status: S
): S & { totalSTR: number } => {
  return {
    ...status,
    totalSTR: Math.floor(
      status.totalBaseSTR * (1 + status.totalPercentSTR) +
        status.totalFlatSTR
    ),
  };
};

export const totalDEX = <
  S extends {
    totalBaseDEX: number;
    totalPercentDEX: number;
    totalFlatDEX: number;
  }
>(
  status: S
): S & { totalDEX: number } => {
  return {
    ...status,
    totalDEX: Math.floor(
      status.totalBaseDEX * (1 + status.totalPercentDEX) +
        status.totalFlatDEX
    ),
  };
};

export const totalVIT = <
  S extends {
    totalBaseVIT: number;
    totalPercentVIT: number;
    totalFlatVIT: number;
  }
>(
  status: S
): S & { totalVIT: number } => {
  return {
    ...status,
    totalVIT: Math.floor(
      status.totalBaseVIT * (1 + status.totalPercentVIT) +
        status.totalFlatVIT
    ),
  };
};

export const totalINT = <
  S extends {
    totalBaseINT: number;
    totalPercentINT: number;
    totalFlatINT: number;
  }
>(
  status: S
): S & { totalINT: number } => {
  return {
    ...status,
    totalINT: Math.floor(
      status.totalBaseINT * (1 + status.totalPercentINT) +
        status.totalFlatINT
    ),
  };
};

export const totalAGI = <
  S extends {
    totalBaseAGI: number;
    totalPercentAGI: number;
    totalFlatAGI: number;
  }
>(
  status: S
): S & { totalAGI: number } => {
  return {
    ...status,
    totalAGI: Math.floor(
      status.totalBaseAGI * (1 + status.totalPercentAGI) +
        status.totalFlatAGI
    ),
  };
};

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
  S extends { weaponRefinement: number; weaponAttack: number }
>(
  status: S
): S & { weaponAttackRefinementBonus: number } => {
  return {
    ...status,
    weaponAttackRefinementBonus: pino.refinementBonusWeaponAttack(
      status.weaponRefinement,
      status.weaponAttack
    ),
  };
};

// export
// weapon declaration

export const weaponAttack =
  (value: number) =>
  <S>(status: S): S & { weaponAttack: number } => {
    return { ...status, weaponAttack: value };
  };

export const weaponType =
  (value: string) =>
  <S>(status: S): S & { weaponType: string } => {
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

const sample2 = new Status({})
  // declarations
  .add(
    declare({
      level: 275,
      STR: 247,
      DEX: 1,
      INT: 465,
      VIT: 1,
      AGI: 1,
      CRT: 0,
      MTL: 0,
      TEC: 0,
      LUK: 0,
      // totalFlatAGI: 0,
      percentAGI: 0.1,
      // totalFlatDEX: 0,
      percentDEX: 0.1 + 0.07 + 0.01,
      flatCastSpeed: 1550,
      percentCastSpeed: 1 + 0.05 + 0.35 + 0.75 + -0.7 + 0.21 + 2.5,
    })
  )
  .add(weaponType("magic-device"))
  .add(weaponAttack(400))
  .add(weaponRefinement(15))
  .add(weaponStability(50))
  .add(
    weaponStats([
      d.percentMATK(10),
      d.percentINT(10),
      d.percentCriticalDamage(10),
      d.flatCriticalDamage(22),
      d.flatCriticalRate(27),
    ])
  )
  .add(
    weaponCrystals([
      [d.conditional(d.ATKDOWNAGI(250), (status) => status.level == 274)],
    ])
  )
  // calculations

  // basic
  .add(totalBaseSTR)
  .add(totalBaseINT)
  .add(totalBaseDEX)
  .add(totalBaseVIT)
  .add(totalBaseAGI)
  .add(totalPercentSTR)
  .add(totalPercentINT)
  .add(totalPercentDEX)
  .add(totalPercentVIT)
  .add(totalPercentAGI)
  .add(totalFlatSTR)
  .add(totalFlatINT)
  .add(totalFlatDEX)
  .add(totalFlatVIT)
  .add(totalFlatAGI)
  .add(totalSTR)
  .add(totalINT)
  .add(totalDEX)
  .add(totalVIT)
  .add(totalAGI)
  // personal
  .add(totalBaseMTL)
  .add(totalBaseCRT)
  .add(totalBaseLUK)
  .add(totalBaseTEC)

  // hp
  .add(totalBaseMaxHealthPoints)
  .add(totalBaseMaxManaPoints)

  // cast speed
  .add(totalBaseCastSpeed)
  .add(totalCastSpeed)

  // crit rate
  .add(totalBaseCriticalRate)

  // crit damage
  .add(totalBaseCriticalDamage)

  // weapon attack
  .add(weaponAttackRefinementBonus);

const mapping = sample2.mapping;

console.log(mapping);
