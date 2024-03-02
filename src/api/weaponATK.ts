import {
  subWeaponRefinementBonusSubWeaponAttack,
  weaponRefinementBonusWeaponAttack,
} from "@jmmaa/pino";
import { total, accumulate, pipe } from "./helper";

import { DeclaredStatus, SubWeaponType } from "../types";

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

export const totalFlatMainWeaponATK = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatMainWeaponATK: number } => {
  return {
    ...status,
    totalFlatMainWeaponATK: accumulate(status, "flatWeaponATK"),
  };
};

export const totalPercentMainWeaponATK = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentMainWeaponATK: number } => {
  return {
    ...status,
    totalPercentMainWeaponATK: accumulate(status, "percentWeaponATK"),
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
export const totalBaseSubWeaponATK = <
  S extends { subWeaponType: SubWeaponType; subWeaponATK: number }
>(
  status: S
): S & { totalBaseSubWeaponATK: number } => {
  return {
    ...status,
    totalBaseSubWeaponATK:
      status.subWeaponType === "one-handed-sword" // only dual swords get to enjoy this stat
        ? status.subWeaponATK
        : 0,
  };
};

export const totalSubWeaponATK = <
  S extends {
    subWeaponType: SubWeaponType;
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
      status.subWeaponType === "one-handed-sword" // only dual swords get to enjoy this stat
        ? total(
            status.totalBaseSubWeaponATK,
            status.totalPercentSubWeaponATK,
            status.totalFlatSubWeaponATK
          ) + status.totalSubWeaponRefinementBonusSubWeaponATK
        : 0,
  };
};

/// CONTINUE HERE FINISH THE SUBWEAPON (make it work only with dualswords)

export const totalFlatSubWeaponATK = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatSubWeaponATK: number } => {
  return {
    ...status,
    totalFlatSubWeaponATK: accumulate(status, "flatWeaponATK"),
  };
};

export const totalPercentSubWeaponATK = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentSubWeaponATK: number } => {
  return {
    ...status,
    totalPercentSubWeaponATK: accumulate(status, "percentWeaponATK"),
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

export const calculateWeaponATK = <S extends DeclaredStatus>(
  status: S
): S & {
  totalBaseMainWeaponATK: number;
  totalPercentMainWeaponATK: number;
  totalFlatMainWeaponATK: number;
  totalMainWeaponRefinementBonusMainWeaponATK: number;
  totalMainWeaponATK: number;

  totalBaseSubWeaponATK: number;
  totalPercentSubWeaponATK: number;
  totalFlatSubWeaponATK: number;
  totalSubWeaponRefinementBonusSubWeaponATK: number;
  totalSubWeaponATK: number;
} =>
  pipe(status)
    // main weapon attack
    ._(totalBaseMainWeaponATK)
    ._(totalPercentMainWeaponATK)
    ._(totalFlatMainWeaponATK)
    ._(totalMainWeaponRefinementBonusMainWeaponATK)
    ._(totalMainWeaponATK)

    // sub weapon attack
    ._(totalBaseSubWeaponATK)
    ._(totalPercentSubWeaponATK)
    ._(totalFlatSubWeaponATK)
    ._(totalSubWeaponRefinementBonusSubWeaponATK)
    ._(totalSubWeaponATK).value;
