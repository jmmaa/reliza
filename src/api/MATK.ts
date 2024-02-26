import * as pino from "@jmmaa/pino";

import { total, accumulate } from "./helper";

import {
  MainWeaponType,
  StatGroupWithPredicate,
  SubWeaponType,
} from "../types";

export const totalBaseATK = <
  S extends {
    level: number;
    mainWeaponType: MainWeaponType;
    subWeaponType: SubWeaponType;
    totalMainWeaponATK: number;
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;
  }
>(
  status: S
): S & { totalBaseATK: number } => {
  if (status.mainWeaponType === "one-handed-sword") {
    return {
      ...status,
      totalBaseATK: pino.oneHandedSwordBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "two-handed-sword") {
    return {
      ...status,
      totalBaseATK: pino.twoHandedSwordBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bow") {
    return {
      ...status,
      totalBaseATK: pino.bowBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bowgun") {
    return {
      ...status,
      totalBaseATK: pino.bowgunBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "staff") {
    return {
      ...status,
      totalBaseATK: pino.staffBaseMagicAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "magic-device") {
    return {
      ...status,
      totalBaseATK: pino.magicDeviceBaseMagicAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "knuckle") {
    return {
      ...status,
      totalBaseATK: pino.knuckleBaseMagicAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "halberd") {
    return {
      ...status,
      totalBaseATK: pino.halberdBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX,
        status.totalAGI
      ),
    };
  } else if (status.mainWeaponType === "katana") {
    return {
      ...status,
      totalBaseATK: pino.katanaBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bare-hand") {
    // return {
    //   ...status,
    //   totalBaseATK: pino.bareHandMagicBaseAttack(
    //     status.level,
    //     status.totalMainWeaponATK,
    //     status.totalSTR
    //   ),
    // };

    throw Error("barehand matk calc is not implemented yet in pino!");
  } else if (
    status.subWeaponType === "one-handed-sword" &&
    status.mainWeaponType === "one-handed-sword"
  ) {
    // return {
    //   ...status,
    //   totalBaseATK: pino.dualWieldMagicBaseAttack(
    //     status.level,
    //     status.totalMainWeaponATK,
    //     status.totalSTR,
    //     status.totalDEX,
    //     status.totalAGI
    //   ),
    // };
    throw Error("dual wield matk calc is not implemented yet in pino!");
  } else {
    console.log(status);
    throw Error("invalid weaponType type");
  }
};

export const totalATK = <
  S extends {
    totalBaseATK: number;
    totalPercentATK: number;
    totalFlatATK: number;
  }
>(
  status: S
): S & { totalATK: number } => {
  return {
    ...status,
    totalATK: total(
      status.totalBaseATK,
      status.totalPercentATK,
      status.totalFlatATK
    ),
  };
};

export const totalPercentATK = <
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
): S & { totalPercentATK: number } => {
  return { ...status, totalPercentATK: accumulate(status, "percentATK") };
};

export const totalFlatATK = <
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
): S & { totalFlatATK: number } => {
  return { ...status, totalFlatATK: accumulate(status, "flatATK") };
};

export const subWeaponMagicDeviceATKModifier = <
  S extends { subWeaponType: SubWeaponType; totalPercentATK: number }
>(
  status: S
) => {
  return {
    ...status,
    totalPercentATK:
      status.subWeaponType === "magic-device"
        ? status.totalPercentATK - 15
        : status.totalPercentATK,
  };
};
