import { DeclaredStatus } from "../types";
import { total, accumulate } from "./helper";

// // declare
// export const AGI =
//   (value: number) =>
//   <S>(status: S): S & { AGI: number } => ({
//     ...status,
//     AGI: value,
//   });

// calc
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

// calc

export const totalPercentAGI = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentAGI: number } => {
  return { ...status, totalPercentAGI: accumulate(status, "percentAGI") };
};

export const totalFlatAGI = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatAGI: number } => {
  return { ...status, totalFlatAGI: accumulate(status, "flatAGI") };
};
