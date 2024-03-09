import * as pino from "@jmmaa/pino";
import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalBaseStability = <
  S extends DeclaredStatusMap & {
    totalSTR: number;
    totalDEX: number;
  }
>(
  status: S
): S & { totalBaseStability: number } => {
  if (status.mainWeaponType === "one-handed-sword") {
    return {
      ...status,
      totalBaseStability: pino.oneHandedSwordStability(
        status.mainWeaponStability,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "two-handed-sword") {
    return {
      ...status,
      totalBaseStability: pino.twoHandedSwordStability(
        status.mainWeaponStability,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bow") {
    const hasArrow = status.subWeaponType === "arrow";
    return {
      ...status,
      totalBaseStability: pino.bowStability(
        status.mainWeaponStability,
        hasArrow ? status.subWeaponStability : 0,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bowgun") {
    const hasArrow = status.subWeaponType === "arrow";
    return {
      ...status,
      totalBaseStability: pino.bowStability(
        status.mainWeaponStability,
        hasArrow ? status.subWeaponStability : 0,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "staff") {
    return {
      ...status,
      totalBaseStability: pino.staffStability(
        status.mainWeaponStability,
        status.totalSTR
      ),
    };
  } else if (status.mainWeaponType === "magic-device") {
    return {
      ...status,
      totalBaseStability: pino.magicDeviceStability(
        status.mainWeaponStability,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "knuckle") {
    return {
      ...status,
      totalBaseStability: pino.knuckleStability(
        status.mainWeaponStability,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "halberd") {
    return {
      ...status,
      totalBaseStability: pino.halberdStability(
        status.mainWeaponStability,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "katana") {
    return {
      ...status,
      totalBaseStability: pino.katanaStability(
        status.mainWeaponStability,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bare-hand") {
    return {
      ...status,
      totalBaseStability: pino.bareHandStability(
        status.mainWeaponStability,
        status.totalDEX
      ),
    };
  } else if (
    status.subWeaponType === "one-handed-sword" &&
    status.mainWeaponType === "one-handed-sword"
  ) {
    return {
      ...status,
      totalBaseStability: pino.dualWieldStability(
        status.mainWeaponStability,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else {
    console.log(status);
    throw Error("invalid weaponType type");
  }
};

export const totalStability = <
  S extends DeclaredStatusMap & { totalBaseStability: number }
>(
  status: S
) => {
  const weaponStability = status.mainWeaponStability;
  const accumulated = accumulate(status, "stability");

  const total = weaponStability + accumulated;
  return { ...status, totalStability: total };
};

export const calculateStability = <
  S extends DeclaredStatusMap & { totalSTR: number; totalDEX: number }
>(
  status: S
): S & { totalStability: number } => {
  const calcs = pipe(status)._(totalBaseStability)._(totalStability);

  return calcs.value;
};
