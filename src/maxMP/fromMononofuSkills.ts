import { DeclaredStatusMap } from "../types";

export const bushidoFlatMaxMP = <S extends DeclaredStatusMap>(
  status: S
) => {
  const skillLevel = status.bushidoLevel;
  const total = skillLevel * 10;

  return {
    ...status,
    bushidoFlatMaxMP: total,
  };
};
