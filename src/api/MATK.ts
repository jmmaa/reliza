import * as pino from "@jmmaa/pino";

import { total, accumulate, pipe } from "./helper";

import { MainWeaponType, DeclaredStatus, SubWeaponType } from "../types";

export const totalBaseMATK = <
  S extends DeclaredStatus & {
    totalMainWeaponATK: number;
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;
  }
>(
  status: S
): S & { totalBaseMATK: number } => {
  if (status.mainWeaponType === "one-handed-sword") {
    return {
      ...status,
      totalBaseMATK: pino.oneHandedSwordBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "two-handed-sword") {
    return {
      ...status,
      totalBaseMATK: pino.twoHandedSwordBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bow") {
    return {
      ...status,
      totalBaseMATK: pino.bowBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bowgun") {
    return {
      ...status,
      totalBaseMATK: pino.bowgunBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "staff") {
    return {
      ...status,
      totalBaseMATK: pino.staffBaseMagicAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "magic-device") {
    return {
      ...status,
      totalBaseMATK: pino.magicDeviceBaseMagicAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "knuckle") {
    return {
      ...status,
      totalBaseMATK: pino.knuckleBaseMagicAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "halberd") {
    return {
      ...status,
      totalBaseMATK: pino.halberdBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX,
        status.totalAGI
      ),
    };
  } else if (status.mainWeaponType === "katana") {
    return {
      ...status,
      totalBaseMATK: pino.katanaBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bare-hand") {
    // return {
    //   ...status,
    //   totalBaseMATK: pino.bareHandMagicBaseAttack(
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
    //   totalBaseMATK: pino.dualWieldMagicBaseAttack(
    //     status.level,
    //     status.totalMainWeaponATK,
    //     status.totalSTR,
    //     status.totalDEX,
    //     status.totalAGI
    //   ),
    // };
    throw Error("dual wield matk calc is not implemented yet in pino!");
  } else {
    throw Error("invalid weaponType type");
  }
};

export const totalMATK = <
  S extends DeclaredStatus & {
    totalBaseMATK: number;
    totalPercentMATK: number;
    totalFlatMATK: number;

    subWeaponKnuckleMATKModifier: number;
    magicWarriorMasteryBonusFlatMATK: number;
  }
>(
  status: S
): S & { totalMATK: number } => {
  const totalPercentMATK =
    status.totalPercentMATK + status.subWeaponKnuckleMATKModifier;
  const totalFlatMATK =
    status.totalFlatMATK + status.magicWarriorMasteryBonusFlatMATK;

  return {
    ...status,
    totalMATK: total(
      status.totalBaseMATK,
      totalPercentMATK,
      totalFlatMATK
    ),
  };
};

export const totalPercentMATK = <S extends DeclaredStatus>(
  status: S
): S & { totalPercentMATK: number } => {
  return {
    ...status,
    totalPercentMATK: accumulate(status, "percentMATK"),
  };
};

export const totalFlatMATK = <S extends DeclaredStatus>(
  status: S
): S & { totalFlatMATK: number } => {
  return { ...status, totalFlatMATK: accumulate(status, "flatMATK") };
};

export const subWeaponKnuckleMATKModifier = <
  S extends { subWeaponType: SubWeaponType }
>(
  status: S
): S & { subWeaponKnuckleMATKModifier: number } => {
  return {
    ...status,
    subWeaponKnuckleMATKModifier:
      status.subWeaponType === "knuckle" ? -15 : 0,
  };
};

export const magicWarriorMasteryBonusFlatMATK = <S extends DeclaredStatus>(
  status: S
): S & { magicWarriorMasteryBonusFlatMATK: number } => {
  const subWeapon = status.subWeaponType;

  const skillLevel = status.magicWarriorMasteryLevel;

  const value =
    subWeapon === "magic-device"
      ? skillLevel * 1 + (skillLevel - 5 > 0 ? skillLevel - 5 : 0)
      : 0;

  return {
    ...status,
    magicWarriorMasteryBonusFlatMATK: value,
  };
};

export const calculateMATK = <
  S extends DeclaredStatus & {
    totalMainWeaponATK: number;
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;
  }
>(
  status: S
) =>
  pipe(status)
    ._(subWeaponKnuckleMATKModifier)
    ._(magicWarriorMasteryBonusFlatMATK)
    ._(totalBaseMATK)
    ._(totalPercentMATK)
    ._(totalFlatMATK)
    ._(totalMATK).value;
