import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalShortRangeDamage = <S extends DeclaredStatusMap>(
  status: S
) => {
  const accumulated = accumulate(status, "shortRangeDamage");

  return { ...status, totalShortRangeDamage: accumulated };
};

export const calculateShortRangeDamage = <S extends DeclaredStatusMap>(
  status: S
) => {
  const calcs = pipe(status)._(totalShortRangeDamage);

  return calcs.value;
};
