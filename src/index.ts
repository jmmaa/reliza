import * as pino from "@jmmaa/pino";

type Prettify<T> = { [K in keyof T]: T[K] } & {}; // idk how does this work

export const declare = <T>(mapping: T) => {
  return <S>(status: S): Prettify<S & T> => {
    return { ...status, ...mapping };
  };
};

// declarations

// consts

export type Conditional<T> = T & { predicate: <S>(status: S) => boolean };

export type PercentOnly<T> = T & { type: "percent-only" };

export type Percent<T> = T & { type: "percent" };

export type Flat<T> = T & { type: "flat" };

// functors

export class Status<T> {
  mapping: T;

  constructor(mapping: T) {
    this.mapping = mapping;
  }

  apply<N>(f: (status: T) => N) {
    return new Status(f(this.mapping));
  }
}

export class Weapon<T> {
  weapon: T;

  constructor(weapon: T) {
    this.weapon = weapon;
  }

  type(value: string): Weapon<Prettify<T & { type: string }>> {
    return new Weapon({ ...this.weapon, type: value });
  }

  stability(value: number): Weapon<Prettify<T & { stability: number }>> {
    return new Weapon({ ...this.weapon, stability: value });
  }

  attack(value: number): Weapon<Prettify<T & { attack: number }>> {
    return new Weapon({ ...this.weapon, attack: value });
  }

  crystals<A extends (<S>(status: S) => S)[]>(
    array: A
  ): Weapon<Prettify<T & { crystals: A }>> {
    return new Weapon({ ...this.weapon, crystals: array });
  }

  stats<A extends (<S>(status: S) => S)[]>(
    array: A
  ): Weapon<Prettify<T & { stats: A }>> {
    return new Weapon({ ...this.weapon, stats: array });
  }
}

export class Armor<T> {
  armor: T;

  constructor(armor: T) {
    this.armor = armor;
  }

  type(value: string): Armor<Prettify<T & { type: string }>> {
    return new Armor({ ...this.armor, type: value });
  }

  defense(value: number): Armor<Prettify<T & { defense: number }>> {
    return new Armor({ ...this.armor, defense: value });
  }

  crystals<A extends (<S>(status: S) => S)[]>(
    array: A
  ): Armor<Prettify<T & { crystals: A }>> {
    return new Armor({ ...this.armor, crystals: array });
  }

  stats<A extends (<S>(status: S) => S)[]>(
    array: A
  ): Armor<Prettify<T & { stats: A }>> {
    return new Armor({ ...this.armor, stats: array });
  }
}

export class AdditionalGear<T> {
  additionalGear: T;

  constructor(additionalGear: T) {
    this.additionalGear = additionalGear;
  }

  defense(
    value: number
  ): AdditionalGear<Prettify<T & { defense: number }>> {
    return new AdditionalGear({ ...this.additionalGear, defense: value });
  }

  crystals<A extends (<S>(status: S) => S)[]>(
    array: A
  ): AdditionalGear<Prettify<T & { crystals: A }>> {
    return new AdditionalGear({ ...this.additionalGear, crystals: array });
  }

  stats<A extends (<S>(status: S) => S)[]>(
    array: A
  ): AdditionalGear<Prettify<T & { stats: A }>> {
    return new AdditionalGear({ ...this.additionalGear, stats: array });
  }
}

export class SpecialGear<T> {
  mapping: T;

  constructor(mapping: T) {
    this.mapping = mapping;
  }

  defense(value: number): SpecialGear<Prettify<T & { defense: number }>> {
    return new SpecialGear({ ...this.mapping, defense: value });
  }

  crystals<A extends (<S>(status: S) => S)[]>(
    array: A
  ): SpecialGear<Prettify<T & { crystals: A }>> {
    return new SpecialGear({ ...this.mapping, crystals: array });
  }

  stats<A extends (<S>(status: S) => S)[]>(
    array: A
  ): SpecialGear<Prettify<T & { stats: A }>> {
    return new SpecialGear({ ...this.mapping, stats: array });
  }

  build(): { specialGear: T } {
    return { specialGear: this.mapping };
  }
}

export const totalBaseCRT = (value: number) => {
  return <S>(status: S): Prettify<S & { totalBaseCRT: number }> => ({
    ...status,
    totalBaseCRT: value,
  });
};

export const totalBaseLUK = (value: number) => {
  return <S>(status: S): Prettify<S & { totalBaseLUK: number }> => ({
    ...status,
    totalBaseLUK: value,
  });
};

export const totalBaseMTL = (value: number) => {
  return <S>(status: S): Prettify<S & { totalBaseMTL: number }> => ({
    ...status,
    totalBaseMTL: value,
  });
};

export const totalBaseSTR = (value: number) => {
  return <S>(status: S): Prettify<S & { totalBaseSTR: number }> => ({
    ...status,
    totalBaseSTR: value,
  });
};

export const totalPercentSTR = (value: number) => {
  return <S>(status: S): Prettify<S & { totalPercentSTR: number }> => ({
    ...status,
    totalPercentSTR: value,
  });
};

export const totalBaseAGI = (value: number) => {
  return <S>(status: S): Prettify<S & { totalBaseAGI: number }> => ({
    ...status,
    totalBaseAGI: value,
  });
};
export const totalBaseDEX = (value: number) => {
  return <S>(status: S): Prettify<S & { totalBaseDEX: number }> => ({
    ...status,
    totalBaseDEX: value,
  });
};

export const totalBaseINT = (value: number) => {
  return <S>(status: S): Prettify<S & { totalBaseINT: number }> => ({
    ...status,
    totalBaseINT: value,
  });
};

export const totalBaseVIT = (value: number) => {
  return <S>(status: S): Prettify<S & { totalBaseVIT: number }> => ({
    ...status,
    totalBaseVIT: value,
  });
};

// export const flatDEX = (value: number) => {
//   return <S>(status: S): Prettify<S & { flatDEX: number}> => {

//     if (status.flatDEX)

//   };
// };

export const level = (value: number) => {
  return <S>(status: S): Prettify<S & { level: number }> => ({
    ...status,
    level: value,
  });
};

// calcs

export const totalBaseCastSpeed = <
  S extends { level: number; totalAGI: number; totalDEX: number }
>(
  status: S
): Prettify<S & { totalBaseCastSpeed: number }> => {
  const totalBaseCastSpeed = pino.calculateBaseCastSpeed(
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
  S extends { totalBaseAGI: number; totalBaseSTR: number }
>(
  status: S
): Prettify<S & { totalBaseCriticalDamage: number }> => {
  const totalBaseCriticalDamage = pino.calculateBaseCriticalDamage(
    status.totalBaseAGI,
    status.totalBaseSTR
  );

  return { ...status, totalBaseCriticalDamage };
};

export const totalBaseCriticalRate = <S extends { totalBaseCRT: number }>(
  status: S
): Prettify<S & { totalBaseCriticalRate: number }> => {
  const totalBaseCriticalRate = pino.calculateBaseCriticalRate(
    status.totalBaseCRT
  );

  return { ...status, totalBaseCriticalRate };
};

export const totalSTR = <
  S extends { totalBaseSTR: number; percentSTR: number; flatSTR: number }
>(
  status: S
) => {
  return {
    ...status,
    totalSTR: Math.floor(
      status.totalBaseSTR * (1 + status.percentSTR) + status.flatSTR
    ),
  };
};

export const totalDEX = <
  S extends { totalBaseDEX: number; percentDEX: number; flatDEX: number }
>(
  status: S
) => {
  return {
    ...status,
    totalDEX: Math.floor(
      status.totalBaseDEX * (1 + status.percentDEX) + status.flatDEX
    ),
  };
};

export const totalVIT = <
  S extends { totalBaseVIT: number; percentVIT: number; flatVIT: number }
>(
  status: S
) => {
  return {
    ...status,
    totalVIT: Math.floor(
      status.totalBaseVIT * (1 + status.percentVIT) + status.flatVIT
    ),
  };
};

export const totalINT = <
  S extends { totalBaseINT: number; percentINT: number; flatINT: number }
>(
  status: S
) => {
  return {
    ...status,
    totalINT: Math.floor(
      status.totalBaseINT * (1 + status.percentINT) + status.flatINT
    ),
  };
};

export const totalAGI = <
  S extends { percentAGI: number; flatAGI: number; totalBaseAGI: number }
>(
  status: S
) => {
  return {
    ...status,
    totalAGI: Math.floor(
      status.totalBaseAGI * (1 + status.percentAGI) + status.flatAGI
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

// weapon declaration

export const weaponSlot = <S>(status: S) => ({ ...status, weapon: {} });

export const weaponAttack =
  (value: number) =>
  <S extends { weapon: {} }>(
    status: S
  ): S & { weapon: { attack: number } } => {
    return { ...status, weapon: { ...status.weapon, attack: value } };
  };

export const weaponStability =
  (value: number) =>
  <S extends { weapon: {} }>(
    status: S
  ): S & { weapon: { stability: number } } => {
    return { ...status, weapon: { ...status.weapon, stability: value } };
  };

// export const weaponStats =
//   (arr: (PercentOnlyStat | PercentStat | FlatStat)[]) =>
//   <S extends { weapon: {} }>(
//     status: S
//   ): S & {
//     weapon: { stats: (PercentOnlyStat | PercentStat | FlatStat)[] };
//   } => {
//     return { ...status, weapon: { ...status.weapon, stats: arr } };
//   };

// export const weaponCrystals =
//   (arr: (PercentOnlyStat | PercentStat | FlatStat)[]) =>
//   <S extends { weapon: {} }>(
//     status: S
//   ): S & {
//     weapon: { crystals: (PercentOnlyStat | PercentStat | FlatStat)[] };
//   } => {
//     return { ...status, weapon: { ...status.weapon, crystals: arr } };
//   };

// scratch

// try implementing attack tomorrow
const sample2 = new Status({})
  // .apply(
  //   declare(
  //     new Armor({}).type("light").defense(245).stats([]).crystals([])
  //   )
  // )
  // .apply(
  //   declare(
  //     new Weapon({})
  //       .attack(400)
  //       .stability(23)
  //       .type("one-handed-sword")
  //       .stats([
  //         (status) => ({ ...status, flatDEX: 21 }),
  //         (status) => ({ ...status, percentDEX: 21 }),
  //       ])
  //       .crystals([])
  //   )
  // )
  // .apply(
  //   declare(new AdditionalGear({}).defense(200).stats([]).crystals([]))
  // )
  .apply(weaponSlot)
  .apply(weaponAttack(462))
  .apply(weaponStability(100))
  // .apply(weaponStats([{ type: "flat", id: "DEX", value: 21 }]))

  .apply(level(275))
  .apply(totalBaseSTR(1))
  .apply(totalBaseDEX(315))
  .apply(totalBaseINT(1))
  .apply(totalBaseVIT(178))
  .apply(totalBaseAGI(220))
  .apply(totalBaseCRT(0))
  .apply(declare({ flatAGI: 0 }))
  .apply(declare({ percentAGI: 0 }))
  .apply((status) => ({ ...status, flatDEX: 0 }))
  .apply((status) => ({ ...status, percentDEX: 0.1 + 0.07 + 0.01 }))
  .apply(totalAGI)
  .apply(totalDEX)
  .apply(totalBaseCastSpeed)
  .apply((status) => ({
    ...status,
    percentCastSpeed: 1 + 0.05 + 0.35 + 0.75 + -0.7 + 0.21 + 2.5,
  }))
  .apply((status) => ({
    ...status,
    flatCastSpeed: 1550,
  }))
  .apply(totalBaseCriticalRate)
  .apply(totalBaseCriticalDamage)
  .apply(totalCastSpeed);

console.log(sample2.mapping);
