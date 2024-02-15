import { baseCriticalRate } from "@jmmaa/pino";
import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatCriticalRate = (
  value: number
): { name: "flatCriticalRate"; value: number } => ({
  name: "flatCriticalRate",
  value,
});

export const percentCriticalRate = (
  value: number
): { name: "percentCriticalRate"; value: number } => ({
  name: "percentCriticalRate",
  value,
});

// calc
export const BaseCriticalRate =
  (value: number) =>
  <S>(status: S): S & { BaseCriticalRate: number } => ({
    ...status,
    BaseCriticalRate: value,
  });

// this calc is just for consistency, but it is redundant
export const totalBaseCriticalRate = <S extends { totalBaseCRT: number }>(
  status: S
): S & { totalBaseCriticalRate: number } => ({
  ...status,
  totalBaseCriticalRate: baseCriticalRate(status.totalBaseCRT),
});

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

export const totalFlatCriticalRate = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalFlatCriticalRate: number } => {
  return {
    ...status,
    totalFlatCriticalRate: accumulateDeclaredStats(
      status,
      "flatCriticalRate"
    ),
  };
};

export const totalPercentCriticalRate = <
  S extends DeclaredStatContainer<S>
>(
  status: S
): S & { totalPercentCriticalRate: number } => {
  return {
    ...status,
    totalPercentCriticalRate: accumulateDeclaredStats(
      status,
      "percentCriticalRate"
    ),
  };
};
