import { DeclaredStatusMap, Element } from "../types";
import { accumulate } from "../helper";

export const totalDamageToDark = <
  S extends DeclaredStatusMap & { mainWeaponElement: Element }
>(
  status: S
): S & { totalDamageToDark: number } => {
  const accumulated = accumulate(status, "damageToDark");

  const bonus = status.mainWeaponElement === "light" ? 25 : 0;

  const total = accumulated + bonus;

  return {
    ...status,
    totalDamageToDark: total,
  };
};

export const totalDamageToLight = <
  S extends DeclaredStatusMap & { mainWeaponElement: Element }
>(
  status: S
): S & { totalDamageToLight: number } => {
  const accumulated = accumulate(status, "damageToLight");

  const bonus = status.mainWeaponElement === "dark" ? 25 : 0;

  const total = accumulated + bonus;

  return {
    ...status,
    totalDamageToLight: total,
  };
};

export const totalDamageToFire = <
  S extends DeclaredStatusMap & { mainWeaponElement: Element }
>(
  status: S
): S & { totalDamageToFire: number } => {
  const accumulated = accumulate(status, "damageToFire");

  const bonus = status.mainWeaponElement === "water" ? 25 : 0;

  const total = accumulated + bonus;

  return {
    ...status,
    totalDamageToFire: total,
  };
};

export const totalDamageToWater = <
  S extends DeclaredStatusMap & { mainWeaponElement: Element }
>(
  status: S
): S & { totalDamageToWater: number } => {
  const accumulated = accumulate(status, "damageToWater");

  const bonus = status.mainWeaponElement === "wind" ? 25 : 0;

  const total = accumulated + bonus;

  return {
    ...status,
    totalDamageToWater: total,
  };
};

export const totalDamageToWind = <
  S extends DeclaredStatusMap & { mainWeaponElement: Element }
>(
  status: S
): S & { totalDamageToWind: number } => {
  const accumulated = accumulate(status, "damageToWind");

  const bonus = status.mainWeaponElement === "earth" ? 25 : 0;

  const total = accumulated + bonus;

  return {
    ...status,
    totalDamageToWind: total,
  };
};

export const totalDamageToEarth = <
  S extends DeclaredStatusMap & { mainWeaponElement: Element }
>(
  status: S
): S & { totalDamageToEarth: number } => {
  const accumulated = accumulate(status, "damageToEarth");

  const bonus = status.mainWeaponElement === "fire" ? 25 : 0;

  const total = accumulated + bonus;

  return {
    ...status,
    totalDamageToEarth: total,
  };
};
