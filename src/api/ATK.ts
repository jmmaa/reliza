import * as pino from "@jmmaa/pino";

import { total, accumulate, pipe } from "./helper";

import { DeclaredStatus, MainWeaponType, SubWeaponType } from "../types";

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
      totalBaseATK: pino.oneHandedSwordBaseAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "two-handed-sword") {
    return {
      ...status,
      totalBaseATK: pino.twoHandedSwordBaseAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bow") {
    return {
      ...status,
      totalBaseATK: pino.bowBaseAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bowgun") {
    return {
      ...status,
      totalBaseATK: pino.bowgunBaseAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "staff") {
    return {
      ...status,
      totalBaseATK: pino.staffBaseAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalSTR,
        status.totalINT
      ),
    };
  } else if (status.mainWeaponType === "magic-device") {
    return {
      ...status,
      totalBaseATK: pino.magicDeviceBaseAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalAGI,
        status.totalINT
      ),
    };
  } else if (status.mainWeaponType === "knuckle") {
    return {
      ...status,
      totalBaseATK: pino.knuckleBaseAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalAGI,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "halberd") {
    return {
      ...status,
      totalBaseATK: pino.halberdBaseAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalSTR,
        status.totalAGI
      ),
    };
  } else if (status.mainWeaponType === "katana") {
    return {
      ...status,
      totalBaseATK: pino.katanaBaseAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bare-hand") {
    return {
      ...status,
      totalBaseATK: pino.bareHandBaseAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalSTR
      ),
    };
  } else if (
    status.subWeaponType === "one-handed-sword" &&
    status.mainWeaponType === "one-handed-sword"
  ) {
    return {
      ...status,
      totalBaseATK: pino.dualWieldBaseAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalSTR,
        status.totalDEX,
        status.totalAGI
      ),
    };
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

    subWeaponMagicDeviceATKModifier: number;
    magicWarriorMasteryPenaltyNullificationValue: number;
  }
>(
  status: S
): S & { totalATK: number } => {
  const totalPercentATK =
    status.totalPercentATK +
    status.subWeaponMagicDeviceATKModifier +
    status.magicWarriorMasteryPenaltyNullificationValue;

  return {
    ...status,
    totalATK: total(
      status.totalBaseATK,
      totalPercentATK,
      status.totalFlatATK
    ),
  };
};

export const totalPercentATK = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentATK: number } => {
  return {
    ...status,
    totalPercentATK: accumulate(status, "percentATK"),
  };
};

export const totalFlatATK = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatATK: number } => {
  return { ...status, totalFlatATK: accumulate(status, "flatATK") };
};

export const subWeaponMagicDeviceATKModifier = <
  S extends { subWeaponType: SubWeaponType }
>(
  status: S
): S & { subWeaponMagicDeviceATKModifier: number } => {
  return {
    ...status,
    subWeaponMagicDeviceATKModifier:
      status.subWeaponType === "magic-device" ? -15 : 0,
  };
};

export const magicWarriorMasteryPenaltyNullificationValue = <
  S extends DeclaredStatus
>(
  status: S
): S & { magicWarriorMasteryPenaltyNullificationValue: number } => {
  const weapon = status.mainWeaponType;

  const skillLevel = status.magicWarriorMasteryLevel;

  const ohsBonus = 5;

  const value = skillLevel * 10;

  const result = weapon === "one-handed-sword" ? value + ohsBonus : value;

  return {
    ...status,
    magicWarriorMasteryPenaltyNullificationValue: result,
  };
};

export const calculateATK = <
  S extends DeclaredStatus & {
    level: number;
    totalMainWeaponATK: number;
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;
  }
>(
  status: S
): S & {
  subWeaponMagicDeviceATKModifier: number;
  magicWarriorMasteryPenaltyNullificationValue: number;
  totalBaseATK: number;
  totalPercentATK: number;
  totalFlatATK: number;
  totalATK: number;
} =>
  pipe(status)
    ._(subWeaponMagicDeviceATKModifier)
    ._(magicWarriorMasteryPenaltyNullificationValue)
    ._(totalBaseATK)
    ._(totalPercentATK)
    ._(totalFlatATK)
    ._(totalATK).value;
