import { StatSource } from "../types";
import { total, accumulateStats } from "./helper";

// declare
export const STR =
  (value: number) =>
  <S>(status: S): S & { STR: number } => ({
    ...status,
    STR: value,
  });

// calc
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

export const totalFlatSTR = <S extends StatSource<S>>(
  status: S
): S & { totalFlatSTR: number } => {
  return {
    ...status,
    totalFlatSTR: accumulateStats(status, "flatSTR"),
  };
};

export const totalPercentSTR = <S extends StatSource<S>>(
  status: S
): S & { totalPercentSTR: number } => {
  return {
    ...status,
    totalPercentSTR: accumulateStats(status, "percentSTR"),
  };
};
