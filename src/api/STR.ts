import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatSTR = (
  value: number
): { name: "flatSTR"; value: number } => ({
  name: "flatSTR",
  value: value,
});

export const percentSTR = (
  value: number
): { name: "percentSTR"; value: number } => ({
  name: "percentSTR",
  value,
});

// calc

export const STR =
  (value: number) =>
  <S>(status: S): S & { STR: number } => ({
    ...status,
    STR: value,
  });

// this calc is just for consistency, but it is redundant
export const totalBaseSTR = <S extends { STR: number }>(
  status: S
): S & { totalBaseSTR: number } => ({
  ...status,
  totalBaseSTR: status.STR,
});

export const totalSTR = <
  S extends {
    totalBaseSTR: number;
    totalPercentSTR: number;
    totalFlatSTR: number;
  }
>(
  status: S
): S & { totalSTR: number } => {
  return {
    ...status,
    totalSTR: total(
      status.totalBaseSTR,
      status.totalPercentSTR,
      status.totalFlatSTR
    ),
  };
};

export const totalFlatSTR = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalFlatSTR: number } => {
  return {
    ...status,
    totalFlatSTR: accumulateDeclaredStats(status, "flatSTR"),
  };
};

export const totalPercentSTR = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalPercentSTR: number } => {
  return {
    ...status,
    totalPercentSTR: accumulateDeclaredStats(status, "percentSTR"),
  };
};
