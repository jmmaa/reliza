import { weaponRefinementBonusWeaponAttack } from "@jmmaa/pino";
import { accumulateStats } from "./helper";
import { total } from "./helper"; // remove this soon as pino.total gets fixed
import { StatSource } from "../types";

// ATK

// this calc is just for consistency, but it is redundant
export const totalBaseWeaponATK = <S extends { mainWeaponATK: number }>(
  status: S
): S & { totalBaseWeaponATK: number } => ({
  ...status,
  totalBaseWeaponATK: status.mainWeaponATK,
});

export const totalWeaponATK = <
  S extends {
    totalBaseWeaponATK: number;
    totalPercentWeaponATK: number;
    totalFlatWeaponATK: number;
    totalWeaponRefinementBonusWeaponATK: number;
  }
>(
  status: S
): S & { totalWeaponATK: number } => {
  return {
    ...status,
    totalWeaponATK:
      total(
        status.totalBaseWeaponATK,
        status.totalPercentWeaponATK,
        status.totalFlatWeaponATK
      ) + status.totalWeaponRefinementBonusWeaponATK,
  };
};

export const totalFlatWeaponATK = <S extends StatSource<S>>(
  status: S
): S & { totalFlatWeaponATK: number } => {
  return {
    ...status,
    totalFlatWeaponATK: accumulateStats(status, "flatWeaponATK"),
  };
};

export const totalPercentWeaponATK = <S extends StatSource<S>>(
  status: S
): S & { totalPercentWeaponATK: number } => {
  return {
    ...status,
    totalPercentWeaponATK: accumulateStats(status, "percentWeaponATK"),
  };
};

export const totalWeaponRefinementBonusWeaponATK = <
  S extends { mainWeaponRefinement: number; totalBaseWeaponATK: number }
>(
  status: S
): S & { totalWeaponRefinementBonusWeaponATK: number } => {
  return {
    ...status,
    totalWeaponRefinementBonusWeaponATK: weaponRefinementBonusWeaponAttack(
      status.mainWeaponRefinement,
      status.totalBaseWeaponATK
    ),
  };
};
