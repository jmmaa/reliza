import * as pino from "@jmmaa/pino";
import {
  accumulate,
  pipe,
  total,
  accumulateEquipmentDef,
} from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalBaseDEF = <
  S extends DeclaredStatusMap & { totalVIT: number }
>(
  status: S
): S & { totalBaseDEF: number } => ({
  ...status,
  totalBaseDEF:
    status.armorType === "light"
      ? pino.lightArmorDefense(
          status.level,
          status.totalVIT,
          accumulateEquipmentDef(status)
        )
      : status.armorType === "heavy"
      ? pino.heavyArmorDefense(
          status.level,
          status.totalVIT,
          accumulateEquipmentDef(status)
        )
      : status.armorType === "none"
      ? pino.nakedDefense(
          status.level,
          status.totalVIT,
          accumulateEquipmentDef(status)
        )
      : status.armorType === "normal"
      ? pino.normalArmorDefense(
          status.level,
          status.totalVIT,
          accumulateEquipmentDef(status)
        )
      : 0,
});

export const totalPercentDEF = <S extends DeclaredStatusMap>(
  status: S
): S & { totalPercentDEF: number } => {
  return {
    ...status,
    totalPercentDEF: accumulate(status, "percentDEF"),
  };
};

export const totalFlatDEF = <S extends DeclaredStatusMap>(
  status: S
): S & { totalFlatDEF: number } => {
  return { ...status, totalFlatDEF: accumulate(status, "flatDEF") };
};

export const totalDEF = <
  S extends {
    totalBaseDEF: number;
    totalPercentDEF: number;
    totalFlatDEF: number;
  }
>(
  status: S
): S & { totalDEF: number } => {
  return {
    ...status,
    totalDEF: total(
      status.totalBaseDEF,
      status.totalPercentDEF,
      status.totalFlatDEF
    ),
  };
};

export const calculateDEF = <
  S extends DeclaredStatusMap & { totalVIT: number }
>(
  status: S
): S & {
  totalBaseDEF: number;
  totalFlatDEF: number;
  totalPercentDEF: number;
  totalDEF: number;
} => {
  const calcs = pipe(status)
    ._(totalBaseDEF)
    ._(totalPercentDEF)
    ._(totalFlatDEF)
    ._(totalDEF);

  return calcs.value;
};
