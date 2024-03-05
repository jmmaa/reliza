import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalFlatUnsheatheAttack = <S extends DeclaredStatusMap>(
  status: S
) => {
  const accumulated = accumulate(status, "flatUnsheatheAttack");

  return { ...status, totalFlatUnsheatheAttack: accumulated };
};

export const totalPercentUnsheatheAttack = <S extends DeclaredStatusMap>(
  status: S
) => {
  const accumulated = accumulate(status, "percentUnsheatheAttack");

  return { ...status, totalPercentUnsheatheAttack: accumulated };
};

export const calculateUnsheatheAttack = <S extends DeclaredStatusMap>(
  status: S
) => {
  const calcs = pipe(status)
    ._(totalFlatUnsheatheAttack)
    ._(totalPercentUnsheatheAttack);

  return calcs.value;
};
