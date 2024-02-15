import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatVIT = (
  value: number
): { name: "flatVIT"; value: number } => ({
  name: "flatVIT",
  value,
});

export const percentVIT = (
  value: number
): { name: "percentVIT"; value: number } => ({
  name: "percentVIT",
  value,
});

// calc
export const VIT =
  (value: number) =>
  <S>(status: S): S & { VIT: number } => ({
    ...status,
    VIT: value,
  });

// this calc is just for consistency, but it is redundant
export const totalBaseVIT = <S extends { VIT: number }>(
  status: S
): S & { totalBaseVIT: number } => ({
  ...status,
  totalBaseVIT: status.VIT,
});

export const totalVIT = <
  S extends {
    totalBaseVIT: number;
    totalPercentVIT: number;
    totalFlatVIT: number;
  }
>(
  status: S
): S & { totalVIT: number } => {
  return {
    ...status,
    totalVIT: total(
      status.totalBaseVIT,
      status.totalPercentVIT,
      status.totalFlatVIT
    ),
  };
};

export const totalFlatVIT = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalFlatVIT: number } => {
  return {
    ...status,
    totalFlatVIT: accumulateDeclaredStats(status, "flatVIT"),
  };
};

export const totalPercentVIT = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalPercentVIT: number } => {
  return {
    ...status,
    totalPercentVIT: accumulateDeclaredStats(status, "percentVIT"),
  };
};
