import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatus } from "../types";

export const totalBaseMaxHP = <
  S extends DeclaredStatus & { totalVIT: number }
>(
  status: S
): S & { totalBaseMaxHP: number } => ({
  ...status,
  totalBaseMaxHP: pino.baseMaxHP(status.level, status.totalVIT),
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

export const totalFlatMaxHP = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatMaxHP: number } => {
  return {
    ...status,
    totalFlatMaxHP: accumulate(status, "flatMaxHP"),
  };
};

export const totalPercentMaxHP = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentMaxHP: number } => {
  return {
    ...status,
    totalPercentMaxHP: accumulate(status, "percentMaxHP"),
  };
};

export const calculateHP = <
  S extends DeclaredStatus & { totalVIT: number }
>(
  status: S
): S & {
  totalBaseMaxHP: number;
  totalPercentMaxHP: number;
  totalFlatMaxHP: number;
  totalMaxHP: number;
} => {
  const HPcalcs = pipe(status)
    ._(totalBaseMaxHP)
    ._(totalPercentMaxHP)
    ._(totalFlatMaxHP)
    ._(totalMaxHP);

  return HPcalcs.value;
};
