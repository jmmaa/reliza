import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalAggro = <S extends DeclaredStatusMap>(
  status: S
): S & { totalAggro: number } => {
  return {
    ...status,
    totalAggro: accumulate(status, "aggro"),
  };
};

export const calculateAggro = <S extends DeclaredStatusMap>(
  status: S
): S & { totalAggro: number } => {
  const calcs = pipe(status)._(totalAggro);

  return calcs.value;
};
