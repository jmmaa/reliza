import * as pino from "@jmmaa/pino";
import {
  accumulate,
  pipe,
  total,
  accumulateEquipmentDef,
} from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalBaseMDEF = <
  S extends DeclaredStatusMap & { totalINT: number }
>(
  status: S
): S & { totalBaseMDEF: number } => ({
  ...status,
  totalBaseMDEF:
    status.armorType === "light"
      ? pino.lightArmorMagicDefense(
          status.level,
          status.totalINT,
          accumulateEquipmentDef(status)
        )
      : status.armorType === "heavy"
      ? pino.heavyArmorMagicDefense(
          status.level,
          status.totalINT,
          accumulateEquipmentDef(status)
        )
      : status.armorType === "none"
      ? pino.nakedMagicDefense(
          status.level,
          status.totalINT,
          accumulateEquipmentDef(status)
        )
      : status.armorType === "normal"
      ? pino.normalArmorMagicDefense(
          status.level,
          status.totalINT,
          accumulateEquipmentDef(status)
        )
      : 0,
});

export const totalPercentMDEF = <S extends DeclaredStatusMap>(
  status: S
): S & { totalPercentMDEF: number } => {
  return {
    ...status,
    totalPercentMDEF: accumulate(status, "percentMDEF"),
  };
};

export const totalFlatMDEF = <S extends DeclaredStatusMap>(
  status: S
): S & { totalFlatMDEF: number } => {
  return { ...status, totalFlatMDEF: accumulate(status, "flatMDEF") };
};

export const totalMDEF = <
  S extends {
    totalBaseMDEF: number;
    totalPercentMDEF: number;
    totalFlatMDEF: number;
  }
>(
  status: S
): S & { totalMDEF: number } => {
  return {
    ...status,
    totalMDEF: total(
      status.totalBaseMDEF,
      status.totalPercentMDEF,
      status.totalFlatMDEF
    ),
  };
};

export const calculateMDEF = <
  S extends DeclaredStatusMap & { totalINT: number }
>(
  status: S
): S & {
  totalBaseMDEF: number;
  totalFlatMDEF: number;
  totalPercentMDEF: number;
  totalMDEF: number;
} => {
  const calcs = pipe(status)
    ._(totalBaseMDEF)
    ._(totalPercentMDEF)
    ._(totalFlatMDEF)
    ._(totalMDEF);

  return calcs.value;
};
