import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";
import {
  flashBlastPercentUnsheatheAttack,
  godSpeedPercentUnsheatheAttack,
} from "./fromDualSwordSkills";

export const totalFlatUnsheatheAttack = <S extends DeclaredStatusMap>(
  status: S
) => {
  const accumulated = accumulate(status, "flatUnsheatheAttack");

  return { ...status, totalFlatUnsheatheAttack: accumulated };
};

export const totalPercentUnsheatheAttack = <
  S extends DeclaredStatusMap & {
    godSpeedPercentUnsheatheAttack: number;
    flashBlastPercentUnsheatheAttack: number;
  }
>(
  status: S
) => {
  const accumulated =
    accumulate(status, "percentUnsheatheAttack") +
    status.godSpeedPercentUnsheatheAttack;

  const total =
    accumulated +
    status.godSpeedPercentUnsheatheAttack +
    status.flashBlastPercentUnsheatheAttack;

  return { ...status, totalPercentUnsheatheAttack: total };
};

export const calculateUnsheatheAttack = <S extends DeclaredStatusMap>(
  status: S
): S & {
  totalFlatUnsheatheAttack: number;
  totalPercentUnsheatheAttack: number;
} => {
  const calcs = pipe(status)
    // dual sword
    ._(godSpeedPercentUnsheatheAttack)
    ._(flashBlastPercentUnsheatheAttack)

    ._(totalFlatUnsheatheAttack)
    ._(totalPercentUnsheatheAttack);

  return calcs.value;
};
