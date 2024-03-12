export * from "./base";

import { pipe } from "../helper";
import { DeclaredStatusMap } from "../types";
import * as calc from ".";

export const calculateDTE = <S extends DeclaredStatusMap>(status: S) => {
  const calcs = pipe(status)
    ._(calc.totalDamageToDark)
    ._(calc.totalDamageToLight)
    ._(calc.totalDamageToFire)
    ._(calc.totalDamageToWater)
    ._(calc.totalDamageToWind)
    ._(calc.totalDamageToEarth);

  return calcs.value;
};
