import { baseMaxHP } from "@jmmaa/pino";
import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatMaxHP = (
  value: number
): { name: "flatMaxHP"; value: number } => ({
  name: "flatMaxHP",
  value,
});

export const percentMaxHP = (
  value: number
): { name: "percentMaxHP"; value: number } => ({
  name: "percentMaxHP",
  value,
});

// calc

export const totalBaseMaxHP = <
  S extends { level: number; totalVIT: number }
>(
  status: S
): S & { totalBaseMaxHP: number } => ({
  ...status,
  totalBaseMaxHP: baseMaxHP(status.level, status.totalVIT),
});

export const totalMaxHP = <
  S extends {
    totalBaseMaxHP: number;
    totalPercentMaxHP: number;
    totalFlatMaxHP: number;
  }
>(
  status: S
): S & { totalMaxHP: number } => {
  return {
    ...status,
    totalMaxHP: total(
      status.totalBaseMaxHP,
      status.totalPercentMaxHP,
      status.totalFlatMaxHP
    ),
  };
};

export const totalFlatMaxHP = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalFlatMaxHP: number } => {
  return {
    ...status,
    totalFlatMaxHP: accumulateDeclaredStats(status, "flatMaxHP"),
  };
};

export const totalPercentMaxHP = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalPercentMaxHP: number } => {
  return {
    ...status,
    totalPercentMaxHP: accumulateDeclaredStats(status, "percentMaxHP"),
  };
};
