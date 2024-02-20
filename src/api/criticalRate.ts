import { baseCriticalRate } from "@jmmaa/pino";
import { accumulateStats, total } from "./helper";
import { StatSource } from "../types";

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
    totalCriticalRate: total(
      status.totalBaseCriticalRate,
      status.totalPercentCriticalRate,
      status.totalFlatCriticalRate
    ),
  };
};

export const totalFlatCriticalRate = <S extends StatSource>(
  status: S
): S & { totalFlatCriticalRate: number } => {
  return {
    ...status,
    totalFlatCriticalRate: accumulateStats(status, "flatCriticalRate"),
  };
};

export const totalPercentCriticalRate = <S extends StatSource>(
  status: S
): S & { totalPercentCriticalRate: number } => {
  return {
    ...status,
    totalPercentCriticalRate: accumulateStats(
      status,
      "percentCriticalRate"
    ),
  };
};
