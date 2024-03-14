import { DeclaredStatusMap } from "../types";

export const swordMasteryPercentWeaponATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const skillLevel = status.swordMasteryLevel;

  const isAllowed =
    status.mainWeaponType === "one-handed-sword" ||
    status.mainWeaponType === "two-handed-sword";

  const total = isAllowed ? skillLevel * 3 : 0;
  return {
    ...status,
    swordMasteryPercentWeaponATK: total,
  };
};
