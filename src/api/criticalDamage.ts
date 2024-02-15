import { baseCriticalDamage } from "@jmmaa/pino";
import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatCriticalDamage = (
  value: number
): { name: "flatCriticalDamage"; value: number } => ({
  name: "flatCriticalDamage",
  value,
});

export const percentCriticalDamage = (
  value: number
): { name: "percentCriticalDamage"; value: number } => ({
  name: "percentCriticalDamage",
  value,
});

// calc
export const BaseCriticalDamage =
  (value: number) =>
  <S>(status: S): S & { BaseCriticalDamage: number } => ({
    ...status,
    BaseCriticalDamage: value,
  });

// this calc is just for consistency, but it is redundant
export const totalBaseCriticalDamage = <
  S extends { totalSTR: number; totalAGI: number }
>(
  status: S
): S & { totalBaseCriticalDamage: number } => ({
  ...status,
  totalBaseCriticalDamage: baseCriticalDamage(
    status.totalAGI,
    status.totalSTR
  ),
});

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

export const totalFlatCriticalDamage = <
  S extends DeclaredStatContainer<S>
>(
  status: S
): S & { totalFlatCriticalDamage: number } => {
  return {
    ...status,
    totalFlatCriticalDamage: accumulateDeclaredStats(
      status,
      "flatCriticalDamage"
    ),
  };
};

export const totalPercentCriticalDamage = <
  S extends DeclaredStatContainer<S>
>(
  status: S
): S & { totalPercentCriticalDamage: number } => {
  return {
    ...status,
    totalPercentCriticalDamage: accumulateDeclaredStats(
      status,
      "percentCriticalDamage"
    ),
  };
};
