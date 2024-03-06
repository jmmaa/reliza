import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalMagicPierce = <S extends DeclaredStatusMap>(
  status: S
) => {
  const accumulated = accumulate(status, "magicPierce");

  return { ...status, totalMagicPierce: accumulated };
};

export const calculateMagicPierce = <S extends DeclaredStatusMap>(
  status: S
) => {
  const calcs = pipe(status)._(totalMagicPierce);

  return calcs.value;
};
