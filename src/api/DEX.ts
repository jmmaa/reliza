import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatDEX = (
  value: number
): { name: "flatDEX"; value: number } => ({
  name: "flatDEX",
  value,
});

export const percentDEX = (
  value: number
): { name: "percentDEX"; value: number } => ({
  name: "percentDEX",
  value,
});

// calc
export const DEX =
  (value: number) =>
  <S>(status: S): S & { DEX: number } => ({
    ...status,
    DEX: value,
  });

// this calc is just for consistency, but it is redundant
export const totalBaseDEX = <S extends { DEX: number }>(
  status: S
): S & { totalBaseDEX: number } => ({
  ...status,
  totalBaseDEX: status.DEX,
});

export const totalDEX = <
  S extends {
    totalBaseDEX: number;
    totalPercentDEX: number;
    totalFlatDEX: number;
  }
>(
  status: S
): S & { totalDEX: number } => {
  return {
    ...status,
    totalDEX: total(
      status.totalBaseDEX,
      status.totalPercentDEX,
      status.totalFlatDEX
    ),
  };
};

export const totalFlatDEX = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalFlatDEX: number } => {
  return {
    ...status,
    totalFlatDEX: accumulateDeclaredStats(status, "flatDEX"),
  };
};

export const totalPercentDEX = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalPercentDEX: number } => {
  return {
    ...status,
    totalPercentDEX: accumulateDeclaredStats(status, "percentDEX"),
  };
};
