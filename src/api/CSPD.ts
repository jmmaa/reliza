import { baseCastSpeed, castTimeReduction } from "@jmmaa/pino";
import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatCSPD = (
  value: number
): { name: "flatCSPD"; value: number } => ({
  name: "flatCSPD",
  value,
});

export const percentCSPD = (
  value: number
): { name: "percentCSPD"; value: number } => ({
  name: "percentCSPD",
  value,
});

// calc
export const BaseCSPD =
  (value: number) =>
  <S>(status: S): S & { BaseCSPD: number } => ({
    ...status,
    BaseCSPD: value,
  });

// this calc is just for consistency, but it is redundant
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

export const totalFlatCSPD = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalFlatCSPD: number } => {
  return {
    ...status,
    totalFlatCSPD: accumulateDeclaredStats(status, "flatCSPD"),
  };
};

export const totalPercentCSPD = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalPercentCSPD: number } => {
  return {
    ...status,
    totalPercentCSPD: accumulateDeclaredStats(status, "percentCSPD"),
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
