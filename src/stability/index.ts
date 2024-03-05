import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalStability = <S extends DeclaredStatusMap>(status: S) => {
  const accumulated = accumulate(status, "stability");

  return { ...status, totalStability: accumulated };
};

export const calculateStability = <S extends DeclaredStatusMap>(
  status: S
) => {
  const calcs = pipe(status)._(totalStability);

  return calcs.value;
};
