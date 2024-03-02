import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatus } from "../types";

export const totalBaseATK = <
  S extends DeclaredStatus & {
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

export const totalPercentATK = <
  S extends DeclaredStatus & {
    subWeaponMagicDevicePercentATKModifier: number;
    magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue: number;
  }
>(
  status: S
): S & { totalPercentATK: number } => {
  const accumulated = accumulate(status, "percentATK");

  const total =
    accumulated +
    status.subWeaponMagicDevicePercentATKModifier +
    status.magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue;

  return {
    ...status,
    totalPercentATK: total,
  };
};

export const totalFlatATK = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatATK: number } => {
  return { ...status, totalFlatATK: accumulate(status, "flatATK") };
};

export const subWeaponMagicDevicePercentATKModifier = <
  S extends DeclaredStatus
>(
  status: S
): S & { subWeaponMagicDevicePercentATKModifier: number } => {
  return {
    ...status,
    subWeaponMagicDevicePercentATKModifier:
      status.subWeaponType === "magic-device" ? -15 : 0,
  };
};

export const magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue =
  <S extends DeclaredStatus>(
    status: S
  ): S & {
    magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue: number;
  } => {
    const weapon = status.mainWeaponType;
    const skillLevel = status.magicWarriorMasteryLevel;

    const ohsBonus = 5;

    const value = skillLevel * 10;

    const result =
      weapon === "one-handed-sword" ? value + ohsBonus : value;

    return {
      ...status,
      magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue:
        result,
    };
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

export const calculateATK = <
  S extends DeclaredStatus & {
    totalMainWeaponATK: number;
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;
  }
>(
  status: S
): S & {
  subWeaponMagicDevicePercentATKModifier: number;
  magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue: number;
  totalBaseATK: number;
  totalPercentATK: number;
  totalFlatATK: number;
  totalATK: number;
} => {
  const ATKcalcs = pipe(status)
    ._(subWeaponMagicDevicePercentATKModifier)
    ._(magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue)
    ._(totalBaseATK)
    ._(totalPercentATK)
    ._(totalFlatATK)
    ._(totalATK);

  return ATKcalcs.value;
};
