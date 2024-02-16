import { weaponRefinementBonusWeaponAttack } from "@jmmaa/pino";
import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatWeaponATK = (
  value: number
): { name: "flatWeaponATK"; value: number } => ({
  name: "flatWeaponATK",
  value,
});

export const percentWeaponATK = (
  value: number
): { name: "percentWeaponATK"; value: number } => ({
  name: "percentWeaponATK",
  value,
});

// this calc is just for consistency, but it is redundant
export const totalBaseWeaponATK = <S extends { baseWeaponATK: number }>(
  status: S
): S & { totalBaseWeaponATK: number } => ({
  ...status,
  totalBaseWeaponATK: status.baseWeaponATK,
});

export const totalWeaponATK = <
  S extends {
    totalBaseWeaponATK: number;
    totalPercentWeaponATK: number;
    totalFlatWeaponATK: number;
    totalWeaponRefinementBonusWeaponATK: number;
  }
>(
  status: S
): S & { totalWeaponATK: number } => {
  return {
    ...status,
    totalWeaponATK:
      total(
        status.totalBaseWeaponATK,
        status.totalPercentWeaponATK,
        status.totalFlatWeaponATK
      ) + status.totalWeaponRefinementBonusWeaponATK,
  };
};

export const totalFlatWeaponATK = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalFlatWeaponATK: number } => {
  return {
    ...status,
    totalFlatWeaponATK: accumulateDeclaredStats(status, "flatWeaponATK"),
  };
};

export const totalPercentWeaponATK = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalPercentWeaponATK: number } => {
  return {
    ...status,
    totalPercentWeaponATK: accumulateDeclaredStats(
      status,
      "percentWeaponATK"
    ),
  };
};

export const totalWeaponRefinementBonusWeaponATK = <
  S extends { weaponRefinement: number; baseWeaponATK: number }
>(
  status: S
): S & { totalWeaponRefinementBonusWeaponATK: number } => {
  return {
    ...status,
    totalWeaponRefinementBonusWeaponATK: weaponRefinementBonusWeaponAttack(
      status.weaponRefinement,
      status.baseWeaponATK
    ),
  };
};
