import { StatSource } from "../types";
import { total, accumulateStats } from "./helper";

// declare
export const DEX =
  (value: number) =>
  <S>(status: S): S & { DEX: number } => ({
    ...status,
    DEX: value,
  });

// calc
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

export const totalFlatDEX = <S extends StatSource<S>>(
  status: S
): S & { totalFlatDEX: number } => {
  return {
    ...status,
    totalFlatDEX: accumulateStats(status, "flatDEX"),
  };
};

export const totalPercentDEX = <S extends StatSource<S>>(
  status: S
): S & { totalPercentDEX: number } => {
  return {
    ...status,
    totalPercentDEX: accumulateStats(status, "percentDEX"),
  };
};
