import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";

import {
  magicWarriorMasteryFlatMATK,
  conversionFlatMATK,
  resonanceFlatMATK,
} from "./fromMagicBladeSkills";

export const totalBaseMATK = <
  S extends DeclaredStatusMap & {
    totalMainWeaponATK: number;
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;
  }
>(
  status: S
): S & { totalBaseMATK: number } => {
  if (status.mainWeaponType === "one-handed-sword") {
    return {
      ...status,
      totalBaseMATK: pino.oneHandedSwordBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "two-handed-sword") {
    return {
      ...status,
      totalBaseMATK: pino.twoHandedSwordBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bow") {
    return {
      ...status,
      totalBaseMATK: pino.bowBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bowgun") {
    return {
      ...status,
      totalBaseMATK: pino.bowgunBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "staff") {
    return {
      ...status,
      totalBaseMATK: pino.staffBaseMagicAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "magic-device") {
    return {
      ...status,
      totalBaseMATK: pino.magicDeviceBaseMagicAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "knuckle") {
    return {
      ...status,
      totalBaseMATK: pino.knuckleBaseMagicAttack(
        status.level,
        status.totalMainWeaponATK,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "halberd") {
    return {
      ...status,
      totalBaseMATK: pino.halberdBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX,
        status.totalAGI
      ),
    };
  } else if (status.mainWeaponType === "katana") {
    return {
      ...status,
      totalBaseMATK: pino.katanaBaseMagicAttack(
        status.level,
        status.totalINT,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bare-hand") {
    // return {
    //   ...status,
    //   totalBaseMATK: pino.bareHandMagicBaseAttack(
    //     status.level,
    //     status.totalMainWeaponATK,
    //     status.totalSTR
    //   ),
    // };

    throw Error("barehand matk calc is not implemented yet in pino!");
  } else if (
    status.subWeaponType === "one-handed-sword" &&
    status.mainWeaponType === "one-handed-sword"
  ) {
    // return {
    //   ...status,
    //   totalBaseMATK: pino.dualWieldMagicBaseAttack(
    //     status.level,
    //     status.totalMainWeaponATK,
    //     status.totalSTR,
    //     status.totalDEX,
    //     status.totalAGI
    //   ),
    // };
    throw Error("dual wield matk calc is not implemented yet in pino!");
  } else {
    throw Error("invalid weaponType type");
  }
};

export const totalPercentMATK = <
  S extends DeclaredStatusMap & { subWeaponKnuckleMATKModifier: number }
>(
  status: S
): S & { totalPercentMATK: number } => {
  const acquired = accumulate(status, "percentMATK");

  const external = status.subWeaponKnuckleMATKModifier;

  return {
    ...status,
    totalPercentMATK: acquired + external,
  };
};

export const totalFlatMATK = <
  S extends DeclaredStatusMap & {
    magicWarriorMasteryFlatMATK: number;
    conversionFlatMATK: number;
    resonanceFlatMATK: number;
    totalFlatMATKFromMATKUP: number;
    totalFlatMATKFromMATKDOWN: number;
  }
>(
  status: S
): S & { totalFlatMATK: number } => {
  const acquired = accumulate(status, "flatMATK");

  const total =
    acquired +
    status.magicWarriorMasteryFlatMATK +
    status.conversionFlatMATK +
    status.resonanceFlatMATK +
    status.totalFlatMATKFromMATKDOWN +
    status.totalFlatMATKFromMATKUP;

  return { ...status, totalFlatMATK: total };
};

export const subWeaponKnuckleMATKModifier = <S extends DeclaredStatusMap>(
  status: S
): S & { subWeaponKnuckleMATKModifier: number } => {
  return {
    ...status,
    subWeaponKnuckleMATKModifier:
      status.subWeaponType === "knuckle" ? -15 : 0,
  };
};

export const totalFlatMATKFromMATKDOWN = <
  S extends DeclaredStatusMap & {
    totalMATKDOWNSTR: number;
    totalMATKDOWNINT: number;
    totalMATKDOWNDEX: number;
    totalMATKDOWNVIT: number;
    totalMATKDOWNAGI: number;
  }
>(
  status: S
) => {
  const fromSTR = Math.floor((status.totalMATKDOWNSTR / 100) * status.STR); // confirm the floor
  const fromINT = Math.floor((status.totalMATKDOWNINT / 100) * status.INT); // confirm the floor
  const fromDEX = Math.floor((status.totalMATKDOWNDEX / 100) * status.DEX); // confirm the floor
  const fromVIT = Math.floor((status.totalMATKDOWNVIT / 100) * status.VIT); // confirm the floor
  const fromAGI = Math.floor((status.totalMATKDOWNAGI / 100) * status.AGI); // confirm the floor

  const total = fromSTR + fromINT + fromDEX + fromVIT + fromAGI;
  return { ...status, totalFlatMATKFromMATKDOWN: total };
};

export const totalFlatMATKFromMATKUP = <
  S extends DeclaredStatusMap & {
    totalMATKUPSTR: number;
    totalMATKUPINT: number;
    totalMATKUPDEX: number;
    totalMATKUPVIT: number;
    totalMATKUPAGI: number;
  }
>(
  status: S
) => {
  const fromSTR = Math.floor((status.totalMATKUPSTR / 100) * status.STR); // confirm the floor
  const fromINT = Math.floor((status.totalMATKUPINT / 100) * status.INT); // confirm the floor
  const fromDEX = Math.floor((status.totalMATKUPDEX / 100) * status.DEX); // confirm the floor
  const fromVIT = Math.floor((status.totalMATKUPVIT / 100) * status.VIT); // confirm the floor
  const fromAGI = Math.floor((status.totalMATKUPAGI / 100) * status.AGI); // confirm the floor

  const total = fromSTR + fromINT + fromDEX + fromVIT + fromAGI;
  return { ...status, totalFlatMATKFromMATKUP: total };
};

export const totalMATK = <
  S extends DeclaredStatusMap & {
    totalBaseMATK: number;
    totalPercentMATK: number;
    totalFlatMATK: number;
  }
>(
  status: S
): S & { totalMATK: number } => {
  return {
    ...status,
    totalMATK: total(
      status.totalBaseMATK,
      status.totalPercentMATK,
      status.totalFlatMATK
    ),
  };
};

export const calculateMATK = <
  S extends DeclaredStatusMap & {
    totalMainWeaponATK: number;
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;

    totalMATKDOWNSTR: number;
    totalMATKDOWNINT: number;
    totalMATKDOWNDEX: number;
    totalMATKDOWNVIT: number;
    totalMATKDOWNAGI: number;

    totalMATKUPSTR: number;
    totalMATKUPINT: number;
    totalMATKUPDEX: number;
    totalMATKUPVIT: number;
    totalMATKUPAGI: number;
  }
>(
  status: S
): S & {
  subWeaponKnuckleMATKModifier: number;
  magicWarriorMasteryFlatMATK: number;
  totalBaseMATK: number;
  totalPercentMATK: number;
  totalFlatMATK: number;
  totalMATK: number;
} => {
  const calcs = pipe(status)
    // magic blade
    ._(magicWarriorMasteryFlatMATK)
    ._(conversionFlatMATK)
    ._(resonanceFlatMATK)
    //

    ._(totalFlatMATKFromMATKUP)
    ._(totalFlatMATKFromMATKDOWN)
    ._(subWeaponKnuckleMATKModifier)

    ._(totalBaseMATK)
    ._(totalPercentMATK)
    ._(totalFlatMATK)
    ._(totalMATK);

  return calcs.value;
};
