import {
  actionTimeReduction,
  bareHandBaseAttackSpeed,
  bowBaseAttackSpeed,
  bowgunBaseAttackSpeed,
  dualWieldBaseAttackSpeed,
  halberdBaseAttackSpeed,
  katanaBaseAttackSpeed,
  knuckleBaseAttackSpeed,
  magicDeviceBaseAttackSpeed,
  oneHandedSwordBaseAttackSpeed,
  staffBaseAttackSpeed,
  twoHandedSwordBaseAttackSpeed,
} from "@jmmaa/pino";
import { accumulateStats, total } from "./helper";
import { MainWeaponType, StatSource, SubWeaponType } from "../types";

// calc

export const totalBaseASPD = <
  S extends {
    level: number;
    mainWeaponType: MainWeaponType;
    subWeaponType: SubWeaponType;
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;
  }
>(
  status: S
): S & { totalBaseASPD: number } => {
  if (status.mainWeaponType === "one-handed-sword") {
    return {
      ...status,
      totalBaseASPD: oneHandedSwordBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.mainWeaponType === "two-handed-sword") {
    return {
      ...status,
      totalBaseASPD: twoHandedSwordBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.mainWeaponType === "bow") {
    return {
      ...status,
      totalBaseASPD: bowBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bowgun") {
    return {
      ...status,
      totalBaseASPD: bowgunBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "staff") {
    return {
      ...status,
      totalBaseASPD: staffBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalINT
      ),
    };
  } else if (status.mainWeaponType === "magic-device") {
    return {
      ...status,
      totalBaseASPD: magicDeviceBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalINT
      ),
    };
  } else if (status.mainWeaponType === "knuckle") {
    return {
      ...status,
      totalBaseASPD: knuckleBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "halberd") {
    return {
      ...status,
      totalBaseASPD: halberdBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.mainWeaponType === "katana") {
    return {
      ...status,
      totalBaseASPD: katanaBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.mainWeaponType === "bare-hand") {
    return {
      ...status,
      totalBaseASPD: bareHandBaseAttackSpeed(
        status.level,
        status.totalAGI
      ),
    };
  } else if (
    status.subWeaponType === "one-handed-sword" &&
    status.mainWeaponType === "one-handed-sword"
  ) {
    return {
      ...status,
      totalBaseASPD: dualWieldBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else {
    console.log(status);
    throw Error("invalid weaponType type");
  }
};

export const totalASPD = <
  S extends {
    totalBaseASPD: number;
    totalPercentASPD: number;
    totalFlatASPD: number;
  }
>(
  status: S
): S & { totalASPD: number } => {
  return {
    ...status,
    totalASPD: total(
      status.totalBaseASPD,
      status.totalPercentASPD,
      status.totalFlatASPD
    ),
  };
};

export const totalFlatASPD = <S extends StatSource<S>>(
  status: S
): S & { totalFlatASPD: number } => {
  return {
    ...status,
    totalFlatASPD: accumulateStats(status, "flatASPD"),
  };
};

export const totalPercentASPD = <S extends StatSource<S>>(
  status: S
): S & { totalPercentASPD: number } => {
  return {
    ...status,
    totalPercentASPD: accumulateStats(status, "percentASPD"),
  };
};

export const totalActionTimeReduction = <
  S extends {
    totalASPD: number;
  }
>(
  status: S
): S & { totalActionTimeReduction: number } => {
  return {
    ...status,
    totalActionTimeReduction: actionTimeReduction(status.totalASPD),
  };
};
