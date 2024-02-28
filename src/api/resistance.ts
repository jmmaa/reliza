import { resistance } from "@jmmaa/pino";
import { DeclaredStatus } from "../types";
import { accumulate } from "./helper";

// // declare
// export const physicalResistance =
//   (value: number) =>
//   (status: S): S & { physicalResistance: number } => ({
//     ...status,
//     physicalResistance: value,
//   });

// export const magicResistance =
//   (value: number) =>
//   (status: S): S & { magicResistance: number } => ({
//     ...status,
//     magicResistance: value,
//   });

// export const lightResistance =
//   (value: number) =>
//   (status: S): S & { lightResistance: number } => ({
//     ...status,
//     lightResistance: value,
//   });

// export const darkResistance =
//   (value: number) =>
//   (status: S): S & { darkResistance: number } => ({
//     ...status,
//     darkResistance: value,
//   });

// export const fireResistance =
//   (value: number) =>
//   (status: S): S & { fireResistance: number } => ({
//     ...status,
//     fireResistance: value,
//   });

// export const waterResistance =
//   (value: number) =>
//   (status: S): S & { waterResistance: number } => ({
//     ...status,
//     waterResistance: value,
//   });

// export const earthResistance =
//   (value: number) =>
//   (status: S): S & { earthResistance: number } => ({
//     ...status,
//     earthResistance: value,
//   });

// export const windResistance =
//   (value: number) =>
//   (status: S): S & { windResistance: number } => ({
//     ...status,
//     windResistance: value,
//   });

// export const neutralResistance =
//   (value: number) =>
//   (status: S): S & { neutralResistance: number } => ({
//     ...status,
//     neutralResistance: value,
//   });

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
