import { DeclaredStatusMap } from "../types";

export const godspeedFlatAGI = <S extends DeclaredStatusMap>(
  status: S
): S & { godSpeedFlatAGI: number } => {
  const skillLevel = status.godspeedLevel;

  const total = skillLevel * 1 + Math.max(skillLevel - 5, 0);

  return {
    ...status,
    godSpeedFlatAGI: total,
  };
};
