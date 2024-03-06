import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalBaseAccuracy = <
  S extends DeclaredStatusMap & { totalDEX: number }
>(
  status: S
): S & { totalBaseAccuracy: number } => ({
  ...status,
  totalBaseAccuracy: pino.baseAccuracy(status.level, status.totalDEX),
});

export const totalPercentAccuracy = <S extends DeclaredStatusMap>(
  status: S
): S & { totalPercentAccuracy: number } => {
  return {
    ...status,
    totalPercentAccuracy: accumulate(status, "percentAccuracy"),
  };
};

export const totalFlatAccuracy = <S extends DeclaredStatusMap>(
  status: S
): S & { totalFlatAccuracy: number } => {
  return {
    ...status,
    totalFlatAccuracy: accumulate(status, "flatAccuracy"),
  };
};

export const totalAccuracy = <
  S extends {
    totalBaseAccuracy: number;
    totalPercentAccuracy: number;
    totalFlatAccuracy: number;
  }
>(
  status: S
): S & { totalAccuracy: number } => {
  return {
    ...status,
    totalAccuracy: total(
      status.totalBaseAccuracy,
      status.totalPercentAccuracy,
      status.totalFlatAccuracy
    ),
  };
};

export const calculateAccuracy = <
  S extends DeclaredStatusMap & { totalDEX: number }
>(
  status: S
): S & {
  totalBaseAccuracy: number;
  totalFlatAccuracy: number;
  totalPercentAccuracy: number;
  totalAccuracy: number;
} => {
  const calcs = pipe(status)
    ._(totalBaseAccuracy)
    ._(totalPercentAccuracy)
    ._(totalFlatAccuracy)
    ._(totalAccuracy);

  return calcs.value;
};
