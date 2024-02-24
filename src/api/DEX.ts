import { SubWeaponType, StatGroupWithPredicate } from "../types";

import {
  total,
  accumulateFromMainWeaponStats,
  accumulateFromSubWeaponStats,
  accumulateFromAdditionalGearStats,
  accumulateFromArmorStats,
  accumulateFromSpecialGearStats,
  pipe,
} from "./helper";

// declare
export const DEX =
  (value: number) =>
  <S>(status: S): S & { DEX: number } => ({
    ...status,
    DEX: value,
  });

// calc
// this calc is just for consistency, but it is redundant
export const totalBaseDEX = <S extends { DEX: number }>(
  status: S
): S & { totalBaseDEX: number } => ({
  ...status,
  totalBaseDEX: status.DEX,
});

export const totalDEX = <
  S extends {
    totalBaseDEX: number;
    totalPercentDEX: number;
    totalFlatDEX: number;
  }
>(
  status: S
): S & { totalDEX: number } => {
  return {
    ...status,
    totalDEX: total(
      status.totalBaseDEX,
      status.totalPercentDEX,
      status.totalFlatDEX
    ),
  };
};

// calc

export const totalPercentDEX = <
  S extends {
    subWeaponType: SubWeaponType;
    mainWeaponStats: StatGroupWithPredicate<S>[];
    subWeaponStats: StatGroupWithPredicate<S>[];
    additionalGearStats: StatGroupWithPredicate<S>[];
    armorStats: StatGroupWithPredicate<S>[];
    specialGearStats: StatGroupWithPredicate<S>[];
  }
>(
  status: S
): S & { totalPercentDEX: number } => {
  const sum = [
    accumulateFromMainWeaponStats("percentDEX", status),
    accumulateFromSubWeaponStats("percentDEX", status),
    accumulateFromAdditionalGearStats("percentDEX", status),
    accumulateFromArmorStats("percentDEX", status),
    accumulateFromSpecialGearStats("percentDEX", status),
  ].reduce((t, c) => t + c, 0);

  return { ...status, totalPercentDEX: sum };
};

export const totalFlatDEX = <
  S extends {
    subWeaponType: SubWeaponType;
    mainWeaponStats: StatGroupWithPredicate<S>[];
    subWeaponStats: StatGroupWithPredicate<S>[];
    additionalGearStats: StatGroupWithPredicate<S>[];
    armorStats: StatGroupWithPredicate<S>[];
    specialGearStats: StatGroupWithPredicate<S>[];
  }
>(
  status: S
): S & { totalFlatDEX: number } => {
  const sum = [
    accumulateFromMainWeaponStats("flatDEX", status),
    accumulateFromSubWeaponStats("flatDEX", status),
    accumulateFromAdditionalGearStats("flatDEX", status),
    accumulateFromArmorStats("flatDEX", status),
    accumulateFromSpecialGearStats("flatDEX", status),
  ].reduce((t, c) => t + c, 0);

  return { ...status, totalFlatDEX: sum };
};
