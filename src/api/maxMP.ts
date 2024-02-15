import { baseMaxMP } from "@jmmaa/pino";
import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatMaxMP = (
  value: number
): { name: "flatMaxMP"; value: number } => ({
  name: "flatMaxMP",
  value,
});

export const percentMaxMP = (
  value: number
): { name: "percentMaxMP"; value: number } => ({
  name: "percentMaxMP",
  value,
});

// calc

// this calc is just for consistency, but it is redundant
export const totalBaseMaxMP = <
  S extends { level: number; totalINT: number; totalBaseTEC: number }
>(
  status: S
): S & { totalBaseMaxMP: number } => ({
  ...status,
  totalBaseMaxMP: baseMaxMP(
    status.level,
    status.totalINT,
    status.totalBaseTEC
  ),
});

export const totalMaxMP = <
  S extends {
    totalBaseMaxMP: number;
    totalPercentMaxMP: number;
    totalFlatMaxMP: number;
  }
>(
  status: S
): S & { totalMaxMP: number } => {
  return {
    ...status,
    totalMaxMP: total(
      status.totalBaseMaxMP,
      status.totalPercentMaxMP,
      status.totalFlatMaxMP
    ),
  };
};

export const totalFlatMaxMP = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalFlatMaxMP: number } => {
  return {
    ...status,
    totalFlatMaxMP: accumulateDeclaredStats(status, "flatMaxMP"),
  };
};

export const totalPercentMaxMP = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalPercentMaxMP: number } => {
  return {
    ...status,
    totalPercentMaxMP: accumulateDeclaredStats(status, "percentMaxMP"),
  };
};
