export * from "./base";

import { pipe } from "../helper";
import { DeclaredStatusMap } from "../types";
import {
  totalDamageToDark,
  totalDamageToLight,
  totalDamageToFire,
  totalDamageToEarth,
  totalDamageToWind,
  totalDamageToWater,
} from "./base";

export const calculateDTE = <S extends DeclaredStatusMap>(status: S) => {
  const calcs = pipe(status)
    ._(totalDamageToDark)
    ._(totalDamageToLight)
    ._(totalDamageToFire)
    ._(totalDamageToWater)
    ._(totalDamageToWind)
    ._(totalDamageToEarth);

  return calcs.value;
};
