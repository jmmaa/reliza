import { DeclaredStatusMap, Element } from "../types";
import { accumulate } from "../helper";

export const totalDamageToDark = <S extends DeclaredStatusMap>(
  status: S
): S & { totalDamageToDark: number } => {
  const accumulated = accumulate(status, "damageToDark");

  const total = accumulated;

  return {
    ...status,
    totalDamageToDark: total,
  };
};

export const totalDamageToLight = <S extends DeclaredStatusMap>(
  status: S
): S & { totalDamageToLight: number } => {
  const accumulated = accumulate(status, "damageToLight");

  const total = accumulated;

  return {
    ...status,
    totalDamageToLight: total,
  };
};

export const totalDamageToFire = <S extends DeclaredStatusMap>(
  status: S
): S & { totalDamageToFire: number } => {
  const accumulated = accumulate(status, "damageToFire");

  const total = accumulated;

  return {
    ...status,
    totalDamageToFire: total,
  };
};

export const totalDamageToWater = <S extends DeclaredStatusMap>(
  status: S
): S & { totalDamageToWater: number } => {
  const accumulated = accumulate(status, "damageToWater");

  const total = accumulated;

  return {
    ...status,
    totalDamageToWater: total,
  };
};

export const totalDamageToWind = <S extends DeclaredStatusMap>(
  status: S
): S & { totalDamageToWind: number } => {
  const accumulated = accumulate(status, "damageToWind");

  const total = accumulated;

  return {
    ...status,
    totalDamageToWind: total,
  };
};

export const totalDamageToEarth = <S extends DeclaredStatusMap>(
  status: S
): S & { totalDamageToEarth: number } => {
  const accumulated = accumulate(status, "damageToEarth");

  const total = accumulated;

  return {
    ...status,
    totalDamageToEarth: total,
  };
};
