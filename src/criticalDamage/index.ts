import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatus } from "../types";

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

export const totalPercentCriticalDamage = <S extends DeclaredStatus>(
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

export const totalFlatCriticalDamage = <S extends DeclaredStatus>(
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
  S extends DeclaredStatus & { totalSTR: number; totalAGI: number }
>(
  status: S
): S & {
  totalBaseCriticalDamage: number;
  totalPercentCriticalDamage: number;
  totalFlatCriticalDamage: number;
  totalCriticalDamage: number;
} => {
  const CDMGcalcs = pipe(status)
    ._(totalBaseCriticalDamage)
    ._(totalPercentCriticalDamage)
    ._(totalFlatCriticalDamage)
    ._(totalCriticalDamage);

  return CDMGcalcs.value;
};
