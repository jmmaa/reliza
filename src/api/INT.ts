import { StatSource } from "../types";
import { total, accumulateStats } from "./helper";

// declare
export const INT =
  (value: number) =>
  <S>(status: S): S & { INT: number } => ({
    ...status,
    INT: value,
  });

// calc
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

export const totalFlatINT = <S extends StatSource<S>>(
  status: S
): S & { totalFlatINT: number } => {
  return {
    ...status,
    totalFlatINT: accumulateStats(status, "flatINT"),
  };
};

export const totalPercentINT = <S extends StatSource<S>>(
  status: S
): S & { totalPercentINT: number } => {
  return {
    ...status,
    totalPercentINT: accumulateStats(status, "percentINT"),
  };
};
