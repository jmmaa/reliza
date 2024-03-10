import { DeclaredStatusMap } from "../types";

export const magicWarriorMasteryFlatMATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const isAllowed = status.subWeaponType === "magic-device";
  const skillLevel = status.magicWarriorMasteryLevel;

  const total = isAllowed
    ? skillLevel * 2 + (skillLevel - 5 > 0 ? skillLevel - 5 : 0)
    : 0;

  return { ...status, magicWarriorMasteryFlatMATK: total };
};

export const conversionFlatMATK = <
  S extends DeclaredStatusMap & { totalMainWeaponATK: number }
>(
  status: S
): S & { conversionFlatMATK: number } => {
  const skillLevel = status.conversionLevel;

  const isAllowed =
    status.mainWeaponType === "two-handed-sword" ||
    status.mainWeaponType === "bowgun" ||
    status.mainWeaponType === "knuckle" ||
    status.mainWeaponType === "one-handed-sword";

  const fromWeaponATK = Math.floor(
    ((skillLevel * skillLevel) / 100) *
      (status.mainWeaponType === "knuckle"
        ? status.totalMainWeaponATK * 0.5
        : status.totalMainWeaponATK)
  );
  const bonusFlatMATK = skillLevel * 2;

  const total = isAllowed ? bonusFlatMATK + fromWeaponATK : 0;

  return {
    ...status,
    conversionFlatMATK: total,
  };
};

export const resonanceFlatMATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const isAllowed =
    status.subWeaponType === "magic-device" && status.resonanceIsActive;

  const mdRefine = status.subWeaponRefinement;
  const skillLevel = status.resonanceLevel;

  const flatMATK = skillLevel * 2 + mdRefine * 2;

  const total = isAllowed ? flatMATK : 0;

  return {
    ...status,
    resonanceFlatMATK: total,
  };
};
