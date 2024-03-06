import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalMATKUPAGI = <S extends DeclaredStatusMap>(status: S) => {
  return { ...status, totalMATKUPAGI: accumulate(status, "MATKUPAGI") };
};

export const totalMATKUPSTR = <S extends DeclaredStatusMap>(status: S) => {
  return { ...status, totalMATKUPSTR: accumulate(status, "MATKUPSTR") };
};

export const totalMATKUPDEX = <S extends DeclaredStatusMap>(status: S) => {
  return { ...status, totalMATKUPDEX: accumulate(status, "MATKUPDEX") };
};

export const totalMATKUPINT = <S extends DeclaredStatusMap>(status: S) => {
  return { ...status, totalMATKUPINT: accumulate(status, "MATKUPINT") };
};

export const totalMATKUPVIT = <S extends DeclaredStatusMap>(status: S) => {
  return { ...status, totalMATKUPVIT: accumulate(status, "MATKUPVIT") };
};

export const calculateMATKUP = <S extends DeclaredStatusMap>(
  status: S
): S & {
  totalMATKUPSTR: number;
  totalMATKUPINT: number;
  totalMATKUPDEX: number;
  totalMATKUPVIT: number;
  totalMATKUPAGI: number;
} => {
  const calcs = pipe(status)
    ._(totalMATKUPSTR)
    ._(totalMATKUPINT)
    ._(totalMATKUPDEX)
    ._(totalMATKUPVIT)
    ._(totalMATKUPAGI);

  return calcs.value;
};
