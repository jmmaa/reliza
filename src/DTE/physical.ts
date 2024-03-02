import { DeclaredStatus } from "../types";

export const totalPhysicalDamageToDark = <
  S extends DeclaredStatus & { totalDamageToDark: number }
>(
  status: S
): S & { totalPhysicalDamageToDark: number } => {
  return {
    ...status,
    totalPhysicalDamageToDark: status.totalDamageToDark,
  };
};

export const totalPhysicalDamageToLight = <
  S extends DeclaredStatus & { totalDamageToLight: number }
>(
  status: S
): S & { totalPhysicalDamageToLight: number } => {
  return {
    ...status,
    totalPhysicalDamageToLight: status.totalDamageToLight,
  };
};

export const totalPhysicalDamageToFire = <
  S extends DeclaredStatus & { totalDamageToFire: number }
>(
  status: S
): S & { totalPhysicalDamageToFire: number } => {
  return {
    ...status,
    totalPhysicalDamageToFire: status.totalDamageToFire,
  };
};

export const totalPhysicalDamageToWater = <
  S extends DeclaredStatus & { totalDamageToWater: number }
>(
  status: S
): S & { totalPhysicalDamageToWater: number } => {
  return {
    ...status,
    totalPhysicalDamageToWater: status.totalDamageToWater,
  };
};

export const totalPhysicalDamageToWind = <
  S extends DeclaredStatus & { totalDamageToWind: number }
>(
  status: S
): S & { totalPhysicalDamageToWind: number } => {
  return {
    ...status,
    totalPhysicalDamageToWind: status.totalDamageToWind,
  };
};

export const totalPhysicalDamageToEarth = <
  S extends DeclaredStatus & { totalDamageToEarth: number }
>(
  status: S
): S & { totalPhysicalDamageToEarth: number } => {
  return {
    ...status,
    totalPhysicalDamageToEarth: status.totalDamageToEarth,
  };
};
