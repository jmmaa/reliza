import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalBaseCriticalDamage = <
  S extends { totalSTR: number; totalAGI: number }
>(
  status: S
): S & { totalBaseCriticalDamage: number } => ({
  ...status,
  totalBaseCriticalDamage: pino.baseCriticalDamage(
    status.totalAGI,
    status.totalSTR
  ),
});

export const totalPercentCriticalDamage = <S extends DeclaredStatusMap>(
  status: S
): S & { totalPercentCriticalDamage: number } => {
  return {
    ...status,
    totalPercentCriticalDamage: accumulate(
      status,
      "percentCriticalDamage"
    ),
  };
};

export const totalFlatCriticalDamage = <S extends DeclaredStatusMap>(
  status: S
): S & { totalFlatCriticalDamage: number } => {
  return {
    ...status,
    totalFlatCriticalDamage: accumulate(status, "flatCriticalDamage"),
  };
};

export const totalCriticalDamage = <
  S extends {
    totalBaseCriticalDamage: number;
    totalPercentCriticalDamage: number;
    totalFlatCriticalDamage: number;
  }
>(
  status: S
): S & { totalCriticalDamage: number } => {
  return {
    ...status,
    totalCriticalDamage: total(
      status.totalBaseCriticalDamage,
      status.totalPercentCriticalDamage,
      status.totalFlatCriticalDamage
    ),
  };
};

export const calculateCriticalDamage = <
  S extends DeclaredStatusMap & { totalSTR: number; totalAGI: number }
>(
  status: S
): S & {
  totalBaseCriticalDamage: number;
  totalPercentCriticalDamage: number;
  totalFlatCriticalDamage: number;
  totalCriticalDamage: number;
} => {
  const calcs = pipe(status)
    ._(totalBaseCriticalDamage)
    ._(totalPercentCriticalDamage)
    ._(totalFlatCriticalDamage)
    ._(totalCriticalDamage);

  return calcs.value;
};
