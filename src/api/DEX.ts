import {
  DEXKey,
  SubWeaponTypeKey,
  MainWeaponStatsKey,
  SubWeaponStatsKey,
  AdditionalGearStatsKey,
  ArmorStatsKey,
  SpecialGearStatsKey,
  TotalBaseDEXKey,
  TotalPercentDEXKey,
  TotalFlatDEXKey,
  TotalDEXKey,
} from "../types";

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
  <S>(status: S): S & DEXKey => ({
    ...status,
    DEX: value,
  });

// calc
// this calc is just for consistency, but it is redundant
export const totalBaseDEX = <S extends DEXKey>(
  status: S
): S & TotalBaseDEXKey => ({
  ...status,
  totalBaseDEX: status.DEX,
});

export const totalDEX = <
  S extends TotalBaseDEXKey & TotalPercentDEXKey & TotalFlatDEXKey
>(
  status: S
): S & TotalDEXKey => {
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
  S extends SubWeaponTypeKey &
    MainWeaponStatsKey<S> &
    SubWeaponStatsKey<S> &
    AdditionalGearStatsKey<S> &
    ArmorStatsKey<S> &
    SpecialGearStatsKey<S>
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
  S extends SubWeaponTypeKey &
    MainWeaponStatsKey<S> &
    SubWeaponStatsKey<S> &
    AdditionalGearStatsKey<S> &
    ArmorStatsKey<S> &
    SpecialGearStatsKey<S>
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
