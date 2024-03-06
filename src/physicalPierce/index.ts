import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalPhysicalPierce = <S extends DeclaredStatusMap>(
  status: S
) => {
  const accumulated = accumulate(status, "physicalPierce");

  return { ...status, totalPhysicalPierce: accumulated };
};

export const calculatePhysicalPierce = <S extends DeclaredStatusMap>(
  status: S
) => {
  const calcs = pipe(status)._(totalPhysicalPierce);

  return calcs.value;
};
