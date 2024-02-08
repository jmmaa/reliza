import * as pino from "@jmmaa/pino";

type Prettify<T> = { [K in keyof T]: T[K] } & {}; // idk how does this work

export const declare = <T>(mapping: T) => {
  return <S>(status: S): Prettify<S & T> => {
    return { ...status, ...mapping };
  };
};

export const CRT = (value: number) => {
  return <S>(status: S): Prettify<S & { CRT: number }> => ({
    ...status,
    CRT: value,
  });
};

export const STR = (value: number) => {
  return <S>(status: S): Prettify<S & { STR: number }> => ({
    ...status,
    STR: value,
  });
};

export const AGI = (value: number) => {
  return <S>(status: S): Prettify<S & { AGI: number }> => ({
    ...status,
    AGI: value,
  });
};
export const DEX = (value: number) => {
  return <S>(status: S): Prettify<S & { DEX: number }> => ({
    ...status,
    DEX: value,
  });
};

export const INT = (value: number) => {
  return <S>(status: S): Prettify<S & { INT: number }> => ({
    ...status,
    INT: value,
  });
};

export const VIT = (value: number) => {
  return <S>(status: S): Prettify<S & { VIT: number }> => ({
    ...status,
    VIT: value,
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

export const baseCriticalDamage = <S extends { AGI: number; STR: number }>(
  status: S
): Prettify<S & { baseCriticalDamage: number }> => {
  const baseCriticalDamage = pino.calculateBaseCriticalDamage(
    status.AGI,
    status.STR
  );

  return { ...status, baseCriticalDamage };
};

export const baseCriticalRate = <S extends { CRT: number }>(
  status: S
): Prettify<S & { baseCriticalRate: number }> => {
  const baseCriticalRate = pino.calculateBaseCriticalRate(status.CRT);

  return { ...status, baseCriticalRate };
};

export const totalDEX = <
  S extends { percentDEX: number; flatDEX: number; DEX: number }
>(
  status: S
) => {
  return {
    ...status,
    totalDEX: Math.floor(
      status.DEX * (1 + status.percentDEX) + status.flatDEX
    ),
  };
};

export const totalAGI = <
  S extends { percentAGI: number; flatAGI: number; AGI: number }
>(
  status: S
) => {
  return {
    ...status,
    totalAGI: Math.floor(
      status.AGI * (1 + status.percentAGI) + status.flatAGI
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
  .apply(STR(1))
  .apply(INT(1))
  .apply(VIT(178))
  .apply(AGI(220))
  .apply(DEX(315))
  .apply(CRT(0))
  .apply(totalAGI)
  .apply(totalDEX)
  .apply(baseCastSpeed)
  .apply((status) => {
    const totalCastSpeed =
      Math.floor(status.baseCastSpeed * (1 + status.percentCastSpeed)) +
      status.flatCastSpeed;

    return { ...status, totalCastSpeed };
  })
  .apply(baseCriticalRate)
  .apply(baseCriticalDamage);

console.log(sample.status);
