export * from "./STR";
export * from "./DEX";
export * from "./INT";
export * from "./VIT";
export * from "./AGI";
export * from "./personal";

export * from "./criticalRate";
export * from "./criticalDamage";
export * from "./weaponATK";
export * from "./ASPD";
export * from "./CSPD";
export * from "./maxHP";
export * from "./maxMP";

export * from "./ATK";
export * from "./MATK";

export * from "./unsheatheAttack";
export * from "./shortRangeDamage";
export * from "./longRangeDamage";
export * from "./stability";

export * from "./motionSpeed";
export * from "./dodge";
export * from "./DTE";

export * from "./resistance";
export * from "./DEF";
export * from "./MDEF";
export * from "./MATKUP";
export * from "./MATKDOWN";
export * from "./ATKUP";
export * from "./ATKDOWN";
export * from "./accuracy";

export * from "./physicalPierce";
export * from "./magicPierce";
export * from "./aggro";
export * from "./final";

export * from "./helper";
export * from "./types";

import * as d from ".";

export const calculate = <S extends d.DeclaredStatusMap>(status: S) => {
  const allCalculations = d
    .pipe(status)
    ._(d.calculateSTR)
    ._(d.calculateINT)
    ._(d.calculateDEX)
    ._(d.calculateVIT)
    ._(d.calculateAGI)
    ._(d.calculatePersonal)
    ._(d.calculateHP)
    ._(d.calculateMP)
    ._(d.calculateCSPD)
    ._(d.calculateASPD)
    ._(d.calculateMotionSpeed)
    ._(d.calculateCriticalRate)
    ._(d.calculateCriticalDamage)
    ._(d.calculateWeaponATK)
    ._(d.calculateDTE)
    ._(d.calculateUnsheatheAttack)
    ._(d.calculateLongRangeDamage)
    ._(d.calculateShortRangeDamage)
    ._(d.calculateStability)
    ._(d.calculateResistance)
    ._(d.calculateAggro)
    ._(d.calculateDEF)
    ._(d.calculateMDEF)
    ._(d.calculateAccuracy)
    ._(d.calculateMATKUP)
    ._(d.calculateMATKDOWN)
    ._(d.calculateATKUP)
    ._(d.calculateATKDOWN)
    ._(d.calculateATK)
    ._(d.calculateMATK)
    ._(d.calculateDodge)
    ._(d.calculatePhysicalPierce)
    ._(d.calculateMagicPierce)
    ._(d.calculateFinal);

  return allCalculations.value;
};
