import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalMATKDOWNAGI = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    totalMATKDOWNAGI: accumulate(status, "MATKDOWNAGI"),
  };
};

export const totalMATKDOWNSTR = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    totalMATKDOWNSTR: accumulate(status, "MATKDOWNSTR"),
  };
};

export const totalMATKDOWNDEX = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    totalMATKDOWNDEX: accumulate(status, "MATKDOWNDEX"),
  };
};

export const totalMATKDOWNINT = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    totalMATKDOWNINT: accumulate(status, "MATKDOWNINT"),
  };
};

export const totalMATKDOWNVIT = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    totalMATKDOWNVIT: accumulate(status, "MATKDOWNVIT"),
  };
};

export const calculateMATKDOWN = <S extends DeclaredStatusMap>(
  status: S
): S & {
  totalMATKDOWNSTR: number;
  totalMATKDOWNINT: number;
  totalMATKDOWNDEX: number;
  totalMATKDOWNVIT: number;
  totalMATKDOWNAGI: number;
} => {
  const calcs = pipe(status)
    ._(totalMATKDOWNSTR)
    ._(totalMATKDOWNINT)
    ._(totalMATKDOWNDEX)
    ._(totalMATKDOWNVIT)
    ._(totalMATKDOWNAGI);

  return calcs.value;
};
