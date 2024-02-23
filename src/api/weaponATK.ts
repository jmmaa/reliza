import {
  subWeaponRefinementBonusSubWeaponAttack,
  weaponRefinementBonusWeaponAttack,
} from "@jmmaa/pino";
import { accumulateStats } from "./helper";
import { total } from "./helper"; // remove this soon as pino.total gets fixed
import { StatSource } from "../types";

// ATK

// this calc is just for consistency, but it is redundant
export const totalBaseMainWeaponATK = <
  S extends { mainWeaponATK: number }
>(
  status: S
): S & { totalBaseMainWeaponATK: number } => ({
  ...status,
  totalBaseMainWeaponATK: status.mainWeaponATK,
});

export const totalMainWeaponATK = <
  S extends {
    totalBaseMainWeaponATK: number;
    totalPercentMainWeaponATK: number;
    totalFlatMainWeaponATK: number;
    totalMainWeaponRefinementBonusMainWeaponATK: number;
  }
>(
  status: S
): S & { totalMainWeaponATK: number } => {
  return {
    ...status,
    totalMainWeaponATK:
      total(
        status.totalBaseMainWeaponATK,
        status.totalPercentMainWeaponATK,
        status.totalFlatMainWeaponATK
      ) + status.totalMainWeaponRefinementBonusMainWeaponATK,
  };
};

export const totalFlatMainWeaponATK = <S extends StatSource<S>>(
  status: S
): S & { totalFlatMainWeaponATK: number } => {
  return {
    ...status,
    totalFlatMainWeaponATK: accumulateStats(status, "flatWeaponATK"),
  };
};

export const totalPercentMainWeaponATK = <S extends StatSource<S>>(
  status: S
): S & { totalPercentMainWeaponATK: number } => {
  return {
    ...status,
    totalPercentMainWeaponATK: accumulateStats(status, "percentWeaponATK"),
  };
};

export const totalMainWeaponRefinementBonusMainWeaponATK = <
  S extends {
    mainWeaponRefinement: number;
    totalBaseMainWeaponATK: number;
  }
>(
  status: S
): S & { totalMainWeaponRefinementBonusMainWeaponATK: number } => {
  return {
    ...status,
    totalMainWeaponRefinementBonusMainWeaponATK:
      weaponRefinementBonusWeaponAttack(
        status.mainWeaponRefinement,
        status.totalBaseMainWeaponATK
      ),
  };
};

// for dual swords

// these funcs are essentially the same with mainWeaponATK variants, i just wrote it for explicitness on
// dual sword sub calculation
export const totalBaseSubWeaponATK = <S extends { subWeaponATK: number }>(
  status: S
): S & { totalBaseSubWeaponATK: number } => ({
  ...status,
  totalBaseSubWeaponATK: status.subWeaponATK,
});

export const totalSubWeaponATK = <
  S extends {
    totalBaseSubWeaponATK: number;
    totalPercentSubWeaponATK: number;
    totalFlatSubWeaponATK: number;
    totalSubWeaponRefinementBonusSubWeaponATK: number;
  }
>(
  status: S
): S & { totalSubWeaponATK: number } => {
  return {
    ...status,
    totalSubWeaponATK:
      total(
        status.totalBaseSubWeaponATK,
        status.totalPercentSubWeaponATK,
        status.totalFlatSubWeaponATK
      ) + status.totalSubWeaponRefinementBonusSubWeaponATK,
  };
};

export const totalFlatSubWeaponATK = <S extends StatSource<S>>(
  status: S
): S & { totalFlatSubWeaponATK: number } => {
  return {
    ...status,
    totalFlatSubWeaponATK: accumulateStats(status, "flatWeaponATK"),
  };
};

export const totalPercentSubWeaponATK = <S extends StatSource<S>>(
  status: S
): S & { totalPercentSubWeaponATK: number } => {
  return {
    ...status,
    totalPercentSubWeaponATK: accumulateStats(status, "percentWeaponATK"),
  };
};

export const totalSubWeaponRefinementBonusSubWeaponATK = <
  S extends {
    subWeaponRefinement: number;
    totalBaseSubWeaponATK: number;
  }
>(
  status: S
): S & { totalSubWeaponRefinementBonusSubWeaponATK: number } => {
  return {
    ...status,
    totalSubWeaponRefinementBonusSubWeaponATK:
      subWeaponRefinementBonusSubWeaponAttack(
        status.subWeaponRefinement,
        status.totalBaseSubWeaponATK
      ),
  };
};
