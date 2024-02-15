import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatINT = (
  value: number
): { name: "flatINT"; value: number } => ({
  name: "flatINT",
  value,
});

export const percentINT = (
  value: number
): { name: "percentINT"; value: number } => ({
  name: "percentINT",
  value,
});

// calc
export const INT =
  (value: number) =>
  <S>(status: S): S & { INT: number } => ({
    ...status,
    INT: value,
  });

// this calc is just for consistency, but it is redundant
export const totalBaseINT = <S extends { INT: number }>(
  status: S
): S & { totalBaseINT: number } => ({
  ...status,
  totalBaseINT: status.INT,
});

export const totalINT = <
  S extends {
    totalBaseINT: number;
    totalPercentINT: number;
    totalFlatINT: number;
  }
>(
  status: S
): S & { totalINT: number } => {
  return {
    ...status,
    totalINT: total(
      status.totalBaseINT,
      status.totalPercentINT,
      status.totalFlatINT
    ),
  };
};

export const totalFlatINT = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalFlatINT: number } => {
  return {
    ...status,
    totalFlatINT: accumulateDeclaredStats(status, "flatINT"),
  };
};

export const totalPercentINT = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalPercentINT: number } => {
  return {
    ...status,
    totalPercentINT: accumulateDeclaredStats(status, "percentINT"),
  };
};
