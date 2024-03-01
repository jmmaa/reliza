import { DeclaredStatus } from "../types";

import { pipe } from "./helper";

// calc
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

export const calculatePersonal = <S extends DeclaredStatus>(status: S) =>
  pipe(status)
    ._(totalBaseMTL)
    ._(totalBaseCRT)
    ._(totalBaseLUK)
    ._(totalBaseTEC).value;
