import { DeclaredStatusMap } from "../types";

export const magicWarriorMasteryFlatCSPD = <S extends DeclaredStatusMap>(
  status: S
) => {
  const isAllowed = status.subWeaponType === "magic-device";
  const skillLevel = status.magicWarriorMasteryLevel;

  const total = isAllowed ? skillLevel * 10 : 0;

  return { ...status, magicWarriorMasteryFlatCSPD: total };
};

export const resonanceFlatCSPD = <S extends DeclaredStatusMap>(
  status: S
) => {
  const isAllowed = status.subWeaponType === "magic-device";
  const isActive = status.resonanceIsActive;
  const skillLevel = status.resonanceLevel;
  const mdRefine = status.subWeaponRefinement;

  const total =
    isAllowed && isActive ? skillLevel * 25 + mdRefine * 50 : 0;

  return {
    ...status,
    resonanceFlatCSPD: total,
  };
};
