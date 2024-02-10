import * as pino from "@jmmaa/pino";
import * as d from "./declare";

type Prettify<T> = { [K in keyof T]: Prettify<T[K]> } & {}; // idk how does this work

export const declare = <T>(mapping: T) => {
  return <S>(status: S): Prettify<S & T> => {
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

// export const weaponSlot = <S>(
//   status: S
// ): Prettify<S & { weapon: {} }> => ({
//   ...status,
//   weapon: {},
// });

export const weaponSlot = declare({ weapon: {} });

export const weaponAttack =
  (value: number) =>
  <S extends { weapon: {} }>(
    status: S
  ): Prettify<S & { weapon: { attack: number } }> => {
    return { ...status, weapon: { ...status.weapon, attack: value } };
  };

export const weaponStability =
  (value: number) =>
  <S extends { weapon: {} }>(
    status: S
  ): Prettify<S & { weapon: { stability: number } }> => {
    return { ...status, weapon: { ...status.weapon, stability: value } };
  };

export const weaponStats =
  <A extends { name: string; value: number }[]>(arr: A) =>
  <S extends { weapon: {} }>(
    status: S
  ): Prettify<
    S & {
      weapon: { stats: A };
    }
  > => {
    return { ...status, weapon: { ...status.weapon, stats: arr } };
  };

export const weaponCrystals =
  (arr: { name: string; value: number }[][]) =>
  <S extends { weapon: {} }>(
    status: S
  ): Prettify<
    S & {
      weapon: { crystals: { name: string; value: number }[][] };
    }
  > => {
    return { ...status, weapon: { ...status.weapon, crystals: arr } };
  };

// scratch

// try implementing attack tomorrow

const sample2 = new Status({})
  // declarations
  .add(declare({ armor: {} }))
  .add(level(275))
  .add(weaponSlot)
  .add(weaponAttack(462))
  .add(weaponStability(100))
  .add(weaponStats([d.flatAGI(24), d.flatASPD(1000)]))
  .add(
    weaponCrystals([
      [
        d.percentCriticalRate(0.4),
        d.percentCSPD(-0.7),
        d.flatASPD(1100),
        d.motionSpeed(5),
      ],
      [
        d.shortRangeDamage(6),
        d.longRangeDamage(6),
        d.stability(6),
        d.percentVIT(6),
        d.percentSTR(6),
        // d.conditional<>(
        //   d.shortRangeDamage(5),
        //   (status) => status.armor.type == "light"
        // ),
      ],
    ])
  )
  // calculations
  .add(totalBaseSTR(1))
  .add(totalBaseDEX(315))
  .add(totalBaseINT(1))
  .add(totalBaseVIT(178))
  .add(totalBaseAGI(220))
  .add(totalBaseCRT(0))
  .add(declare({ flatAGI: 0 }))
  .add(declare({ percentAGI: 0.1 }))
  .add((status) => ({ ...status, flatDEX: 0 }))
  .add((status) => ({ ...status, percentDEX: 0.1 + 0.07 + 0.01 }))
  .add(totalAGI)
  .add(totalDEX)
  .add(totalBaseCastSpeed)
  .add((status) => ({
    ...status,
    percentCastSpeed: 1 + 0.05 + 0.35 + 0.75 + -0.7 + 0.21 + 2.5,
  }))
  .add((status) => ({
    ...status,
    flatCastSpeed: 1550,
  }))
  .add(totalBaseCriticalRate)
  .add(totalBaseCriticalDamage)
  .add(totalCastSpeed);

console.log(sample2.mapping);
