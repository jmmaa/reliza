import * as pino from "@jmmaa/pino";
import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalAilmentResistance = <S extends DeclaredStatusMap>(
  status: S
): S & { totalAilmentResistance: number } => {
  const accumulated = accumulate(status, "ailmentResistance");
  const base = pino.baseAilmentResistance(status.MTL);

  const total = base + accumulated;
  return { ...status, totalAilmentResistance: total };
};

export const totalPhysicalResistance = <S extends DeclaredStatusMap>(
  status: S
): S & { totalPhysicalResistance: number } => {
  return {
    ...status,
    totalPhysicalResistance: pino.resistance(
      accumulate(status, "physicalResistance")
    ),
  };
};

export const totalMagicResistance = <S extends DeclaredStatusMap>(
  status: S
): S & { totalMagicResistance: number } => {
  return {
    ...status,
    totalMagicResistance: pino.resistance(
      accumulate(status, "magicResistance")
    ),
  };
};

export const totalLightResistance = <S extends DeclaredStatusMap>(
  status: S
): S & { totalLightResistance: number } => {
  return {
    ...status,
    totalLightResistance: pino.resistance(
      accumulate(status, "lightResistance")
    ),
  };
};

export const totalDarkResistance = <S extends DeclaredStatusMap>(
  status: S
): S & { totalDarkResistance: number } => {
  return {
    ...status,
    totalDarkResistance: pino.resistance(
      accumulate(status, "darkResistance")
    ),
  };
};

export const totalFireResistance = <S extends DeclaredStatusMap>(
  status: S
): S & { totalFireResistance: number } => {
  return {
    ...status,
    totalFireResistance: pino.resistance(
      accumulate(status, "fireResistance")
    ),
  };
};

export const totalWaterResistance = <S extends DeclaredStatusMap>(
  status: S
): S & { totalWaterResistance: number } => {
  return {
    ...status,
    totalWaterResistance: pino.resistance(
      accumulate(status, "waterResistance")
    ),
  };
};

export const totalEarthResistance = <S extends DeclaredStatusMap>(
  status: S
): S & { totalEarthResistance: number } => {
  return {
    ...status,
    totalEarthResistance: pino.resistance(
      accumulate(status, "earthResistance")
    ),
  };
};

export const totalWindResistance = <S extends DeclaredStatusMap>(
  status: S
): S & { totalWindResistance: number } => {
  return {
    ...status,
    totalWindResistance: pino.resistance(
      accumulate(status, "windResistance")
    ),
  };
};

export const totalNeutralResistance = <S extends DeclaredStatusMap>(
  status: S
): S & { totalNeutralResistance: number } => {
  return {
    ...status,
    totalNeutralResistance: pino.resistance(
      accumulate(status, "neutralResistance")
    ),
  };
};

export const calculateResistance = <S extends DeclaredStatusMap>(
  status: S
): S & {
  totalDarkResistance: number;
  totalLightResistance: number;
  totalFireResistance: number;
  totalWaterResistance: number;
  totalEarthResistance: number;
  totalWindResistance: number;
  totalPhysicalResistance: number;
  totalMagicResistance: number;

  totalNeutralResistance: number;
  totalAilmentResistance: number;
} => {
  const calcs = pipe(status)
    ._(totalDarkResistance)
    ._(totalLightResistance)
    ._(totalFireResistance)
    ._(totalWaterResistance)
    ._(totalEarthResistance)
    ._(totalWindResistance)
    ._(totalPhysicalResistance)
    ._(totalMagicResistance)
    ._(totalNeutralResistance)
    ._(totalAilmentResistance);

  return calcs.value;
};
