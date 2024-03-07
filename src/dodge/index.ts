import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalBaseDodge = <
  S extends DeclaredStatusMap & { totalAGI: number }
>(
  status: S
): S & { totalBaseDodge: number } => ({
  ...status,
  totalBaseDodge:
    status.armorType === "light"
      ? pino.lightArmorDodge(status.level, status.totalAGI)
      : status.armorType === "heavy"
      ? pino.heavyArmorDodge(status.level, status.totalAGI)
      : status.armorType === "none"
      ? pino.nakedDodge(status.level, status.totalAGI)
      : status.armorType === "normal"
      ? pino.normalArmorDodge(status.level, status.totalAGI)
      : 0,
});

export const totalPercentDodge = <S extends DeclaredStatusMap>(
  status: S
): S & { totalPercentDodge: number } => {
  return {
    ...status,
    totalPercentDodge: accumulate(status, "percentDodge"),
  };
};

export const totalFlatDodge = <S extends DeclaredStatusMap>(
  status: S
): S & { totalFlatDodge: number } => {
  return { ...status, totalFlatDodge: accumulate(status, "flatDodge") };
};

export const totalDodge = <
  S extends {
    totalBaseDodge: number;
    totalPercentDodge: number;
    totalFlatDodge: number;
  }
>(
  status: S
): S & { totalDodge: number } => {
  return {
    ...status,
    totalDodge: total(
      status.totalBaseDodge,
      status.totalPercentDodge,
      status.totalFlatDodge
    ),
  };
};

export const calculateDodge = <
  S extends DeclaredStatusMap & { totalAGI: number }
>(
  status: S
): S & {
  totalBaseDodge: number;
  totalFlatDodge: number;
  totalPercentDodge: number;
  totalDodge: number;
} => {
  const calcs = pipe(status)
    ._(totalBaseDodge)
    ._(totalPercentDodge)
    ._(totalFlatDodge)
    ._(totalDodge);

  return calcs.value;
};
