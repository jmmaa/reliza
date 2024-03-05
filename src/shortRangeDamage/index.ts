import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalLongRangeDamage = <S extends DeclaredStatusMap>(
  status: S
) => {
  const accumulated = accumulate(status, "longRangeDamage");

  return { ...status, totalLongRangeDamage: accumulated };
};

export const calculateLongRangeDamage = <S extends DeclaredStatusMap>(
  status: S
) => {
  const calcs = pipe(status)._(totalLongRangeDamage);

  return calcs.value;
};
