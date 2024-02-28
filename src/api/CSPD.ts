import { baseCastSpeed, castTimeReduction } from "@jmmaa/pino";
import { accumulate, total } from "./helper";
import { DeclaredStatus } from "../types";

export const totalBaseCSPD = <
  S extends { level: number; totalAGI: number; totalDEX: number }
>(
  status: S
): S & { totalBaseCSPD: number } => ({
  ...status,
  totalBaseCSPD: baseCastSpeed(
    status.level,
    status.totalAGI,
    status.totalDEX
  ),
});

export const totalCSPD = <
  S extends {
    totalBaseCSPD: number;
    totalPercentCSPD: number;
    totalFlatCSPD: number;
  }
>(
  status: S
): S & { totalCSPD: number } => {
  return {
    ...status,
    totalCSPD: total(
      status.totalBaseCSPD,
      status.totalPercentCSPD,
      status.totalFlatCSPD
    ),
  };
};

export const totalFlatCSPD = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatCSPD: number } => {
  return {
    ...status,
    totalFlatCSPD: accumulate(status, "flatCSPD"),
  };
};

export const totalPercentCSPD = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentCSPD: number } => {
  return {
    ...status,
    totalPercentCSPD: accumulate(status, "percentCSPD"),
  };
};

export const totalCastTimeReduction = <
  S extends {
    totalCSPD: number;
  }
>(
  status: S
): S & { totalCastTimeReduction: number } => {
  return {
    ...status,
    totalCastTimeReduction: castTimeReduction(status.totalCSPD), // should not be floor?
  };
};
