import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalBaseCSPD = <
  S extends { level: number; totalAGI: number; totalDEX: number }
>(
  status: S
): S & { totalBaseCSPD: number } => ({
  ...status,
  totalBaseCSPD: pino.baseCastSpeed(
    status.level,
    status.totalAGI,
    status.totalDEX
  ),
});

export const totalFlatCSPD = <
  S extends DeclaredStatusMap & {
    magicWarriorMasteryBonusFlatCSPD: number;
    resonanceBonusFlatCSPD: number;
  }
>(
  status: S
): S & { totalFlatCSPD: number } => {
  const acquired = accumulate(status, "flatCSPD");

  const total =
    acquired +
    status.magicWarriorMasteryBonusFlatCSPD +
    status.resonanceBonusFlatCSPD;

  return {
    ...status,
    totalFlatCSPD: total,
  };
};

export const totalPercentCSPD = <S extends DeclaredStatusMap>(
  status: S
): S & { totalPercentCSPD: number } => {
  return {
    ...status,
    totalPercentCSPD: accumulate(status, "percentCSPD"),
  };
};

export const resonanceBonusFlatCSPD = <
  S extends DeclaredStatusMap & {
    resonanceLevel: number;
    isResonanceActive: boolean;
  }
>(
  status: S
) => {
  const isAllowed =
    status.subWeaponType === "magic-device" && status.isResonanceActive;

  const skillLevel = status.resonanceLevel;
  const mdRefine = status.subWeaponRefinement;

  const bonusFlatCSPD = skillLevel * 25 + mdRefine * 50;

  const total = isAllowed ? bonusFlatCSPD : 0;

  return {
    ...status,
    resonanceBonusFlatCSPD: total,
  };
};

export const totalCSPD = <
  S extends {
    totalBaseCSPD: number;
    totalPercentCSPD: number;
    totalFlatCSPD: number;
  }
>(
  status: S
): S & { totalCSPD: number } => {
  return {
    ...status,
    totalCSPD: total(
      status.totalBaseCSPD,
      status.totalPercentCSPD,
      status.totalFlatCSPD
    ),
  };
};

export const totalCastTimeReduction = <
  S extends {
    totalCSPD: number;
  }
>(
  status: S
): S & { totalCastTimeReduction: number } => {
  return {
    ...status,
    totalCastTimeReduction: pino.castTimeReduction(status.totalCSPD), // should not be floor?
  };
};

export const magicWarriorMasteryBonusFlatCSPD = <
  S extends DeclaredStatusMap
>(
  status: S
) => {
  const bonus = status.magicWarriorMasteryLevel * 10;

  return { ...status, magicWarriorMasteryBonusFlatCSPD: bonus };
};

export const calculateCSPD = <
  S extends DeclaredStatusMap & { totalAGI: number; totalDEX: number }
>(
  status: S
): S & {
  magicWarriorMasteryBonusFlatCSPD: number;
  totalBaseCSPD: number;
  totalPercentCSPD: number;
  totalFlatCSPD: number;
  totalCSPD: number;
  totalCastTimeReduction: number;
} => {
  const calcs = pipe(status)
    ._(magicWarriorMasteryBonusFlatCSPD)
    ._(resonanceBonusFlatCSPD)
    ._(totalBaseCSPD)
    ._(totalPercentCSPD)
    ._(totalFlatCSPD)
    ._(totalCSPD)
    ._(totalCastTimeReduction);

  return calcs.value;
};
