import { DeclaredStatusMap } from "../types";

export const swordMasteryPercentATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const skillLevel = status.swordMasteryLevel;

  const total = skillLevel >= 8 ? 3 : skillLevel >= 3 ? 2 : 1;
  return {
    ...status,
    swordMasteryPercentATK: total,
  };
};
