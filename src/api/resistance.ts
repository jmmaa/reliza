import { resistance } from "@jmmaa/pino";
import { DeclaredStatus } from "../types";
import { accumulate } from "./helper";

// calc

export const totalPhysicalResistance = <S extends DeclaredStatus>(
  status: S
): S & { totalPhysicalResistance: number } => {
  return {
    ...status,
    totalPhysicalResistance: resistance(
      accumulate(status, "physicalResistance")
    ),
  };
};

export const totalMagicResistance = <S extends DeclaredStatus>(
  status: S
): S & { totalMagicResistance: number } => {
  return {
    ...status,
    totalMagicResistance: resistance(
      accumulate(status, "magicResistance")
    ),
  };
};

export const totalLightResistance = <S extends DeclaredStatus>(
  status: S
): S & { totalLightResistance: number } => {
  return {
    ...status,
    totalLightResistance: resistance(
      accumulate(status, "lightResistance")
    ),
  };
};

export const totalDarkResistance = <S extends DeclaredStatus>(
  status: S
): S & { totalDarkResistance: number } => {
  return {
    ...status,
    totalDarkResistance: resistance(accumulate(status, "darkResistance")),
  };
};

export const totalFireResistance = <S extends DeclaredStatus>(
  status: S
): S & { totalFireResistance: number } => {
  return {
    ...status,
    totalFireResistance: resistance(accumulate(status, "fireResistance")),
  };
};

export const totalWaterResistance = <S extends DeclaredStatus>(
  status: S
): S & { totalWaterResistance: number } => {
  return {
    ...status,
    totalWaterResistance: resistance(
      accumulate(status, "waterResistance")
    ),
  };
};

export const totalEarthResistance = <S extends DeclaredStatus>(
  status: S
): S & { totalEarthResistance: number } => {
  return {
    ...status,
    totalEarthResistance: resistance(
      accumulate(status, "earthResistance")
    ),
  };
};

export const totalWindResistance = <S extends DeclaredStatus>(
  status: S
): S & { totalWindResistance: number } => {
  return {
    ...status,
    totalWindResistance: resistance(accumulate(status, "windResistance")),
  };
};

export const totalNeutralResistance = <S extends DeclaredStatus>(
  status: S
): S & { totalNeutralResistance: number } => {
  return {
    ...status,
    totalNeutralResistance: resistance(
      accumulate(status, "neutralResistance")
    ),
  };
};
