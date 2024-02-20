import { StatSource } from "../types";
import { total, accumulateStats } from "./helper";

// declare
export const VIT =
  (value: number) =>
  <S>(status: S): S & { VIT: number } => ({
    ...status,
    VIT: value,
  });

// calc
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

export const totalFlatVIT = <S extends StatSource>(
  status: S
): S & { totalFlatVIT: number } => {
  return {
    ...status,
    totalFlatVIT: accumulateStats(status, "flatVIT"),
  };
};

export const totalPercentVIT = <S extends StatSource>(
  status: S
): S & { totalPercentVIT: number } => {
  return {
    ...status,
    totalPercentVIT: accumulateStats(status, "percentVIT"),
  };
};
