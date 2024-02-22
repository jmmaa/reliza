import {
  AGIKey,
  SubWeaponTypeKey,
  MainWeaponStatsKey,
  SubWeaponStatsKey,
  AdditionalGearStatsKey,
  ArmorStatsKey,
  SpecialGearStatsKey,
  TotalBaseAGIKey,
  TotalPercentAGIKey,
  TotalFlatAGIKey,
  TotalAGIKey,
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
export const AGI =
  (value: number) =>
  <S>(status: S): S & AGIKey => ({
    ...status,
    AGI: value,
  });

// calc
// this calc is just for consistency, but it is redundant
export const totalBaseAGI = <S extends AGIKey>(
  status: S
): S & TotalBaseAGIKey => ({
  ...status,
  totalBaseAGI: status.AGI,
});

export const totalAGI = <
  S extends TotalBaseAGIKey & TotalPercentAGIKey & TotalFlatAGIKey
>(
  status: S
): S & TotalAGIKey => {
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
  S extends SubWeaponTypeKey &
    MainWeaponStatsKey<S> &
    SubWeaponStatsKey<S> &
    AdditionalGearStatsKey<S> &
    ArmorStatsKey<S> &
    SpecialGearStatsKey<S>
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
  S extends SubWeaponTypeKey &
    MainWeaponStatsKey<S> &
    SubWeaponStatsKey<S> &
    AdditionalGearStatsKey<S> &
    ArmorStatsKey<S> &
    SpecialGearStatsKey<S>
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
