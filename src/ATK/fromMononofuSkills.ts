import { DeclaredStatusMap } from "../types";

export const bushidoPercentATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const isMainKatana = status.mainWeaponType === "katana";
  const skillLevel = status.bushidoLevel;

  const total = isMainKatana
    ? skillLevel >= 8
      ? 3
      : skillLevel >= 3
      ? 2
      : 1
    : 0;

  return {
    ...status,
    bushidoPercentATK: total,
  };
};
