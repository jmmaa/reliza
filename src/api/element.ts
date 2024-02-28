import { baseDamageToElement } from "@jmmaa/pino";
import { DeclaredStatus, Element } from "../types";
import { accumulate, pipe } from "./helper";

export const determineMainWeaponElement = <S extends DeclaredStatus>(
  status: S
): Element => {
  return status.mainWeaponStats.reduce((ele, statGroup) => {
    return statGroup.predicate(status) ? statGroup.stats["element"] : ele;
  }, "neutral" as Element);
};

export const determineSubWeaponElement = <S extends DeclaredStatus>(
  status: S
): Element => {
  return status.subWeaponStats.reduce((ele, statGroup) => {
    return statGroup.predicate(status) ? statGroup.stats["element"] : ele;
  }, "neutral" as Element);
};

export const mainWeaponElement = <S extends DeclaredStatus>(status: S) => {
  return {
    ...status,
    mainWeaponElement: determineMainWeaponElement(status),
  };
};

export const subWeaponElement = <S extends DeclaredStatus>(status: S) => {
  return {
    ...status,
    subWeaponElement: determineSubWeaponElement(status),
  };
};

//
export const finalElement = <
  S extends DeclaredStatus & {
    mainWeaponElement: Element;
    subWeaponElement: Element;
  }
>(
  status: S
) => {
  `
Not sure about this one, it needs a target to finalize the element used (due to dual element system)
so im not going to implement this for now until ive implemented the damage calculation system
`;
};

export const totalDamageToDark = <S extends DeclaredStatus>(status: S) => {
  return {
    ...status,
    totalDamageToDark: accumulate(status, "damageToDark"),
  };
};

export const totalDamageToLight = <S extends DeclaredStatus>(
  status: S
) => {
  return {
    ...status,
    totalDamageToLight: accumulate(status, "damageToLight"),
  };
};

export const totalDamageToFire = <S extends DeclaredStatus>(status: S) => {
  return {
    ...status,
    totalDamageToFire: accumulate(status, "damageToFire"),
  };
};

export const totalDamageToEarth = <S extends DeclaredStatus>(
  status: S
) => {
  return {
    ...status,
    totalDamageToEarth: accumulate(status, "damageToEarth"),
  };
};

export const totalDamageToWater = <S extends DeclaredStatus>(
  status: S
) => {
  return {
    ...status,
    totalDamageToWater: accumulate(status, "damageToWater"),
  };
};

export const totalDamageToWind = <S extends DeclaredStatus>(status: S) => {
  return {
    ...status,
    totalDamageToWind: accumulate(status, "damageToWind"),
  };
};

// physical dte

export const totalPhysicalDamageToDark = <
  S extends DeclaredStatus & { totalDamageToDark: number }
>(
  status: S
) => {
  return {
    ...status,
    totalPhysicalDamageToDark: status.totalDamageToDark,
  };
};

export const totalPhysicalDamageToLight = <
  S extends DeclaredStatus & { totalDamageToLight: number }
>(
  status: S
) => {
  return {
    ...status,
    totalPhysicalDamageToLight: status.totalDamageToLight,
  };
};

export const totalPhysicalDamageToFire = <
  S extends DeclaredStatus & { totalDamageToFire: number }
>(
  status: S
) => {
  return {
    ...status,
    totalPhysicalDamageToFire: status.totalDamageToFire,
  };
};

export const totalPhysicalDamageToEarth = <
  S extends DeclaredStatus & { totalDamageToEarth: number }
>(
  status: S
) => {
  return {
    ...status,
    totalPhysicalDamageToEarth: status.totalDamageToEarth,
  };
};

export const totalPhysicalDamageToWater = <
  S extends DeclaredStatus & { totalDamageToWater: number }
>(
  status: S
) => {
  return {
    ...status,
    totalPhysicalDamageToWater: status.totalDamageToWater,
  };
};

export const totalPhysicalDamageToWind = <
  S extends DeclaredStatus & { totalDamageToWind: number }
>(
  status: S
) => {
  return {
    ...status,
    totalPhysicalDamageToWind: status.totalDamageToWind,
  };
};

// magic dte

const hasMainWeaponElement = <S extends DeclaredStatus>(status: S) => {
  return determineMainWeaponElement(status) !== "neutral";
};

const isStaffMain = <S extends DeclaredStatus>(status: S) =>
  status.mainWeaponType === "staff";

const isMagicDeviceMain = <S extends DeclaredStatus>(status: S) =>
  status.mainWeaponType === "magic-device";

const isStrongerElement = <S extends DeclaredStatus>(status: S) =>
  determineMainWeaponElement(status);

export const bonusDamageToElementFromINT = <S extends DeclaredStatus>(
  status: S
) => {
  return {
    ...status,
    bonusDamageToElementFromINT: baseDamageToElement(status.INT),
  };
};

export const totalMagicDamageToDark = <
  S extends DeclaredStatus & { totalDamageToDark: number }
>(
  status: S
) => {
  return {
    ...status,
    totalMagicDamageToDark:
      status.totalDamageToDark +
      (isStaffMain(status) ||
      isMagicDeviceMain(status) ||
      determineMainWeaponElement(status) === "light"
        ? baseDamageToElement(status.INT)
        : 0),
  };
};

export const totalMagicDamageToLight = <
  S extends DeclaredStatus & { totalDamageToLight: number }
>(
  status: S
) => {
  return {
    ...status,
    totalMagicDamageToLight:
      status.totalDamageToLight +
      (isStaffMain(status) ||
      isMagicDeviceMain(status) ||
      determineMainWeaponElement(status) === "dark"
        ? baseDamageToElement(status.INT)
        : 0),
  };
};

export const totalMagicDamageToFire = <
  S extends DeclaredStatus & { totalDamageToFire: number }
>(
  status: S
) => {
  return {
    ...status,
    totalMagicDamageToFire:
      status.totalDamageToFire +
      (isStaffMain(status) ||
      isMagicDeviceMain(status) ||
      determineMainWeaponElement(status) === "water"
        ? baseDamageToElement(status.INT)
        : 0),
  };
};

export const totalMagicDamageToEarth = <
  S extends DeclaredStatus & { totalDamageToEarth: number }
>(
  status: S
) => {
  return {
    ...status,
    totalMagicDamageToEarth:
      status.totalDamageToEarth +
      (isStaffMain(status) ||
      isMagicDeviceMain(status) ||
      determineMainWeaponElement(status) === "fire"
        ? baseDamageToElement(status.INT)
        : 0),
  };
};

export const totalMagicDamageToWater = <
  S extends DeclaredStatus & { totalDamageToWater: number }
>(
  status: S
) => {
  return {
    ...status,
    totalMagicDamageToWater:
      status.totalDamageToWater +
      (isStaffMain(status) ||
      isMagicDeviceMain(status) ||
      determineMainWeaponElement(status) === "wind"
        ? baseDamageToElement(status.INT)
        : 0),
  };
};

export const totalMagicDamageToWind = <
  S extends DeclaredStatus & { totalDamageToWind: number }
>(
  status: S
) => {
  return {
    ...status,
    totalMagicDamageToWind:
      status.totalDamageToWind +
      (isStaffMain(status) ||
      isMagicDeviceMain(status) ||
      determineMainWeaponElement(status) === "earth"
        ? baseDamageToElement(status.INT)
        : 0),
  };
};

export const calculateDamageToElement = <S extends DeclaredStatus>(
  status: S
) => {
  const dteCalcs = pipe(status)
    ._(mainWeaponElement)
    ._(subWeaponElement)
    ._(totalDamageToDark)
    ._(totalDamageToLight)
    ._(totalDamageToFire)
    ._(totalDamageToEarth)
    ._(totalDamageToWater)
    ._(totalDamageToWind)
    ._(totalPhysicalDamageToDark)
    ._(totalPhysicalDamageToLight)
    ._(totalPhysicalDamageToFire)
    ._(totalPhysicalDamageToEarth)
    ._(totalPhysicalDamageToWater)
    ._(totalPhysicalDamageToWind)
    ._(totalMagicDamageToDark)
    ._(totalMagicDamageToLight)
    ._(totalMagicDamageToFire)
    ._(totalMagicDamageToEarth)
    ._(totalMagicDamageToWater)
    ._(totalMagicDamageToWind);

  return dteCalcs.value;
};
