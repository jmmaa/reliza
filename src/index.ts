type _baseSTRFunc = (
  _: number,
) => <O extends {}>(_: O) => O & { STR: number };
const baseSTR: _baseSTRFunc = (value: number) => (entity) => ({
  ...entity,
  STR: value,
});

type _baseDEXFunc = (
  _: number,
) => <O extends {}>(_: O) => O & { DEX: number };
const baseDEX: _baseDEXFunc = (value: number) => (entity) => ({
  ...entity,
  DEX: value,
});

type _baseAGIFunc = (
  _: number,
) => <O extends {}>(_: O) => O & { AGI: number };
const baseAGI: _baseAGIFunc = (value: number) => (entity) => ({
  ...entity,
  AGI: value,
});

type _baseVITFunc = (
  _: number,
) => <O extends {}>(_: O) => O & { VIT: number };
const baseVIT: _baseVITFunc = (value: number) => (entity) => ({
  ...entity,
  VIT: value,
});

type _baseINTFunc = (
  _: number,
) => <O extends {}>(_: O) => O & { INT: number };
const baseINT: _baseINTFunc = (value: number) => (entity) => ({
  ...entity,
  INT: value,
});

type weaponFunc = (
  ATK: number,
  stability: number,
  stats: [string, number][],
) => <O extends {}>(
  _: O,
) => O & {
  weapon: {
    ATK: number;
    stability: number;
    stats: [string, number][];
  };
};

const compose = <T>(_: T) => ({
  value: _,
  map: <F extends Function>(f: F) => compose(f(_)),
});

const character = compose({});

const improved = character
  .map(baseSTR(490))
  .map(baseDEX(247))
  .map(baseINT(1))
  .map(baseVIT(1))
  .map(baseAGI(1));

console.log(improved.value);
