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
export const AGI =
  (value: number) =>
  <S>(status: S): S & { AGI: number } => ({
    ...status,
    AGI: value,
  });

// calc
// this calc is just for consistency, but it is redundant
export const totalBaseAGI = <S extends { AGI: number }>(
  status: S
): S & { totalBaseAGI: number } => ({
  ...status,
  totalBaseAGI: status.AGI,
});

export const totalAGI = <
  S extends {
    totalBaseAGI: number;
    totalPercentAGI: number;
    totalFlatAGI: number;
  }
>(
  status: S
): S & { totalAGI: number } => {
  return {
    ...status,
    totalAGI: total(
      status.totalBaseAGI,
      status.totalPercentAGI,
      status.totalFlatAGI
    ),
  };
};

// calc

export const totalPercentAGI = <
  S extends {
    subWeaponType: SubWeaponType;
    mainWeaponStats?: StatGroupWithPredicate<S>[];
    subWeaponStats?: StatGroupWithPredicate<S>[];
    additionalGearStats?: StatGroupWithPredicate<S>[];
    armorStats?: StatGroupWithPredicate<S>[];
    specialGearStats?: StatGroupWithPredicate<S>[];
  }
>(
  status: S
): S & { totalPercentAGI: number } => {
  const sum = [
    accumulateFromMainWeaponStats("percentAGI", status),
    accumulateFromSubWeaponStats("percentAGI", status),
    accumulateFromAdditionalGearStats("percentAGI", status),
    accumulateFromArmorStats("percentAGI", status),
    accumulateFromSpecialGearStats("percentAGI", status),
  ].reduce((t, c) => t + c, 0);

  return { ...status, totalPercentAGI: sum };
};

export const totalFlatAGI = <
  S extends {
    subWeaponType: SubWeaponType;
    mainWeaponStats?: StatGroupWithPredicate<S>[];
    subWeaponStats?: StatGroupWithPredicate<S>[];
    additionalGearStats?: StatGroupWithPredicate<S>[];
    armorStats?: StatGroupWithPredicate<S>[];
    specialGearStats?: StatGroupWithPredicate<S>[];
  }
>(
  status: S
): S & { totalFlatAGI: number } => {
  const sum = [
    accumulateFromMainWeaponStats("flatAGI", status),
    accumulateFromSubWeaponStats("flatAGI", status),
    accumulateFromAdditionalGearStats("flatAGI", status),
    accumulateFromArmorStats("flatAGI", status),
    accumulateFromSpecialGearStats("flatAGI", status),
  ].reduce((t, c) => t + c, 0);

  return { ...status, totalFlatAGI: sum };
};
