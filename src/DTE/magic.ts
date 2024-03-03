import * as pino from "@jmmaa/pino";
import { DeclaredStatusMap, Element } from "../types";

const isStaffMain = <S extends DeclaredStatusMap>(status: S) =>
  status.mainWeaponType === "staff";

const isMagicDeviceMain = <S extends DeclaredStatusMap>(status: S) =>
  status.mainWeaponType === "magic-device";

export const bonusDamageToElementFromINT = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    bonusDamageToElementFromINT: pino.baseDamageToElement(status.INT),
  };
};

export const isAwakenedElementStaffOrMagicMain = <
  S extends DeclaredStatusMap & {
    mainWeaponElement: Element;
  }
>(
  status: S
) =>
  (isStaffMain(status) && status.mainWeaponElement !== "neutral") ||
  (isMagicDeviceMain(status) && status.mainWeaponElement !== "neutral");

export const totalMagicDamageToDark = <
  S extends DeclaredStatusMap & {
    mainWeaponElement: Element;
    totalDamageToDark: number;
    bonusDamageToElementFromINT: number;
  }
>(
  status: S
): S & { totalMagicDamageToDark: number } => {
  const isBonusDTEAllowed =
    isAwakenedElementStaffOrMagicMain(status) ||
    status.mainWeaponElement === "light";

  const total =
    status.totalDamageToDark +
    (isBonusDTEAllowed ? status.bonusDamageToElementFromINT : 0);

  return {
    ...status,
    totalMagicDamageToDark: total,
  };
};

export const totalMagicDamageToLight = <
  S extends DeclaredStatusMap & {
    mainWeaponElement: Element;
    totalDamageToLight: number;
    bonusDamageToElementFromINT: number;
  }
>(
  status: S
): S & { totalMagicDamageToLight: number } => {
  const isBonusDTEAllowed =
    isAwakenedElementStaffOrMagicMain(status) ||
    status.mainWeaponElement === "dark";

  const total =
    status.totalDamageToLight +
    (isBonusDTEAllowed ? status.bonusDamageToElementFromINT : 0);

  return {
    ...status,
    totalMagicDamageToLight: total,
  };
};

export const totalMagicDamageToFire = <
  S extends DeclaredStatusMap & {
    mainWeaponElement: Element;
    totalDamageToFire: number;
    bonusDamageToElementFromINT: number;
  }
>(
  status: S
): S & { totalMagicDamageToFire: number } => {
  const isBonusDTEAllowed =
    isAwakenedElementStaffOrMagicMain(status) ||
    status.mainWeaponElement === "fire";

  const total =
    status.totalDamageToFire +
    (isBonusDTEAllowed ? status.bonusDamageToElementFromINT : 0);

  return {
    ...status,
    totalMagicDamageToFire: total,
  };
};

export const totalMagicDamageToWater = <
  S extends DeclaredStatusMap & {
    mainWeaponElement: Element;
    totalDamageToWater: number;
    bonusDamageToElementFromINT: number;
  }
>(
  status: S
): S & { totalMagicDamageToWater: number } => {
  const isBonusDTEAllowed =
    isAwakenedElementStaffOrMagicMain(status) ||
    status.mainWeaponElement === "wind";

  const total =
    status.totalDamageToWater +
    (isBonusDTEAllowed ? status.bonusDamageToElementFromINT : 0);

  return {
    ...status,
    totalMagicDamageToWater: total,
  };
};

export const totalMagicDamageToWind = <
  S extends DeclaredStatusMap & {
    mainWeaponElement: Element;
    totalDamageToWind: number;
    bonusDamageToElementFromINT: number;
  }
>(
  status: S
): S & { totalMagicDamageToWind: number } => {
  const isBonusDTEAllowed =
    isAwakenedElementStaffOrMagicMain(status) ||
    status.mainWeaponElement === "earth";

  const total =
    status.totalDamageToWind +
    (isBonusDTEAllowed ? status.bonusDamageToElementFromINT : 0);

  return {
    ...status,
    totalMagicDamageToWind: total,
  };
};

export const totalMagicDamageToEarth = <
  S extends DeclaredStatusMap & {
    mainWeaponElement: Element;
    totalDamageToEarth: number;
    bonusDamageToElementFromINT: number;
  }
>(
  status: S
): S & { totalMagicDamageToEarth: number } => {
  const isBonusDTEAllowed =
    isAwakenedElementStaffOrMagicMain(status) ||
    status.mainWeaponElement === "fire";

  const total =
    status.totalDamageToEarth +
    (isBonusDTEAllowed ? status.bonusDamageToElementFromINT : 0);

  return {
    ...status,
    totalMagicDamageToEarth: total,
  };
};
