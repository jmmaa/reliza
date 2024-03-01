import { DeclaredStatus } from "../types";
import { pipe, total, accumulate } from "./helper";

// calc
// this calc is just for consistency, but it is redundant
export const totalBaseSTR = <S extends DeclaredStatus>(
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

export const totalFlatSTR = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatSTR: number } => {
  return {
    ...status,
    totalFlatSTR: accumulate(status, "flatSTR"),
  };
};

export const totalPercentSTR = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentSTR: number } => {
  return {
    ...status,
    totalPercentSTR: accumulate(status, "percentSTR"),
  };
};

export const calculateSTR = <S extends DeclaredStatus>(
  status: S
): S & {
  totalBaseSTR: number;
  totalFlatSTR: number;
  totalPercentSTR: number;
  totalSTR: number;
} => {
  const STRcalcs = pipe(status)
    ._(totalBaseSTR)
    ._(totalPercentSTR)
    ._(totalFlatSTR)
    ._(totalSTR);

  return STRcalcs.value;
};
