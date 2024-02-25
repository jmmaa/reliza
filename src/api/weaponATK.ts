import {
  subWeaponRefinementBonusSubWeaponAttack,
  weaponRefinementBonusWeaponAttack,
} from "@jmmaa/pino";
import { accumulateStats } from "./helper";
import {
  accumulateFromMainWeaponStats,
  accumulateFromSubWeaponStats,
  accumulateFromAdditionalGearStats,
  accumulateFromArmorStats,
  accumulateFromSpecialGearStats,
} from "./helper";
import { total } from "./helper"; // remove this soon as pino.total gets fixed
import {
  StatGroupWithPredicate,
  StatSource,
  SubWeaponType,
} from "../types";

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

export const totalFlatSubWeaponATK = <
  S extends {
    subWeaponType: SubWeaponType;
    mainWeaponStats: StatGroupWithPredicate<S>[];
    subWeaponStats: StatGroupWithPredicate<S>[];
    additionalGearStats: StatGroupWithPredicate<S>[];
    armorStats: StatGroupWithPredicate<S>[];
    specialGearStats: StatGroupWithPredicate<S>[];
  }
>(
  status: S
): S & { totalFlatSubWeaponATK: number } => {
  const sum = [
    accumulateFromMainWeaponStats("flatWeaponATK", status),
    accumulateFromSubWeaponStats("flatWeaponATK", status),
    accumulateFromAdditionalGearStats("flatWeaponATK", status),
    accumulateFromArmorStats("flatWeaponATK", status),
    accumulateFromSpecialGearStats("flatWeaponATK", status),
  ].reduce((t, c) => t + c, 0);

  return { ...status, totalFlatSubWeaponATK: sum };
};

export const totalPercentSubWeaponATK = <
  S extends {
    subWeaponType: SubWeaponType;
    mainWeaponStats: StatGroupWithPredicate<S>[];
    subWeaponStats: StatGroupWithPredicate<S>[];
    additionalGearStats: StatGroupWithPredicate<S>[];
    armorStats: StatGroupWithPredicate<S>[];
    specialGearStats: StatGroupWithPredicate<S>[];
  }
>(
  status: S
): S & { totalPercentSubWeaponATK: number } => {
  const sum = [
    accumulateFromMainWeaponStats("percentWeaponATK", status),
    accumulateFromSubWeaponStats("percentWeaponATK", status),
    accumulateFromAdditionalGearStats("percentWeaponATK", status),
    accumulateFromArmorStats("percentWeaponATK", status),
    accumulateFromSpecialGearStats("percentWeaponATK", status),
  ].reduce((t, c) => t + c, 0);

  return { ...status, totalPercentSubWeaponATK: sum };
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
