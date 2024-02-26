import { baseCriticalRate } from "@jmmaa/pino";
import * as h from "./helper";
import { StatGroupWithPredicate, SubWeaponType } from "../types";

export const totalBaseCriticalRate = <S extends { totalBaseCRT: number }>(
  status: S
): S & { totalBaseCriticalRate: number } => ({
  ...status,
  totalBaseCriticalRate: baseCriticalRate(status.totalBaseCRT),
});

export const totalCriticalRate = <
  S extends {
    totalBaseCriticalRate: number;
    totalPercentCriticalRate: number;
    totalFlatCriticalRate: number;
  }
>(
  status: S
): S & { totalCriticalRate: number } => {
  return {
    ...status,
    totalCriticalRate: h.total(
      status.totalBaseCriticalRate,
      status.totalPercentCriticalRate,
      status.totalFlatCriticalRate
    ),
  };
};

export const totalPercentCriticalRate = <
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
): S & { totalPercentCriticalRate: number } => {
  const sum = [
    h.accumulateFromMainWeaponStats("percentCriticalRate", status),
    h.accumulateFromSubWeaponStats("percentCriticalRate", status),
    h.accumulateFromAdditionalGearStats("percentCriticalRate", status),
    h.accumulateFromArmorStats("percentCriticalRate", status),
    h.accumulateFromSpecialGearStats("percentCriticalRate", status),
  ].reduce((t, c) => t + c, 0);

  return { ...status, totalPercentCriticalRate: sum };
};

export const totalFlatCriticalRate = <
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
): S & { totalFlatCriticalRate: number } => {
  const sum = [
    h.accumulateFromMainWeaponStats("flatCriticalRate", status),
    h.accumulateFromSubWeaponStats("flatCriticalRate", status),
    h.accumulateFromAdditionalGearStats("flatCriticalRate", status),
    h.accumulateFromArmorStats("flatCriticalRate", status),
    h.accumulateFromSpecialGearStats("flatCriticalRate", status),
  ].reduce((t, c) => t + c, 0);

  return { ...status, totalFlatCriticalRate: sum };
};
