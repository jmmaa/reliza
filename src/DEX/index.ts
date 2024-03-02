import { accumulate, pipe, total } from "../helper";
import { DeclaredStatus } from "../types";

export const totalBaseDEX = <S extends { DEX: number }>(
  status: S
): S & { totalBaseDEX: number } => ({
  ...status,
  totalBaseDEX: status.DEX,
});

export const totalPercentDEX = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentDEX: number } => {
  return { ...status, totalPercentDEX: accumulate(status, "percentDEX") };
};

export const totalFlatDEX = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatDEX: number } => {
  return { ...status, totalFlatDEX: accumulate(status, "flatDEX") };
};

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

export const calculateDEX = <S extends DeclaredStatus>(
  status: S
): S & {
  totalBaseDEX: number;
  totalFlatDEX: number;
  totalPercentDEX: number;
  totalDEX: number;
} => {
  const calcs = pipe(status)
    ._(totalBaseDEX)
    ._(totalPercentDEX)
    ._(totalFlatDEX)
    ._(totalDEX);

  return calcs.value;
};
