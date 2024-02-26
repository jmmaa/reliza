import { baseCriticalDamage } from "@jmmaa/pino";
import * as h from "./helper";
import {
  StatGroupWithPredicate,
  StatSource,
  SubWeaponType,
} from "../types";

export const totalBaseCriticalDamage = <
  S extends { totalSTR: number; totalAGI: number }
>(
  status: S
): S & { totalBaseCriticalDamage: number } => ({
  ...status,
  totalBaseCriticalDamage: baseCriticalDamage(
    status.totalAGI,
    status.totalSTR
  ),
});

export const totalCriticalDamage = <
  S extends {
    totalBaseCriticalDamage: number;
    totalPercentCriticalDamage: number;
    totalFlatCriticalDamage: number;
  }
>(
  status: S
): S & { totalCriticalDamage: number } => {
  return {
    ...status,
    totalCriticalDamage: h.total(
      status.totalBaseCriticalDamage,
      status.totalPercentCriticalDamage,
      status.totalFlatCriticalDamage
    ),
  };
};

export const totalPercentCriticalDamage = <S extends StatSource<S>>(
  status: S
): S & { totalPercentCriticalDamage: number } => {
  return {
    ...status,
    totalPercentCriticalDamage: h.accumulate(
      status,
      "percentCriticalDamage"
    ),
  };
};

export const totalFlatCriticalDamage = <S extends StatSource<S>>(
  status: S
): S & { totalFlatCriticalDamage: number } => {
  return {
    ...status,
    totalFlatCriticalDamage: h.accumulate(status, "flatCriticalDamage"),
  };
};
