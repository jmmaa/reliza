import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalBaseINT = <S extends { INT: number }>(
  status: S
): S & { totalBaseINT: number } => ({
  ...status,
  totalBaseINT: status.INT,
});

export const totalPercentINT = <S extends DeclaredStatusMap>(
  status: S
): S & { totalPercentINT: number } => {
  return { ...status, totalPercentINT: accumulate(status, "percentINT") };
};

export const totalFlatINT = <S extends DeclaredStatusMap>(
  status: S
): S & { totalFlatINT: number } => {
  return { ...status, totalFlatINT: accumulate(status, "flatINT") };
};

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

export const calculateINT = <S extends DeclaredStatusMap>(
  status: S
): S & {
  totalBaseINT: number;
  totalFlatINT: number;
  totalPercentINT: number;
  totalINT: number;
} => {
  const calcs = pipe(status)
    ._(totalBaseINT)
    ._(totalPercentINT)
    ._(totalFlatINT)
    ._(totalINT);

  return calcs.value;
};
