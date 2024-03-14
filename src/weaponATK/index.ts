import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";
import { swordMasteryPercentWeaponATK } from "./fromBladeSkills";

// ATK

// this calc is just for consistency, but it is redundant
export const totalBaseMainWeaponATK = <S extends DeclaredStatusMap>(
  status: S
): S & { totalBaseMainWeaponATK: number } => ({
  ...status,
  totalBaseMainWeaponATK: status.mainWeaponATK,
});

export const totalMainWeaponATK = <
  S extends DeclaredStatusMap & {
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

export const totalFlatMainWeaponATK = <S extends DeclaredStatusMap>(
  status: S
): S & { totalFlatMainWeaponATK: number } => {
  return {
    ...status,
    totalFlatMainWeaponATK: accumulate(status, "flatWeaponATK"),
  };
};

export const totalPercentMainWeaponATK = <
  S extends DeclaredStatusMap & { swordMasteryPercentWeaponATK: number }
>(
  status: S
): S & { totalPercentMainWeaponATK: number } => {
  return {
    ...status,
    totalPercentMainWeaponATK:
      accumulate(status, "percentWeaponATK") +
      status.swordMasteryPercentWeaponATK,
  };
};

export const totalMainWeaponRefinementBonusMainWeaponATK = <
  S extends DeclaredStatusMap & {
    totalBaseMainWeaponATK: number;
  }
>(
  status: S
): S & { totalMainWeaponRefinementBonusMainWeaponATK: number } => {
  return {
    ...status,
    totalMainWeaponRefinementBonusMainWeaponATK:
      pino.weaponRefinementBonusWeaponAttack(
        status.mainWeaponRefinement,
        status.totalBaseMainWeaponATK
      ),
  };
};

// for dual swords

// these funcs are essentially the same with mainWeaponATK variants, i just wrote it for explicitness on
// dual sword sub calculation

// refactor: make the values here only work with dual sword (dual sword mastery lvl1+, main/sub sword)

export const totalBaseSubWeaponATK = <S extends DeclaredStatusMap>(
  status: S
): S & { totalBaseSubWeaponATK: number } => {
  return {
    ...status,
    totalBaseSubWeaponATK: status.subWeaponATK,
  };
};

export const totalSubWeaponATK = <
  S extends DeclaredStatusMap & {
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

export const totalFlatSubWeaponATK = <S extends DeclaredStatusMap>(
  status: S
): S & { totalFlatSubWeaponATK: number } => {
  return {
    ...status,
    totalFlatSubWeaponATK: accumulate(status, "flatWeaponATK"),
  };
};

export const totalPercentSubWeaponATK = <
  S extends DeclaredStatusMap & { swordMasteryPercentWeaponATK: number }
>(
  status: S
): S & { totalPercentSubWeaponATK: number } => {
  return {
    ...status,
    totalPercentSubWeaponATK:
      accumulate(status, "percentWeaponATK") +
      status.swordMasteryPercentWeaponATK,
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
      pino.subWeaponRefinementBonusSubWeaponAttack(
        status.subWeaponRefinement,
        status.totalBaseSubWeaponATK
      ),
  };
};

export const calculateWeaponATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const calcs = pipe(status)
    // blade
    ._(swordMasteryPercentWeaponATK)

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
    ._(totalSubWeaponATK);

  return calcs.value;
};
