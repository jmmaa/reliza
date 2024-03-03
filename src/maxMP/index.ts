import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";

// calc

// this calc is just for consistency, but it is redundant
export const totalBaseMaxMP = <
  S extends DeclaredStatusMap & { totalINT: number; totalBaseTEC: number }
>(
  status: S
): S & { totalBaseMaxMP: number } => ({
  ...status,
  totalBaseMaxMP: pino.baseMaxMP(
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

export const totalFlatMaxMP = <S extends DeclaredStatusMap>(
  status: S
): S & { totalFlatMaxMP: number } => {
  return {
    ...status,
    totalFlatMaxMP: accumulate(status, "flatMaxMP"),
  };
};

export const totalPercentMaxMP = <S extends DeclaredStatusMap>(
  status: S
): S & { totalPercentMaxMP: number } => {
  return {
    ...status,
    totalPercentMaxMP: accumulate(status, "percentMaxMP"),
  };
};

export const calculateMP = <
  S extends DeclaredStatusMap & { totalINT: number; totalBaseTEC: number }
>(
  status: S
) => {
  const calcs = pipe(status)
    ._(totalBaseMaxMP)
    ._(totalPercentMaxMP)
    ._(totalFlatMaxMP)
    ._(totalMaxMP);

  return calcs.value;
};
