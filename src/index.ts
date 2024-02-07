import * as pino from "@jmmaa/pino";

type Prettify<T> = { [K in keyof T]: T[K] } & {}; // idk how does this work

type Modifier<T> = <S>(status: S) => Prettify<S & T>;

type DeclareStatFunc = <T>(mapping: T) => Modifier<T>;

export const declareStat: DeclareStatFunc = (mapping) => {
  return (status) => {
    return { ...status, ...mapping };
  };
};

export const baseSTR = (value: number) => declareStat({ STR: value });

export const baseAGI = (value: number) => declareStat({ AGI: value });

export const baseDEX = (value: number) => declareStat({ DEX: value });

export const baseINT = (value: number) => declareStat({ INT: value });

export const baseVIT = (value: number) => declareStat({ VIT: value });

export const level = (value: number) => declareStat({ level: value });

export const baseCDMG = <S extends { AGI: number; STR: number }>(
  status: S
) => {
  const result = pino.calculateBaseCriticalDamage(status.AGI, status.STR);

  return { ...status, baseCDMG: result };
};

const status = {};

const weaponType = declareStat({ weaponType: "gg" })(status);

const withSTR = baseSTR(12)(weaponType);

const withAGI = baseAGI(465)(withSTR);

const withBaseCDMG = baseCDMG(withAGI);

const withLevel = level(275)(withBaseCDMG);

console.log(withLevel);
