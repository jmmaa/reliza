import * as pino from "@jmmaa/pino";

type Prettify<T> = { [K in keyof T]: T[K] } & {}; // idk how does this work

export const declare = <T>(mapping: T) => {
  return <S>(status: S): Prettify<S & T> => {
    return { ...status, ...mapping };
  };
};

// functors

export class Status<T> {
  status: T;

  constructor(status: T) {
    this.status = status;
  }

  apply<N>(f: (status: T) => N) {
    return new Status(f(this.status));
  }
}

// enum WeaponStability {
//   ON,
//   OFF,
// }

// enum WeaponAttack {
//   ON,
//   OFF,
// }

// enum WeaponType {
//   ON,
//   OFF,
// }

type State = 0 | 1;

export class Weapon<
  S,
  WT extends State,
  WS extends State,
  WA extends State
> {
  status: S;

  constructor(status: S) {
    this.status = status;
  }

  type(
    value: string
  ): Weapon<Prettify<S & { weaponType: string }>, 1, WS, WA> {
    return new Weapon({ ...this.status, weaponType: value });
  }

  stability(
    value: number
  ): Weapon<Prettify<S & { weaponStability: number }>, WT, 1, WA> {
    return new Weapon({ ...this.status, weaponStability: value });
  }

  attack(
    value: number
  ): Weapon<Prettify<S & { weaponAttack: number }>, WT, WS, 1> {
    return new Weapon({ ...this.status, weaponAttack: value });
  }
}

export const baseCRT = (value: number) => {
  return <S>(status: S): Prettify<S & { baseCRT: number }> => ({
    ...status,
    baseCRT: value,
  });
};

export const baseLUK = (value: number) => {
  return <S>(status: S): Prettify<S & { baseLUK: number }> => ({
    ...status,
    baseLUK: value,
  });
};

export const baseMTL = (value: number) => {
  return <S>(status: S): Prettify<S & { baseMTL: number }> => ({
    ...status,
    baseMTL: value,
  });
};

export const baseSTR = (value: number) => {
  return <S>(status: S): Prettify<S & { baseSTR: number }> => ({
    ...status,
    baseSTR: value,
  });
};

export const baseAGI = (value: number) => {
  return <S>(status: S): Prettify<S & { baseAGI: number }> => ({
    ...status,
    baseAGI: value,
  });
};
export const baseDEX = (value: number) => {
  return <S>(status: S): Prettify<S & { baseDEX: number }> => ({
    ...status,
    baseDEX: value,
  });
};

export const baseINT = (value: number) => {
  return <S>(status: S): Prettify<S & { baseINT: number }> => ({
    ...status,
    baseINT: value,
  });
};

export const baseVIT = (value: number) => {
  return <S>(status: S): Prettify<S & { baseVIT: number }> => ({
    ...status,
    baseVIT: value,
  });
};

export const level = (value: number) => {
  return <S>(status: S): Prettify<S & { level: number }> => ({
    ...status,
    level: value,
  });
};

// calcs

export const baseCastSpeed = <
  S extends { level: number; totalAGI: number; totalDEX: number }
>(
  status: S
): Prettify<S & { baseCastSpeed: number }> => {
  const baseCastSpeed = pino.calculateBaseCastSpeed(
    status.level,
    status.totalAGI,
    status.totalDEX
  );
  return {
    ...status,
    baseCastSpeed,
  };
};

export const baseCriticalDamage = <
  S extends { baseAGI: number; baseSTR: number }
>(
  status: S
): Prettify<S & { baseCriticalDamage: number }> => {
  const baseCriticalDamage = pino.calculateBaseCriticalDamage(
    status.baseAGI,
    status.baseSTR
  );

  return { ...status, baseCriticalDamage };
};

export const baseCriticalRate = <S extends { baseCRT: number }>(
  status: S
): Prettify<S & { baseCriticalRate: number }> => {
  const baseCriticalRate = pino.calculateBaseCriticalRate(status.baseCRT);

  return { ...status, baseCriticalRate };
};

export const totalSTR = <
  S extends { baseSTR: number; percentSTR: number; flatSTR: number }
>(
  status: S
) => {
  return {
    ...status,
    totalSTR: Math.floor(
      status.baseSTR * (1 + status.percentSTR) + status.flatSTR
    ),
  };
};

export const totalDEX = <
  S extends { baseDEX: number; percentDEX: number; flatDEX: number }
>(
  status: S
) => {
  return {
    ...status,
    totalDEX: Math.floor(
      status.baseDEX * (1 + status.percentDEX) + status.flatDEX
    ),
  };
};

export const totalVIT = <
  S extends { baseVIT: number; percentVIT: number; flatVIT: number }
>(
  status: S
) => {
  return {
    ...status,
    totalVIT: Math.floor(
      status.baseVIT * (1 + status.percentVIT) + status.flatVIT
    ),
  };
};

export const totalINT = <
  S extends { baseINT: number; percentINT: number; flatINT: number }
>(
  status: S
) => {
  return {
    ...status,
    totalINT: Math.floor(
      status.baseINT * (1 + status.percentINT) + status.flatINT
    ),
  };
};

export const totalAGI = <
  S extends { percentAGI: number; flatAGI: number; baseAGI: number }
>(
  status: S
) => {
  return {
    ...status,
    totalAGI: Math.floor(
      status.baseAGI * (1 + status.percentAGI) + status.flatAGI
    ),
  };
};

export const totalCastSpeed = <
  S extends {
    percentCastSpeed: number;
    flatCastSpeed: number;
    baseCastSpeed: number;
  }
>(
  status: S
) => {
  return {
    ...status,
    totalCastSpeed: Math.floor(
      status.baseCastSpeed * (1 + status.percentCastSpeed) +
        status.flatCastSpeed
    ),
  };
};

//
// scratch
// helper

export const createStatusBuilder = <C>(status: C) => {
  return {
    status: status,
    apply: <N>(f: (status: C) => N) => createStatusBuilder(f(status)),
  };
};

const sample = createStatusBuilder({
  level: 275,
  weaponType: "gg",
  flatAGI: 0,
  flatDEX: 0,
  percentDEX: 0.1 + 0.07 + 0.01,
  percentAGI: 0.1,
  percentCastSpeed: 1 + 0.05 + 0.35 + 0.75 + -0.7 + 0.21 + 2.5,
  flatCastSpeed: 1550,
})
  .apply(baseSTR(1))
  .apply(baseDEX(315))
  .apply(baseINT(1))
  .apply(baseVIT(178))
  .apply(baseAGI(220))
  .apply(baseCRT(0))
  .apply(totalAGI)
  .apply(totalDEX)
  .apply(baseCastSpeed)
  .apply(baseCriticalRate)
  .apply(baseCriticalDamage)
  .apply(totalCastSpeed);

const sample2 = new Status({
  level: 275,
  weaponType: "gg",
  flatAGI: 0,
  flatDEX: 0,
  percentDEX: 0.1 + 0.07 + 0.01,
  percentAGI: 0.1,
  percentCastSpeed: 1 + 0.05 + 0.35 + 0.75 + -0.7 + 0.21 + 2.5,
  flatCastSpeed: 1550,
})
  .apply(baseSTR(1))
  .apply(baseDEX(315))
  .apply(baseINT(1))
  .apply(baseVIT(178))
  .apply(baseAGI(220))
  .apply(baseCRT(0))
  .apply(totalAGI)
  .apply(totalDEX)
  .apply(baseCastSpeed)
  .apply(baseCriticalRate)
  .apply(baseCriticalDamage)
  .apply(totalCastSpeed);

console.log(sample2.status);

const weapon = new Weapon({})
  .attack(400)
  .stability(23)
  .type("one-handed-sword").status;
// try implementing attack tomorrow
