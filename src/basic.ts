import { DeclarationMap, Merger, MergerBuilder } from "./types";
import { finalize, merge } from "./utils";

export const mergeTotalBaseSTR: (
  _: number,
) => <O extends {}>(_: O) => O & { totalBaseSTR: number } =
  (value) => (entity) =>
    merge(entity, { totalBaseSTR: value });

export const mergeTotalBaseINT: (
  _: number,
) => <O extends {}>(_: O) => O & { totalBaseINT: number } =
  (value) => (entity) =>
    merge(entity, { totalBaseINT: value });

export const mergeTotalBaseDEX: (
  _: number,
) => <O extends {}>(_: O) => O & { totalBaseDEX: number } =
  (value) => (entity) =>
    merge(entity, { totalBaseDEX: value });

export const mergeTotalBaseVIT: (
  _: number,
) => <O extends {}>(_: O) => O & { totalBaseVIT: number } =
  (value) => (entity) =>
    merge(entity, { totalBaseVIT: value });

export const mergeTotalBaseAGI: (
  _: number,
) => <O extends {}>(_: O) => O & { totalBaseAGI: number } =
  (value) => (entity) =>
    merge(entity, { totalBaseAGI: value });

export const mergeTotalPercentSTR: (
  _: number,
) => <O extends {}>(_: O) => O & { totalPercentSTR: number } =
  (value) => (entity) =>
    merge(entity, { totalPercentSTR: value });

export const mergeTotalPercentINT: (
  _: number,
) => <O extends {}>(_: O) => O & { totalPercentINT: number } =
  (value) => (entity) =>
    merge(entity, { totalPercentINT: value });

export const mergeTotalPercentDEX: (
  _: number,
) => <O extends {}>(_: O) => O & { totalPercentDEX: number } =
  (value) => (entity) =>
    merge(entity, { totalPercentDEX: value });

export const mergeTotalPercentVIT: (
  _: number,
) => <O extends {}>(_: O) => O & { totalPercentVIT: number } =
  (value) => (entity) =>
    merge(entity, { totalPercentVIT: value });

export const mergeTotalPercentAGI: (
  _: number,
) => <O extends {}>(_: O) => O & { totalPercentAGI: number } =
  (value) => (entity) =>
    merge(entity, { totalPercentAGI: value });

export const mergeTotalFlatSTR: (
  _: number,
) => <O extends {}>(_: O) => O & { totalFlatSTR: number } =
  (value) => (entity) =>
    merge(entity, { totalFlatSTR: value });

export const mergeTotalFlatINT: (
  _: number,
) => <O extends {}>(_: O) => O & { totalFlatINT: number } =
  (value) => (entity) =>
    merge(entity, { totalFlatINT: value });
export const mergeTotalFlatDEX: (
  _: number,
) => <O extends {}>(_: O) => O & { totalFlatDEX: number } =
  (value) => (entity) =>
    merge(entity, { totalFlatDEX: value });
export const mergeTotalFlatVIT: (
  _: number,
) => <O extends {}>(_: O) => O & { totalFlatVIT: number } =
  (value) => (entity) =>
    merge(entity, { totalFlatVIT: value });

export const mergeTotalFlatAGI: (
  _: number,
) => <O extends {}>(_: O) => O & { totalFlatAGI: number } =
  (value) => (entity) =>
    merge(entity, { totalFlatAGI: value });

export const mergeTotalSTR: <
  O extends {
    totalBaseSTR: number;
    totalPercentSTR: number;
    totalFlatSTR: number;
  },
>(
  _: O,
) => O & { totalSTR: number } = (entity) =>
  merge(entity, {
    totalSTR: finalize(
      entity.totalBaseSTR,
      entity.totalPercentSTR,
      entity.totalFlatSTR,
    ),
  });

export const mergeTotalINT: <
  O extends {
    totalBaseINT: number;
    totalPercentINT: number;
    totalFlatINT: number;
  },
>(
  _: O,
) => O & { totalINT: number } = (entity) =>
  merge(entity, {
    totalINT: finalize(
      entity.totalBaseINT,
      entity.totalPercentINT,
      entity.totalFlatINT,
    ),
  });

export const mergeTotalDEX: <
  O extends {
    totalBaseDEX: number;
    totalPercentDEX: number;
    totalFlatDEX: number;
  },
>(
  _: O,
) => O & { totalDEX: number } = (entity) =>
  merge(entity, {
    totalDEX: finalize(
      entity.totalBaseDEX,
      entity.totalPercentDEX,
      entity.totalFlatDEX,
    ),
  });

export const mergeTotalVIT: <
  O extends {
    totalBaseVIT: number;
    totalPercentVIT: number;
    totalFlatVIT: number;
  },
>(
  _: O,
) => O & { totalVIT: number } = (entity) =>
  merge(entity, {
    totalVIT: finalize(
      entity.totalBaseVIT,
      entity.totalPercentVIT,
      entity.totalFlatVIT,
    ),
  });

export const mergeTotalAGI: <
  O extends {
    totalBaseAGI: number;
    totalPercentAGI: number;
    totalFlatAGI: number;
  },
>(
  _: O,
) => O & { totalAGI: number } = (entity) =>
  merge(entity, {
    totalAGI: finalize(
      entity.totalBaseAGI,
      entity.totalPercentAGI,
      entity.totalFlatAGI,
    ),
  });

// personal stats

export const mergeTotalBaseCRT: (
  _: number,
) => <O extends {}>(_: O) => O & { totalBaseCRT: number } =
  (value) => (entity) =>
    merge(entity, { totalBaseCRT: value });

export const mergeTotalBaseMTL: (
  _: number,
) => <O extends {}>(_: O) => O & { totalBaseMTL: number } =
  (value) => (entity) =>
    merge(entity, { totalBaseMTL: value });

export const mergeTotalBaseTEC: (
  _: number,
) => <O extends {}>(_: O) => O & { totalBaseTEC: number } =
  (value) => (entity) =>
    merge(entity, { totalBaseTEC: value });

export const mergeTotalBaseLUK: (
  _: number,
) => <O extends {}>(_: O) => O & { totalBaseLUK: number } =
  (value) => (entity) =>
    merge(entity, { totalBaseLUK: value });
