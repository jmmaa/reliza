import { resistance } from "@jmmaa/pino";
import { StatSource } from "../types";
import { accumulateStats } from "./helper";

// declare
export const physicalResistance =
  (value: number) =>
  <S>(status: S): S & { physicalResistance: number } => ({
    ...status,
    physicalResistance: value,
  });

export const magicResistance =
  (value: number) =>
  <S>(status: S): S & { magicResistance: number } => ({
    ...status,
    magicResistance: value,
  });

export const lightResistance =
  (value: number) =>
  <S>(status: S): S & { lightResistance: number } => ({
    ...status,
    lightResistance: value,
  });

export const darkResistance =
  (value: number) =>
  <S>(status: S): S & { darkResistance: number } => ({
    ...status,
    darkResistance: value,
  });

export const fireResistance =
  (value: number) =>
  <S>(status: S): S & { fireResistance: number } => ({
    ...status,
    fireResistance: value,
  });

export const waterResistance =
  (value: number) =>
  <S>(status: S): S & { waterResistance: number } => ({
    ...status,
    waterResistance: value,
  });

export const earthResistance =
  (value: number) =>
  <S>(status: S): S & { earthResistance: number } => ({
    ...status,
    earthResistance: value,
  });

export const windResistance =
  (value: number) =>
  <S>(status: S): S & { windResistance: number } => ({
    ...status,
    windResistance: value,
  });

export const neutralResistance =
  (value: number) =>
  <S>(status: S): S & { neutralResistance: number } => ({
    ...status,
    neutralResistance: value,
  });

// calc

export const totalPhysicalResistance = <S extends StatSource<S>>(
  status: S
): S & { totalPhysicalResistance: number } => {
  return {
    ...status,
    totalPhysicalResistance: resistance(
      accumulateStats(status, "physicalResistance")
    ),
  };
};

export const totalMagicResistance = <S extends StatSource<S>>(
  status: S
): S & { totalMagicResistance: number } => {
  return {
    ...status,
    totalMagicResistance: resistance(
      accumulateStats(status, "magicResistance")
    ),
  };
};

export const totalLightResistance = <S extends StatSource<S>>(
  status: S
): S & { totalLightResistance: number } => {
  return {
    ...status,
    totalLightResistance: resistance(
      accumulateStats(status, "lightResistance")
    ),
  };
};

export const totalDarkResistance = <S extends StatSource<S>>(
  status: S
): S & { totalDarkResistance: number } => {
  return {
    ...status,
    totalDarkResistance: resistance(
      accumulateStats(status, "darkResistance")
    ),
  };
};

export const totalFireResistance = <S extends StatSource<S>>(
  status: S
): S & { totalFireResistance: number } => {
  return {
    ...status,
    totalFireResistance: resistance(
      accumulateStats(status, "fireResistance")
    ),
  };
};

export const totalWaterResistance = <S extends StatSource<S>>(
  status: S
): S & { totalWaterResistance: number } => {
  return {
    ...status,
    totalWaterResistance: resistance(
      accumulateStats(status, "waterResistance")
    ),
  };
};

export const totalEarthResistance = <S extends StatSource<S>>(
  status: S
): S & { totalEarthResistance: number } => {
  return {
    ...status,
    totalEarthResistance: resistance(
      accumulateStats(status, "earthResistance")
    ),
  };
};

export const totalWindResistance = <S extends StatSource<S>>(
  status: S
): S & { totalWindResistance: number } => {
  return {
    ...status,
    totalWindResistance: resistance(
      accumulateStats(status, "windResistance")
    ),
  };
};

export const totalNeutralResistance = <S extends StatSource<S>>(
  status: S
): S & { totalNeutralResistance: number } => {
  return {
    ...status,
    totalNeutralResistance: resistance(
      accumulateStats(status, "neutralResistance")
    ),
  };
};
