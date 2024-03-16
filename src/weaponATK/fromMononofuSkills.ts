import { DeclaredStatusMap } from "../types";

export const bushidoPercentWeaponATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const isMainKatana = status.mainWeaponType === "katana";
  const skillLevel = status.bushidoLevel;

  const total = isMainKatana ? skillLevel * 3 : 0;

  return {
    ...status,
    bushidoPercentWeaponATK: total,
  };
};
