import { DeclaredStatus } from "../types";
import { pipe, total, accumulate } from "./helper";

// calc
// this calc is just for consistency, but it is redundant
export const totalBaseINT = <S extends DeclaredStatus>(
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

export const totalFlatINT = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatINT: number } => {
  return {
    ...status,
    totalFlatINT: accumulate(status, "flatINT"),
  };
};

export const totalPercentINT = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentINT: number } => {
  return {
    ...status,
    totalPercentINT: accumulate(status, "percentINT"),
  };
};

export const calculateINT = <S extends DeclaredStatus>(
  status: S
): S & {
  totalBaseINT: number;
  totalFlatINT: number;
  totalPercentINT: number;
  totalINT: number;
} => {
  const INTcalcs = pipe(status)
    ._(totalBaseINT)
    ._(totalPercentINT)
    ._(totalFlatINT)
    ._(totalINT);

  return INTcalcs.value;
};
