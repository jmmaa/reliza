import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalBaseATK = <
  S extends DeclaredStatusMap & {
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
  S extends DeclaredStatusMap & {
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

export const totalFlatATK = <
  S extends DeclaredStatusMap & {
    resonanceBonusFlatATK: number;
  }
>(
  status: S
): S & { totalFlatATK: number } => {
  const acquired = accumulate(status, "flatATK");

  const total = acquired + status.resonanceBonusFlatATK;

  return { ...status, totalFlatATK: total };
};

export const subWeaponMagicDevicePercentATKModifier = <
  S extends DeclaredStatusMap
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
  <S extends DeclaredStatusMap>(
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

export const resonanceBonusFlatATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const isAllowed =
    status.subWeaponType === "magic-device" && status.isResonanceActive;

  const mdRefine = status.subWeaponRefinement;
  const skillLevel = status.resonanceLevel;

  const bonusFlatATK = skillLevel * 2 + mdRefine * 2;

  const total = isAllowed ? bonusFlatATK : 0;

  return {
    ...status,
    resonanceBonusFlatATK: total,
  };
};

export const totalFlatATKFromATKUP = <
  S extends DeclaredStatusMap & {
    totalATKUPSTR: number;
    totalATKUPINT: number;
    totalATKUPDEX: number;
    totalATKUPVIT: number;
    totalATKUPAGI: number;
  }
>(
  status: S
) => {
  const fromSTR = Math.floor((status.totalATKUPSTR / 100) * status.STR); // confirm the floor
  const fromINT = Math.floor((status.totalATKUPINT / 100) * status.INT); // confirm the floor
  const fromDEX = Math.floor((status.totalATKUPDEX / 100) * status.DEX); // confirm the floor
  const fromVIT = Math.floor((status.totalATKUPVIT / 100) * status.VIT); // confirm the floor
  const fromAGI = Math.floor((status.totalATKUPAGI / 100) * status.AGI); // confirm the floor

  const total = fromSTR + fromINT + fromDEX + fromVIT + fromAGI;
  return { ...status, totalFlatATKFromATKUP: total };
};

export const totalFlatATKFromATKDOWN = <
  S extends DeclaredStatusMap & {
    totalATKDOWNSTR: number;
    totalATKDOWNINT: number;
    totalATKDOWNDEX: number;
    totalATKDOWNVIT: number;
    totalATKDOWNAGI: number;
  }
>(
  status: S
) => {
  const fromSTR = Math.floor((status.totalATKDOWNSTR / 100) * status.STR); // confirm the floor
  const fromINT = Math.floor((status.totalATKDOWNINT / 100) * status.INT); // confirm the floor
  const fromDEX = Math.floor((status.totalATKDOWNDEX / 100) * status.DEX); // confirm the floor
  const fromVIT = Math.floor((status.totalATKDOWNVIT / 100) * status.VIT); // confirm the floor
  const fromAGI = Math.floor((status.totalATKDOWNAGI / 100) * status.AGI); // confirm the floor

  const total = fromSTR + fromINT + fromDEX + fromVIT + fromAGI;

  return { ...status, totalFlatATKFromATKDOWN: total };
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
  S extends DeclaredStatusMap & {
    totalMainWeaponATK: number;
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;

    totalATKUPSTR: number;
    totalATKUPINT: number;
    totalATKUPDEX: number;
    totalATKUPVIT: number;
    totalATKUPAGI: number;

    totalATKDOWNSTR: number;
    totalATKDOWNINT: number;
    totalATKDOWNDEX: number;
    totalATKDOWNVIT: number;
    totalATKDOWNAGI: number;
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
  const calcs = pipe(status)
    ._(totalFlatATKFromATKUP)
    ._(totalFlatATKFromATKDOWN)
    ._(subWeaponMagicDevicePercentATKModifier)
    ._(magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue)
    ._(resonanceBonusFlatATK)
    ._(totalBaseATK)
    ._(totalPercentATK)
    ._(totalFlatATK)
    ._(totalATK);

  return calcs.value;
};
