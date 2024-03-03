import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalBaseCriticalRate = <S extends { totalBaseCRT: number }>(
  status: S
): S & { totalBaseCriticalRate: number } => ({
  ...status,
  totalBaseCriticalRate: pino.baseCriticalRate(status.totalBaseCRT),
});

export const totalPercentCriticalRate = <S extends DeclaredStatusMap>(
  status: S
): S & { totalPercentCriticalRate: number } => {
  return {
    ...status,
    totalPercentCriticalRate: accumulate(status, "percentCriticalRate"),
  };
};

export const totalFlatCriticalRate = <S extends DeclaredStatusMap>(
  status: S
): S & { totalFlatCriticalRate: number } => {
  return {
    ...status,
    totalFlatCriticalRate: accumulate(status, "flatCriticalRate"),
  };
};

export const totalCriticalRate = <
  S extends {
    totalBaseCriticalRate: number;
    totalPercentCriticalRate: number;
    totalFlatCriticalRate: number;
  }
>(
  status: S
): S & { totalCriticalRate: number } => {
  return {
    ...status,
    totalCriticalRate: total(
      status.totalBaseCriticalRate,
      status.totalPercentCriticalRate,
      status.totalFlatCriticalRate
    ),
  };
};

export const calculateCriticalRate = <
  S extends DeclaredStatusMap & { totalBaseCRT: number }
>(
  status: S
) => {
  const calcs = pipe(status)
    ._(totalBaseCriticalRate)
    ._(totalPercentCriticalRate)
    ._(totalFlatCriticalRate)
    ._(totalCriticalRate);

  return calcs.value;
};
