import { DeclaredStatusMap } from "../types";

export const totalPhysicalDamageToDark = <
  S extends DeclaredStatusMap & { totalDamageToDark: number }
>(
  status: S
): S & { totalPhysicalDamageToDark: number } => {
  return {
    ...status,
    totalPhysicalDamageToDark: status.totalDamageToDark,
  };
};

export const totalPhysicalDamageToLight = <
  S extends DeclaredStatusMap & { totalDamageToLight: number }
>(
  status: S
): S & { totalPhysicalDamageToLight: number } => {
  return {
    ...status,
    totalPhysicalDamageToLight: status.totalDamageToLight,
  };
};

export const totalPhysicalDamageToFire = <
  S extends DeclaredStatusMap & { totalDamageToFire: number }
>(
  status: S
): S & { totalPhysicalDamageToFire: number } => {
  return {
    ...status,
    totalPhysicalDamageToFire: status.totalDamageToFire,
  };
};

export const totalPhysicalDamageToWater = <
  S extends DeclaredStatusMap & { totalDamageToWater: number }
>(
  status: S
): S & { totalPhysicalDamageToWater: number } => {
  return {
    ...status,
    totalPhysicalDamageToWater: status.totalDamageToWater,
  };
};

export const totalPhysicalDamageToWind = <
  S extends DeclaredStatusMap & { totalDamageToWind: number }
>(
  status: S
): S & { totalPhysicalDamageToWind: number } => {
  return {
    ...status,
    totalPhysicalDamageToWind: status.totalDamageToWind,
  };
};

export const totalPhysicalDamageToEarth = <
  S extends DeclaredStatusMap & { totalDamageToEarth: number }
>(
  status: S
): S & { totalPhysicalDamageToEarth: number } => {
  return {
    ...status,
    totalPhysicalDamageToEarth: status.totalDamageToEarth,
  };
};
