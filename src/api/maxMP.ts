import { baseMaxMP } from "@jmmaa/pino";
import { accumulate, pipe, total } from "./helper";
import { DeclaredStatus } from "../types";

// calc

// this calc is just for consistency, but it is redundant
export const totalBaseMaxMP = <
  S extends DeclaredStatus & { totalINT: number; totalBaseTEC: number }
>(
  status: S
): S & { totalBaseMaxMP: number } => ({
  ...status,
  totalBaseMaxMP: baseMaxMP(
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

export const totalFlatMaxMP = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatMaxMP: number } => {
  return {
    ...status,
    totalFlatMaxMP: accumulate(status, "flatMaxMP"),
  };
};

export const totalPercentMaxMP = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentMaxMP: number } => {
  return {
    ...status,
    totalPercentMaxMP: accumulate(status, "percentMaxMP"),
  };
};

export const calculateMP = <
  S extends DeclaredStatus & { totalINT: number; totalBaseTEC: number }
>(
  status: S
) =>
  pipe(status)
    ._(totalBaseMaxMP)
    ._(totalPercentMaxMP)
    ._(totalFlatMaxMP)
    ._(totalMaxMP).value;
