import { DeclaredStatusMap } from "../types";

export const magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue =
  <S extends DeclaredStatusMap>(
    status: S
  ): S & {
    magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue: number;
  } => {
    const weapon = status.mainWeaponType;
    const skillLevel = status.magicWarriorMasteryLevel;

    const total =
      weapon === "one-handed-sword" ? skillLevel + 5 : skillLevel;

    console.log(total);

    return {
      ...status,
      magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue:
        total,
    };
  };

export const resonanceFlatATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const isAllowed =
    status.subWeaponType === "magic-device" && status.resonanceIsActive;

  const mdRefine = status.subWeaponRefinement;
  const skillLevel = status.resonanceLevel;

  const FlatATK = skillLevel * 2 + mdRefine * 2;

  const total = isAllowed ? FlatATK : 0;

  return {
    ...status,
    resonanceFlatATK: total,
  };
};
