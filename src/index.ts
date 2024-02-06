type Status = {};

type Prettify<T> = { [K in keyof T]: T[K] } & {}; // idk how does this work

type WithBaseSTR<T> = Prettify<T & { STR: number }>;

type BaseSTR = (value: number) => <T>(status: T) => WithBaseSTR<T>;

const STR: BaseSTR = (value) => {
  return (status) => {
    return { ...status, STR: value };
  };
};

type BaseAGI = (
  value: number
) => <T extends Status>(status: T) => Prettify<T & { AGI: number }>;

const AGI: BaseAGI = (value: number) => {
  return (status) => {
    return { ...status, AGI: value };
  };
};

type BaseDEX = (
  value: number
) => <T extends Status>(status: T) => Prettify<T & { DEX: number }>;

const DEX: BaseDEX = (value: number) => {
  return (status) => {
    return { ...status, DEX: value };
  };
};

type BaseCriticalDamage = <
  T extends Status & { AGI: number; STR: number }
>(
  status: T
) => Prettify<
  T & {
    baseCriticalDamage: number;
  }
>;

const baseCriticalDamage: BaseCriticalDamage = (status) => {
  const STR = status.STR;

  const AGI = status.AGI;

  const result = STR >= AGI ? 150 + STR / 5 : 150 + (STR + AGI) / 10;

  return { ...status, baseCriticalDamage: result };
};

const stat: Status = {};

const agiStat = AGI(9);
const dexStat = DEX(247);
const strStat = STR(465);

const withAgi = agiStat(stat);
const withDex = dexStat(withAgi);
const withStr = strStat(withDex);

const withbcdmg = baseCriticalDamage(withStr);

console.log(withStr.AGI, withStr.DEX, withStr.STR);

console.log(withbcdmg.baseCriticalDamage);
