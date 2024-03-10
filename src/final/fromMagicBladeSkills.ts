import { DeclaredStatusMap } from "../types";

export const dualBringerEffectiveMATK = <
  S extends DeclaredStatusMap & { totalMATK: number; totalATK: number }
>(
  status: S
) => {
  const numberOfMagicBladeSkills = [
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
  ].reduce((s, n) => s + n);

  const totalNegativePercentMATK = [
    status.mainWeaponStats.reduce((total, group) => {
      return group.predicate(status)
        ? group.stats.percentMATK < 0
          ? total + group.stats.percentMATK
          : total
        : total;
    }, 0),
    status.mainWeaponCrystals.reduce((total, groups) => {
      return (
        total +
        groups.reduce((total, group) => {
          return group.predicate(status)
            ? group.stats.percentMATK < 0
              ? total + group.stats.percentMATK
              : total
            : total;
        }, 0)
      );
    }, 0),

    status.additionalGearStats.reduce((total, group) => {
      return group.predicate(status)
        ? group.stats.percentMATK < 0
          ? total + group.stats.percentMATK
          : total
        : total;
    }, 0),

    status.additionalGearCrystals.reduce((total, groups) => {
      return (
        total +
        groups.reduce((total, group) => {
          return group.predicate(status)
            ? group.stats.percentMATK < 0
              ? total + group.stats.percentMATK
              : total
            : total;
        }, 0)
      );
    }, 0),

    status.armorStats.reduce((total, group) => {
      return group.predicate(status)
        ? group.stats.percentMATK < 0
          ? total + group.stats.percentMATK
          : total
        : total;
    }, 0),

    status.armorCrystals.reduce((total, groups) => {
      return (
        total +
        groups.reduce((total, group) => {
          return group.predicate(status)
            ? group.stats.percentMATK < 0
              ? total + group.stats.percentMATK
              : total
            : total;
        }, 0)
      );
    }, 0),

    status.specialGearStats.reduce((total, group) => {
      return group.predicate(status)
        ? group.stats.percentMATK < 0
          ? total + group.stats.percentMATK
          : total
        : total;
    }, 0),

    status.specialGearCrystals.reduce((total, groups) => {
      return (
        total +
        groups.reduce((total, group) => {
          return group.predicate(status)
            ? group.stats.percentMATK < 0
              ? total + group.stats.percentMATK
              : total
            : total;
        }, 0)
      );
    }, 0),
  ].reduce((s, n) => s + n);

  const skillLevel = status.dualBringerLevel;
  const skillEfficiency =
    Math.min(numberOfMagicBladeSkills * skillLevel, 100) / 100;

  const penaltyCoefficient = (100 - totalNegativePercentMATK) / 100;

  const total = Math.max(
    (status.totalATK - status.totalMATK) *
      penaltyCoefficient *
      skillEfficiency -
      status.totalMATK * (1 - penaltyCoefficient),
    0
  );

  return {
    ...status,
    dualBringerEffectiveMATK: total,
  };
};

export const dualBringerEffectiveATK = <
  S extends DeclaredStatusMap & { totalMATK: number; totalATK: number }
>(
  status: S
) => {
  const numberOfMagicBladeSkills = [
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
  ].reduce((s, n) => s + n);

  const totalNegativePercentATK = [
    status.mainWeaponStats.reduce((total, group) => {
      return group.predicate(status)
        ? group.stats.percentATK < 0
          ? total + group.stats.percentATK
          : total
        : total;
    }, 0),
    status.mainWeaponCrystals.reduce((total, groups) => {
      return (
        total +
        groups.reduce((total, group) => {
          return group.predicate(status)
            ? group.stats.percentATK < 0
              ? total + group.stats.percentATK
              : total
            : total;
        }, 0)
      );
    }, 0),

    status.additionalGearStats.reduce((total, group) => {
      return group.predicate(status)
        ? group.stats.percentATK < 0
          ? total + group.stats.percentATK
          : total
        : total;
    }, 0),

    status.additionalGearCrystals.reduce((total, groups) => {
      return (
        total +
        groups.reduce((total, group) => {
          return group.predicate(status)
            ? group.stats.percentATK < 0
              ? total + group.stats.percentATK
              : total
            : total;
        }, 0)
      );
    }, 0),

    status.armorStats.reduce((total, group) => {
      return group.predicate(status)
        ? group.stats.percentATK < 0
          ? total + group.stats.percentATK
          : total
        : total;
    }, 0),

    status.armorCrystals.reduce((total, groups) => {
      return (
        total +
        groups.reduce((total, group) => {
          return group.predicate(status)
            ? group.stats.percentATK < 0
              ? total + group.stats.percentATK
              : total
            : total;
        }, 0)
      );
    }, 0),

    status.specialGearStats.reduce((total, group) => {
      return group.predicate(status)
        ? group.stats.percentATK < 0
          ? total + group.stats.percentATK
          : total
        : total;
    }, 0),

    status.specialGearCrystals.reduce((total, groups) => {
      return (
        total +
        groups.reduce((total, group) => {
          return group.predicate(status)
            ? group.stats.percentATK < 0
              ? total + group.stats.percentATK
              : total
            : total;
        }, 0)
      );
    }, 0),

    // status.magicWarriorSubWeaponMagicDeviceNullificationValue
  ].reduce((s, n) => s + n);

  const skillLevel = status.dualBringerLevel;
  const skillEfficiency =
    Math.min(numberOfMagicBladeSkills * skillLevel, 100) / 100;

  const penaltyCoefficient = (100 - totalNegativePercentATK) / 100;

  const total = Math.max(
    (status.totalMATK - status.totalATK) *
      penaltyCoefficient *
      skillEfficiency -
      status.totalATK * (1 - penaltyCoefficient),
    0
  );

  return {
    ...status,
    dualBringerEffectiveATK: total,
  };
};
