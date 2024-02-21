import { baseMaxHP } from "@jmmaa/pino";
import { accumulateStats, total } from "./helper";
import { StatSource } from "../types";

export const totalBaseMaxHP = <
  S extends { level: number; totalVIT: number }
>(
  status: S
): S & { totalBaseMaxHP: number } => ({
  ...status,
  totalBaseMaxHP: baseMaxHP(status.level, status.totalVIT),
});

export const totalMaxHP = <
  S extends {
    totalBaseMaxHP: number;
    totalPercentMaxHP: number;
    totalFlatMaxHP: number;
  }
>(
  status: S
): S & { totalMaxHP: number } => {
  return {
    ...status,
    totalMaxHP: total(
      status.totalBaseMaxHP,
      status.totalPercentMaxHP,
      status.totalFlatMaxHP
    ),
  };
};

export const totalFlatMaxHP = <S extends StatSource<S>>(
  status: S
): S & { totalFlatMaxHP: number } => {
  return {
    ...status,
    totalFlatMaxHP: accumulateStats(status, "flatMaxHP"),
  };
};

export const totalPercentMaxHP = <S extends StatSource<S>>(
  status: S
): S & { totalPercentMaxHP: number } => {
  return {
    ...status,
    totalPercentMaxHP: accumulateStats(status, "percentMaxHP"),
  };
};
