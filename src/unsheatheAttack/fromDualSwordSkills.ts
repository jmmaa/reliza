import { DeclaredStatusMap } from "../types";

export const godSpeedPercentUnsheatheAttack = <
  S extends DeclaredStatusMap
>(
  status: S
) => {
  const skillLevel = status.godspeedLevel;
  const total = skillLevel + 5;

  return {
    ...status,
    godSpeedPercentUnsheatheAttack: total,
  };
};

export const flashBlastPercentUnsheatheAttack = <
  S extends DeclaredStatusMap
>(
  status: S
) => {
  const skillLevel = status.flashBlastLevel;
  const total = skillLevel + 5;

  return {
    ...status,
    flashBlastPercentUnsheatheAttack: total,
  };
};
