import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatAGI = (
  value: number
): { name: "flatAGI"; value: number } => ({
  name: "flatAGI",
  value,
});

export const percentAGI = (
  value: number
): { name: "percentAGI"; value: number } => ({
  name: "percentAGI",
  value,
});

// calc
export const AGI =
  (value: number) =>
  <S>(status: S): S & { AGI: number } => ({
    ...status,
    AGI: value,
  });

// this calc is just for consistency, but it is redundant
export const totalBaseAGI = <S extends { AGI: number }>(
  status: S
): S & { totalBaseAGI: number } => ({
  ...status,
  totalBaseAGI: status.AGI,
});

export const totalAGI = <
  S extends {
    totalBaseAGI: number;
    totalPercentAGI: number;
    totalFlatAGI: number;
  }
>(
  status: S
): S & { totalAGI: number } => {
  return {
    ...status,
    totalAGI: total(
      status.totalBaseAGI,
      status.totalPercentAGI,
      status.totalFlatAGI
    ),
  };
};

export const totalFlatAGI = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalFlatAGI: number } => {
  return {
    ...status,
    totalFlatAGI: accumulateDeclaredStats(status, "flatAGI"),
  };
};

export const totalPercentAGI = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalPercentAGI: number } => {
  return {
    ...status,
    totalPercentAGI: accumulateDeclaredStats(status, "percentAGI"),
  };
};
