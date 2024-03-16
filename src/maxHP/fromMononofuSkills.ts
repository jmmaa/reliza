import { DeclaredStatusMap } from "../types";

export const bushidoFlatMaxHP = <S extends DeclaredStatusMap>(
  status: S
) => {
  const skillLevel = status.bushidoLevel;
  const total = 10 * skillLevel;

  return {
    ...status,
    bushidoFlatMaxHP: total,
  };
};
