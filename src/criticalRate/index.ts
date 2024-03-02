import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatus } from "../types";

export const totalBaseCriticalRate = <S extends { totalBaseCRT: number }>(
  status: S
): S & { totalBaseCriticalRate: number } => ({
  ...status,
  totalBaseCriticalRate: pino.baseCriticalRate(status.totalBaseCRT),
});

export const totalPercentCriticalRate = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentCriticalRate: number } => {
  return {
    ...status,
    totalPercentCriticalRate: accumulate(status, "percentCriticalRate"),
  };
};

export const totalFlatCriticalRate = <S extends DeclaredStatus>(
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
  S extends DeclaredStatus & { totalBaseCRT: number }
>(
  status: S
) => {
  const critRateCalcs = pipe(status)
    ._(totalBaseCriticalRate)
    ._(totalPercentCriticalRate)
    ._(totalFlatCriticalRate)
    ._(totalCriticalRate);

  return critRateCalcs.value;
};
