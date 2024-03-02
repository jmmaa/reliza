export * from "./base";
export * from "./magic";
export * from "./physical";

import { pipe } from "../helper";
import { DeclaredStatus, Element } from "../types";
import * as calc from ".";

export const calculateDTE = <
  S extends DeclaredStatus & { mainWeaponElement: Element }
>(
  status: S
) => {
  const DTEcalcs = pipe(status)
    ._(calc.totalDamageToDark)
    ._(calc.totalDamageToLight)
    ._(calc.totalDamageToFire)
    ._(calc.totalDamageToWater)
    ._(calc.totalDamageToWind)
    ._(calc.totalDamageToEarth)

    ._(calc.totalPhysicalDamageToDark)
    ._(calc.totalPhysicalDamageToLight)
    ._(calc.totalPhysicalDamageToFire)
    ._(calc.totalPhysicalDamageToWater)
    ._(calc.totalPhysicalDamageToWind)
    ._(calc.totalPhysicalDamageToEarth)

    ._(calc.bonusDamageToElementFromINT)
    ._(calc.totalMagicDamageToDark)
    ._(calc.totalMagicDamageToLight)
    ._(calc.totalMagicDamageToFire)
    ._(calc.totalMagicDamageToWater)
    ._(calc.totalMagicDamageToWind)
    ._(calc.totalMagicDamageToEarth);

  return DTEcalcs.value;
};
