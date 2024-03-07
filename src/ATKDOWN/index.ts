import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalATKDOWNAGI = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    totalATKDOWNAGI: accumulate(status, "ATKDOWNAGI"),
  };
};

export const totalATKDOWNSTR = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    totalATKDOWNSTR: accumulate(status, "ATKDOWNSTR"),
  };
};

export const totalATKDOWNDEX = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    totalATKDOWNDEX: accumulate(status, "ATKDOWNDEX"),
  };
};

export const totalATKDOWNINT = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    totalATKDOWNINT: accumulate(status, "ATKDOWNINT"),
  };
};

export const totalATKDOWNVIT = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    totalATKDOWNVIT: accumulate(status, "ATKDOWNVIT"),
  };
};

export const calculateATKDOWN = <S extends DeclaredStatusMap>(
  status: S
): S & {
  totalATKDOWNSTR: number;
  totalATKDOWNINT: number;
  totalATKDOWNDEX: number;
  totalATKDOWNVIT: number;
  totalATKDOWNAGI: number;
} => {
  const calcs = pipe(status)
    ._(totalATKDOWNSTR)
    ._(totalATKDOWNINT)
    ._(totalATKDOWNDEX)
    ._(totalATKDOWNVIT)
    ._(totalATKDOWNAGI);

  return calcs.value;
};
