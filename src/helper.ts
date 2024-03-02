import {
  DeclaredStatus,
  NonNumericalStats,
  NumericalStats,
  StatMap,
  SubWeaponType,
} from "./types";

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * (1 + percent / 100) + flat);

export const defaultStatMap: StatMap = {
  flatSTR: 0,
  percentSTR: 0,

  flatINT: 0,
  percentINT: 0,

  flatDEX: 0,
  percentDEX: 0,

  flatVIT: 0,
  percentVIT: 0,

  flatAGI: 0,
  percentAGI: 0,

  flatWeaponATK: 0,
  percentWeaponATK: 0,

  flatMATK: 0,
  percentMATK: 0,

  flatATK: 0,
  percentATK: 0,

  flatASPD: 0,
  percentASPD: 0,

  flatCSPD: 0,
  percentCSPD: 0,

  flatCriticalRate: 0,
  percentCriticalRate: 0,

  flatCriticalDamage: 0,
  percentCriticalDamage: 0,

  flatMaxHP: 0,
  percentMaxHP: 0,

  flatMaxMP: 0,
  percentMaxMP: 0,

  flatAccuracy: 0,
  percentAccuracy: 0,

  flatDodge: 0,
  percentDodge: 0,

  flatDEF: 0,
  percentDEF: 0,

  flatMDEF: 0,
  percentMDEF: 0,

  flatUnsheatheAttack: 0,
  percentUnsheatheAttack: 100,

  flatAttackMPRecovery: 0,
  percentAttackMPRecovery: 0,

  stability: 0,

  magicPierce: 0,
  physicalPierce: 0,

  longRangeDamage: 0,
  shortRangeDamage: 0,

  motionSpeed: 0,

  ATKUPSTR: 0,
  ATKUPINT: 0,
  ATKUPDEX: 0,
  ATKUPVIT: 0,
  ATKUPAGI: 0,

  MATKUPSTR: 0,
  MATKUPINT: 0,
  MATKUPDEX: 0,
  MATKUPVIT: 0,
  MATKUPAGI: 0,

  magicResistance: 0,
  physicalResistance: 0,

  lightResistance: 0,
  darkResistance: 0,

  fireResistance: 0,
  waterResistance: 0,
  earthResistance: 0,
  windResistance: 0,

  neutralResistance: 0,

  damageToDark: 0,
  damageToLight: 0,
  damageToEarth: 0,
  damageToWater: 0,
  damageToFire: 0,
  damageToWind: 0,

  aggro: 0,

  tumbleUnavailable: false,
  flinchUnavailable: false,
  stunUnavailable: false,

  element: "neutral",
};

export const stats = (statMap: Partial<StatMap>) => ({
  ...defaultStatMap,
  ...statMap,
});

export const DEFAULT = <S>(_: S) => true;

export const accumulateFromMainWeaponStats = <S extends DeclaredStatus>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.mainWeaponStats.reduce((total, statGroup) => {
    return statGroup.predicate(status)
      ? statGroup.stats[stat] + total
      : total;
  }, 0);

  return total;
};

export const accumulateFromMainWeaponCrystals = <S extends DeclaredStatus>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.mainWeaponCrystals.reduce((total, statGroups) => {
    return (
      statGroups.reduce((total, statGroup) => {
        return statGroup.predicate(status)
          ? statGroup.stats[stat] + total
          : total;
      }, 0) + total
    );
  }, 0);

  return total;
};

export const accumulateFromSubWeaponStats = <S extends DeclaredStatus>(
  stat: keyof NumericalStats,
  status: S
) => {
  if (
    status.subWeaponType === "arrow" ||
    status.subWeaponType === "dagger" ||
    status.subWeaponType === "shield" ||
    status.subWeaponType === "ninjutsu-scroll"
  ) {
    const total = status.subWeaponStats.reduce((total, statGroup) => {
      return statGroup.predicate(status)
        ? statGroup.stats[stat] + total
        : total;
    }, 0);

    return total;
  } else {
    return 0;
  }
};

export const accumulateFromAdditionalGearStats = <
  S extends DeclaredStatus
>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.additionalGearStats.reduce((total, statGroup) => {
    return statGroup.predicate(status)
      ? statGroup.stats[stat] + total
      : total;
  }, 0);

  return total;
};

export const accumulateFromArmorStats = <S extends DeclaredStatus>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.armorStats.reduce((total, statGroup) => {
    return statGroup.predicate(status)
      ? statGroup.stats[stat] + total
      : total;
  }, 0);

  return total;
};

export const accumulateFromSpecialGearStats = <S extends DeclaredStatus>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.specialGearStats.reduce((total, statGroup) => {
    return statGroup.predicate(status)
      ? statGroup.stats[stat] + total
      : total;
  }, 0);

  return total;
};

export const accumulate = <S extends DeclaredStatus>(
  status: S,
  stat: keyof NumericalStats
) => {
  const sum = [
    accumulateFromMainWeaponStats(stat, status),
    accumulateFromMainWeaponCrystals(stat, status),

    accumulateFromSubWeaponStats(stat, status),
    accumulateFromAdditionalGearStats(stat, status),
    accumulateFromArmorStats(stat, status),
    accumulateFromSpecialGearStats(stat, status),
  ].reduce((t, c) => t + c, 0);

  return sum;
};

export const pipe = <T>(value: T) => {
  return {
    value: value,
    _: <N>(f: (value: T) => N) => pipe(f(value)),
  };
};

export type Prettify<T> = { [K in keyof T]: Prettify<T[K]> };
