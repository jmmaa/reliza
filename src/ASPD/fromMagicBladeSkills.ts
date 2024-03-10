import { DeclaredStatusMap } from "../types";

export const resonanceFlatASPD = <S extends DeclaredStatusMap>(
  status: S
) => {
  const isAllowed =
    status.subWeaponType === "magic-device" && status.resonanceIsActive;

  const skillLevel = status.resonanceLevel;
  const mdRefine = status.subWeaponRefinement;

  const FlatASPD = skillLevel * 25 + mdRefine * 50;

  const total = isAllowed ? FlatASPD : 0;

  return {
    ...status,
    resonanceFlatASPD: total,
  };
};
