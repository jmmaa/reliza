type Status = {};

type WithAGI<T extends Status> = { [Key in keyof T]: T[Key] } & {
  AGI: number;
};

type WithDEX<T extends Status> = { [Key in keyof T]: T[Key] } & {
  DEX: number;
};

type WithSTR<T extends Status> = { [Key in keyof T]: T[Key] } & {
  STR: number;
};

// const AGI = <T extends Status>(status: T): WithAGI<T> => {
//   const newStatus = { ...status, AGI: 1 };

//   return newStatus;
// };

// const DEX = <T extends Status>(status: T): WithDEX<T> => {
//   const newStatus = { ...status, DEX: 1 };

//   return newStatus;
// };

// const stat: Status = {};

// const withAgi = AGI(stat);

// console.log(withAgi.AGI);

// const withDex = DEX(withAgi);

// console.log(withDex.AGI);

// console.log(withDex.DEX);

// const withBoth = DEX(AGI(stat));

// console.log(withBoth.AGI);

// console.log(withBoth.DEX);

const AGI = (
  value: number
): (<T extends Status>(status: T) => WithAGI<T>) => {
  return (status) => {
    return { ...status, AGI: value };
  };
};

const DEX = (
  value: number
): (<T extends Status>(status: T) => WithDEX<T>) => {
  return (status) => {
    return { ...status, DEX: value };
  };
};

type BaseSTRModifier = (
  value: number
) => <T extends Status>(status: T) => WithSTR<T>;

const STR: BaseSTRModifier = (value: number) => {
  return (status) => {
    return { ...status, STR: value };
  };
};

type BaseCriticalDamageModifier = <
  T extends Status & { AGI: number; STR: number }
>(
  status: T
) => {
  [Key in keyof T]: T[Key];
} & {
  baseCriticalDamage: number;
};

const baseCriticalDamage: BaseCriticalDamageModifier = (status) => {
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
