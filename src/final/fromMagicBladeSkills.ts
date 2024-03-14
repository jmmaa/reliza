import { accumulateWithFilter, sum } from "../helper";
import { DeclaredStatusMap } from "../types";

export const numberOfMagicBladeSkills = <S extends DeclaredStatusMap>(
  status: S
): S & { numberOfMagicBladeSkills: number } => {
  const total = sum([
    status.magicWarriorMasteryLevel > 0 ? 1 : 0,
    status.conversionLevel > 0 ? 1 : 0,
    status.enchantedSpellLevel > 0 ? 1 : 0,
    status.resonanceLevel > 0 ? 1 : 0,
    status.dualBringerLevel > 0 ? 1 : 0,

    status.etherFlareLevel > 0 ? 1 : 0,
    status.elementSlashLevel > 0 ? 1 : 0,
    status.enchantSwordLevel > 0 ? 1 : 0,
    status.enchantedBurstLevel > 0 ? 1 : 0,
    status.unionSwordLevel > 0 ? 1 : 0,

    status.siphonBarrierLevel > 0 ? 1 : 0,
    status.teleportLevel > 0 ? 1 : 0,
    status.siphonRecallLevel > 0 ? 1 : 0,
    status.floatDashLevel > 0 ? 1 : 0,
    status.magicSkinLevel > 0 ? 1 : 0,
  ]);

  return {
    ...status,
    numberOfMagicBladeSkills: total,
  };
};

export const totalNegativePercentMATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const total = accumulateWithFilter(status, "percentMATK", (v) => v < 0);

  return {
    ...status,
    totalNegativePercentMATK: total,
  };
};

export const totalNegativePercentATK = <
  S extends DeclaredStatusMap & {
    subWeaponMagicDevicePercentATKModifier: number;
    magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue: number;
  }
>(
  status: S
) => {
  const total =
    accumulateWithFilter(status, "percentATK", (v) => v < 0) +
    status.subWeaponMagicDevicePercentATKModifier +
    status.magicWarriorMasterySubWeaponMagicDevicePenaltyNullificationValue;

  return {
    ...status,
    totalNegativePercentATK: total,
  };
};

export const dualBringerEffectiveMATK = <
  S extends DeclaredStatusMap & {
    totalMATK: number;
    totalATK: number;
    totalNegativePercentMATK: number;
    numberOfMagicBladeSkills: number;
  }
>(
  status: S
) => {
  const numberOfMagicBladeSkills = status.numberOfMagicBladeSkills;
  const totalNegativePercentMATK = status.totalNegativePercentMATK;
  const skillLevel = status.dualBringerLevel;
  const skillEfficiency =
    Math.min(numberOfMagicBladeSkills * skillLevel, 100) / 100;

  const penaltyCoefficient = (100 - totalNegativePercentMATK) / 100;

  const total = Math.floor(
    Math.max(
      (status.totalATK - status.totalMATK) *
        penaltyCoefficient *
        skillEfficiency -
        status.totalMATK * (1 - penaltyCoefficient),
      0
    )
  );

  return {
    ...status,
    dualBringerEffectiveMATK: total,
  };
};

export const dualBringerEffectiveATK = <
  S extends DeclaredStatusMap & {
    totalMATK: number;
    totalATK: number;
    totalNegativePercentATK: number;
    numberOfMagicBladeSkills: number;
  }
>(
  status: S
) => {
  const numberOfMagicBladeSkills = status.numberOfMagicBladeSkills;
  const totalNegativePercentATK = status.totalNegativePercentATK;
  const skillLevel = status.dualBringerLevel;
  const skillEfficiency =
    Math.min(numberOfMagicBladeSkills * skillLevel, 100) / 100;

  const penaltyCoefficient = (100 + totalNegativePercentATK) / 100;

  const total = Math.floor(
    Math.max(
      (status.totalMATK - status.totalATK) *
        penaltyCoefficient *
        skillEfficiency -
        status.totalATK * (1 - penaltyCoefficient),
      0
    )
  );

  return {
    ...status,
    dualBringerEffectiveATK: total,
  };
};
