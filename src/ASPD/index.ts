import * as pino from "@jmmaa/pino";
import { accumulate, pipe, total } from "../helper";
import { DeclaredStatusMap } from "../types";

// calc

export const totalBaseASPD = <
  S extends DeclaredStatusMap & {
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;
  }
>(
  status: S
): S & { totalBaseASPD: number } => {
  if (status.mainWeaponType === "one-handed-sword") {
    return {
      ...status,
      totalBaseASPD: pino.oneHandedSwordBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.mainWeaponType === "two-handed-sword") {
    return {
      ...status,
      totalBaseASPD: pino.twoHandedSwordBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.mainWeaponType === "bow") {
    return {
      ...status,
      totalBaseASPD: pino.bowBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "bowgun") {
    return {
      ...status,
      totalBaseASPD: pino.bowgunBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "staff") {
    return {
      ...status,
      totalBaseASPD: pino.staffBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalINT
      ),
    };
  } else if (status.mainWeaponType === "magic-device") {
    return {
      ...status,
      totalBaseASPD: pino.magicDeviceBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalINT
      ),
    };
  } else if (status.mainWeaponType === "knuckle") {
    return {
      ...status,
      totalBaseASPD: pino.knuckleBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR,
        status.totalDEX
      ),
    };
  } else if (status.mainWeaponType === "halberd") {
    return {
      ...status,
      totalBaseASPD: pino.halberdBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.mainWeaponType === "katana") {
    return {
      ...status,
      totalBaseASPD: pino.katanaBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else if (status.mainWeaponType === "bare-hand") {
    return {
      ...status,
      totalBaseASPD: pino.bareHandBaseAttackSpeed(
        status.level,
        status.totalAGI
      ),
    };
  } else if (
    status.subWeaponType === "one-handed-sword" &&
    status.mainWeaponType === "one-handed-sword"
  ) {
    return {
      ...status,
      totalBaseASPD: pino.dualWieldBaseAttackSpeed(
        status.level,
        status.totalAGI,
        status.totalSTR
      ),
    };
  } else {
    console.log(status);
    throw Error("invalid weaponType type");
  }
};

export const totalPercentASPD = <
  S extends DeclaredStatusMap & {
    lightArmorPercentASPDModifier: number;
    heavyArmorPercentASPDModifier: number;
  }
>(
  status: S
): S & { totalPercentASPD: number } => {
  const accumulated = accumulate(status, "percentASPD");

  const total =
    accumulated +
    status.lightArmorPercentASPDModifier +
    status.heavyArmorPercentASPDModifier;

  return {
    ...status,
    totalPercentASPD: total,
  };
};

export const totalFlatASPD = <
  S extends DeclaredStatusMap & {
    resonanceBonusFlatASPD: number;
  }
>(
  status: S
): S & { totalFlatASPD: number } => {
  const acquired = accumulate(status, "flatASPD");

  const total = acquired + status.resonanceBonusFlatASPD;

  return {
    ...status,
    totalFlatASPD: total,
  };
};

export const totalActionTimeReduction = <
  S extends {
    totalASPD: number;
  }
>(
  status: S
): S & { totalActionTimeReduction: number } => {
  return {
    ...status,
    totalActionTimeReduction: pino.actionTimeReduction(status.totalASPD),
  };
};

export const lightArmorPercentASPDModifier = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    lightArmorPercentASPDModifier: status.armorType === "light" ? 50 : 0,
  };
};

export const heavyArmorPercentASPDModifier = <S extends DeclaredStatusMap>(
  status: S
) => {
  return {
    ...status,
    heavyArmorPercentASPDModifier: status.armorType === "heavy" ? -50 : 0,
  };
};

export const resonanceBonusFlatASPD = <
  S extends DeclaredStatusMap & {
    resonanceLevel: number;
    isResonanceActive: boolean;
  }
>(
  status: S
) => {
  const isAllowed =
    status.subWeaponType === "magic-device" && status.isResonanceActive;

  const skillLevel = status.resonanceLevel;
  const mdRefine = status.subWeaponRefinement;

  const bonusFlatASPD = skillLevel * 25 + mdRefine * 50;

  const total = isAllowed ? bonusFlatASPD : 0;

  return {
    ...status,
    resonanceBonusFlatASPD: total,
  };
};

export const totalASPD = <
  S extends {
    totalBaseASPD: number;
    totalPercentASPD: number;
    totalFlatASPD: number;
  }
>(
  status: S
): S & { totalASPD: number } => {
  return {
    ...status,
    totalASPD: total(
      status.totalBaseASPD,
      status.totalPercentASPD,
      status.totalFlatASPD
    ),
  };
};

export const calculateASPD = <
  S extends DeclaredStatusMap & {
    totalSTR: number;
    totalDEX: number;
    totalINT: number;
    totalAGI: number;
  }
>(
  status: S
) => {
  const calcs = pipe(status)
    ._(lightArmorPercentASPDModifier)
    ._(heavyArmorPercentASPDModifier)

    ._(resonanceBonusFlatASPD)

    ._(totalBaseASPD)
    ._(totalPercentASPD)
    ._(totalFlatASPD)
    ._(totalASPD)
    ._(totalActionTimeReduction);

  return calcs.value;
};
