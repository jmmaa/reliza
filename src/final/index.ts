import { pipe } from "../helper";
import { DeclaredStatusMap } from "../types";
import {
  dualBringerEffectiveATK,
  dualBringerEffectiveMATK,
} from "./fromMagicBladeSkills";

export const effectiveMATK = <
  S extends DeclaredStatusMap & {
    totalMATK: number;
    dualBringerEffectiveMATK: number;
  }
>(
  status: S
) => {
  const total = status.totalMATK;

  return {
    ...status,
    effectiveMATK: total,
  };
};

export const effectiveATK = <
  S extends DeclaredStatusMap & {
    totalATK: number;
    dualBringerEffectiveATK: number;
  }
>(
  status: S
) => {
  const total = status.totalATK;

  return {
    ...status,
    effectiveATK: total,
  };
};

export const calculateFinal = <
  S extends DeclaredStatusMap & { totalMATK: number; totalATK: number }
>(
  status: S
) => {
  const calcs = pipe(status)
    // magic blade
    ._(dualBringerEffectiveATK)
    ._(dualBringerEffectiveMATK)
    //
    ._(effectiveMATK)
    ._(effectiveATK);

  return calcs.value;
};
