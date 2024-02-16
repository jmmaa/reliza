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
import { total } from "./helper";
import { DeclaredStatContainer, accumulateDeclaredStats } from "./helper";

// stat
export const flatASPD = (
  value: number
): { name: "flatASPD"; value: number } => ({
  name: "flatASPD",
  value,
});

export const percentASPD = (
  value: number
): { name: "percentASPD"; value: number } => ({
  name: "percentASPD",
  value,
});

// calc
export const BaseASPD =
  (value: number) =>
  <S>(status: S): S & { BaseASPD: number } => ({
    ...status,
    BaseASPD: value,
  });

export const totalBaseASPD = <
  S extends {
    level: number;
    weaponType:
      | "one-handed-sword"
      | "two-handed-sword"
      | "dual-wield"
      | "bow"
      | "bowgun"
      | "staff"
      | "magic-device"
      | "halberd"
      | "katana"
      | "knuckle"
      | "bare-hand";
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;
  }
>(
  status: S
): S & { totalBaseASPD: number } => {
  if (status.weaponType === "one-handed-sword") {
    return {
      ...status,
      totalBaseASPD: oneHandedSwordBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.weaponType === "two-handed-sword") {
    return {
      ...status,
      totalBaseASPD: twoHandedSwordBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.weaponType === "dual-wield") {
    return {
      ...status,
      totalBaseASPD: dualWieldBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.weaponType === "bow") {
    return {
      ...status,
      totalBaseASPD: bowBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalDEX
      ),
    };
  } else if (status.weaponType === "bowgun") {
    return {
      ...status,
      totalBaseASPD: bowgunBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalDEX
      ),
    };
  } else if (status.weaponType === "staff") {
    return {
      ...status,
      totalBaseASPD: staffBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalINT
      ),
    };
  } else if (status.weaponType === "magic-device") {
    return {
      ...status,
      totalBaseASPD: magicDeviceBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalINT
      ),
    };
  } else if (status.weaponType === "knuckle") {
    return {
      ...status,
      totalBaseASPD: knuckleBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.weaponType === "halberd") {
    return {
      ...status,
      totalBaseASPD: halberdBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.weaponType === "katana") {
    return {
      ...status,
      totalBaseASPD: katanaBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.weaponType === "bare-hand") {
    return {
      ...status,
      totalBaseASPD: bareHandBaseAttackSpeed(
        status.level,
        status.totalAGI
      ),
    };
  } else {
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

export const totalFlatASPD = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalFlatASPD: number } => {
  return {
    ...status,
    totalFlatASPD: accumulateDeclaredStats(status, "flatASPD"),
  };
};

export const totalPercentASPD = <S extends DeclaredStatContainer<S>>(
  status: S
): S & { totalPercentASPD: number } => {
  return {
    ...status,
    totalPercentASPD: accumulateDeclaredStats(status, "percentASPD"),
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
