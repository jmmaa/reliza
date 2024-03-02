import { accumulate, pipe, total } from "../helper";
import { DeclaredStatus } from "../types";

export const totalBaseVIT = <S extends { VIT: number }>(
  status: S
): S & { totalBaseVIT: number } => ({
  ...status,
  totalBaseVIT: status.VIT,
});

export const totalPercentVIT = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentVIT: number } => {
  return { ...status, totalPercentVIT: accumulate(status, "percentVIT") };
};

export const totalFlatVIT = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatVIT: number } => {
  return { ...status, totalFlatVIT: accumulate(status, "flatVIT") };
};

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

export const calculateVIT = <S extends DeclaredStatus>(
  status: S
): S & {
  totalBaseVIT: number;
  totalFlatVIT: number;
  totalPercentVIT: number;
  totalVIT: number;
} => {
  const calcs = pipe(status)
    ._(totalBaseVIT)
    ._(totalPercentVIT)
    ._(totalFlatVIT)
    ._(totalVIT);

  return calcs.value;
};
