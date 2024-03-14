import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";
import { godspeedFlatAGI } from "./fromDualSwordSkills";

export const totalBaseAGI = <S extends { AGI: number }>(
  status: S
): S & { totalBaseAGI: number } => ({
  ...status,
  totalBaseAGI: status.AGI,
});

export const totalPercentAGI = <S extends DeclaredStatusMap>(
  status: S
): S & { totalPercentAGI: number } => {
  return { ...status, totalPercentAGI: accumulate(status, "percentAGI") };
};

export const totalFlatAGI = <
  S extends DeclaredStatusMap & {
    godSpeedFlatAGI: number;
  }
>(
  status: S
): S & { totalFlatAGI: number } => {
  return {
    ...status,
    totalFlatAGI: accumulate(status, "flatAGI") + status.godSpeedFlatAGI,
  };
};

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

export const calculateAGI = <S extends DeclaredStatusMap>(
  status: S
): S & {
  totalBaseAGI: number;
  totalFlatAGI: number;
  totalPercentAGI: number;
  totalAGI: number;
} => {
  const calcs = pipe(status)
    // dual sword
    ._(godspeedFlatAGI)

    ._(totalBaseAGI)
    ._(totalPercentAGI)
    ._(totalFlatAGI)
    ._(totalAGI);

  return calcs.value;
};
