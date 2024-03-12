import { pipe } from "../helper";
import { DeclaredStatusMap } from "../types";
import {
  dualBringerEffectiveATK,
  dualBringerEffectiveMATK,
  numberOfMagicBladeSkills,
  totalNegativePercentATK,
  totalNegativePercentMATK,
} from "./fromMagicBladeSkills";

export const effectiveMATK = <
  S extends DeclaredStatusMap & {
    totalMATK: number;
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
  S extends DeclaredStatusMap & {
    totalMATK: number;
    totalATK: number;
    subWeaponMagicDevicePercentATKModifier: number;
    magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue: number;
  }
>(
  status: S
) => {
  const calcs = pipe(status)
    // magic blade
    ._(numberOfMagicBladeSkills)
    ._(totalNegativePercentATK)
    ._(totalNegativePercentMATK)
    ._(dualBringerEffectiveATK)
    ._(dualBringerEffectiveMATK)
    //
    ._(effectiveMATK)
    ._(effectiveATK);

  return calcs.value;
};
