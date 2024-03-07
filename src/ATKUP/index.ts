import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalATKUPAGI = <S extends DeclaredStatusMap>(status: S) => {
  return {
    ...status,
    totalATKUPAGI: accumulate(status, "ATKUPAGI"),
  };
};

export const totalATKUPSTR = <S extends DeclaredStatusMap>(status: S) => {
  return {
    ...status,
    totalATKUPSTR: accumulate(status, "ATKUPSTR"),
  };
};

export const totalATKUPDEX = <S extends DeclaredStatusMap>(status: S) => {
  return {
    ...status,
    totalATKUPDEX: accumulate(status, "ATKUPDEX"),
  };
};

export const totalATKUPINT = <S extends DeclaredStatusMap>(status: S) => {
  return {
    ...status,
    totalATKUPINT: accumulate(status, "ATKUPINT"),
  };
};

export const totalATKUPVIT = <S extends DeclaredStatusMap>(status: S) => {
  return {
    ...status,
    totalATKUPVIT: accumulate(status, "ATKUPVIT"),
  };
};

export const calculateATKUP = <S extends DeclaredStatusMap>(
  status: S
): S & {
  totalATKUPSTR: number;
  totalATKUPINT: number;
  totalATKUPDEX: number;
  totalATKUPVIT: number;
  totalATKUPAGI: number;
} => {
  const calcs = pipe(status)
    ._(totalATKUPSTR)
    ._(totalATKUPINT)
    ._(totalATKUPDEX)
    ._(totalATKUPVIT)
    ._(totalATKUPAGI);

  return calcs.value;
};
