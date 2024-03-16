import { DeclaredStatusMap } from "../types";

export const bushidoFlatAccuracy = <S extends DeclaredStatusMap>(
  status: S
) => {
  const skillLevel = status.bushidoLevel;
  const total = skillLevel;

  return {
    ...status,
    bushidoFlatAccuracy: total,
  };
};
