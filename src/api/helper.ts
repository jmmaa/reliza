import {
  StatSource,
  StatMap,
  SubWeaponType,
  StatGroupWithPredicate,
} from "../types";

export const accumulateStats = <S extends StatSource<S>>(
  status: S,
  key: keyof StatMap
) => {
  const mainWeaponStatsTotal =
    status.mainWeaponStats !== undefined
      ? status.mainWeaponStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[key] + total
            : total;
        }, 0)
      : 0;

  const mainWeaponCrystalStatsTotal =
    status.mainWeaponCrystals !== undefined
      ? status.mainWeaponCrystals.reduce((total, statGroups) => {
          const accumulated = statGroups.reduce((total, statGroup) => {
            return statGroup.predicate(status)
              ? statGroup.stats[key] + total
              : total;
          }, 0);

          return total + accumulated;
        }, 0)
      : 0;

  const subWeaponStatsTotal =
    status.subWeaponStats !== undefined
      ? status.subWeaponStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[key] + total
            : total;
        }, 0)
      : 0;

  const additionalGearStatsTotal =
    status.additionalGearStats !== undefined
      ? status.additionalGearStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[key] + total
            : total;
        }, 0)
      : 0;

  const additionalGearCrystalStatsTotal =
    status.additionalGearCrystals !== undefined
      ? status.additionalGearCrystals.reduce((total, statGroups) => {
          const accumulated = statGroups.reduce((total, statGroup) => {
            return statGroup.predicate(status)
              ? statGroup.stats[key] + total
              : total;
          }, 0);

          return total + accumulated;
        }, 0)
      : 0;

  const armorStatsTotal =
    status.armorStats !== undefined
      ? status.armorStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[key] + total
            : total;
        }, 0)
      : 0;

  const armorCrystalStatsTotal =
    status.armorCrystals !== undefined
      ? status.armorCrystals.reduce((total, statGroups) => {
          const accumulated = statGroups.reduce((total, statGroup) => {
            return statGroup.predicate(status)
              ? statGroup.stats[key] + total
              : total;
          }, 0);

          return total + accumulated;
        }, 0)
      : 0;

  const specialGearStatsTotal =
    status.specialGearStats !== undefined
      ? status.specialGearStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[key] + total
            : total;
        }, 0)
      : 0;

  const specialGearCrystalStatsTotal =
    status.specialGearCrystals !== undefined
      ? status.specialGearCrystals.reduce((total, statGroups) => {
          const accumulated = statGroups.reduce((total, statGroup) => {
            return statGroup.predicate(status)
              ? statGroup.stats[key] + total
              : total;
          }, 0);

          return total + accumulated;
        }, 0)
      : 0;

  return [
    mainWeaponStatsTotal,
    mainWeaponCrystalStatsTotal,
    additionalGearStatsTotal,
    additionalGearCrystalStatsTotal,
    armorStatsTotal,
    armorCrystalStatsTotal,
    specialGearStatsTotal,
    specialGearCrystalStatsTotal,
  ].reduce((total, curr) => total + curr, 0);
};

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
  percentUnsheatheAttack: 0,

  stability: 0,

  magicPierce: 0,
  physicalPierce: 0,

  longRangeDamage: 0,
  shortRangeDamage: 0,

  motionSpeed: 0,

  "ATKUP(STR)": 0,
  "ATKUP(INT)": 0,
  "ATKUP(DEX)": 0,
  "ATKUP(VIT)": 0,
  "ATKUP(AGI)": 0,

  "MATKUP(STR)": 0,
  "MATKUP(INT)": 0,
  "MATKUP(DEX)": 0,
  "MATKUP(VIT)": 0,
  "MATKUP(AGI)": 0,

  magicResistance: 0,
  physicalResistance: 0,

  lightResistance: 0,
  darkResistance: 0,

  fireResistance: 0,
  waterResistance: 0,
  earthResistance: 0,
  windResistance: 0,

  neutralResistance: 0,
};

export const stats = <S>(
  predicate: (status: S) => boolean,
  statMap: Partial<StatMap>
) => ({
  predicate,
  stats: { ...defaultStatMap, ...statMap },
});

export const DEFAULT = <S>(_: S) => true;

export const accumulateFromMainWeaponStats = <
  S extends { mainWeaponStats?: StatGroupWithPredicate<S>[] }
>(
  stat: keyof StatMap,
  status: S
) => {
  const total =
    status.mainWeaponStats !== undefined
      ? status.mainWeaponStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[stat] + total
            : total;
        }, 0)
      : 0;

  return total;
};

export const accumulateFromSubWeaponStats = <
  S extends {
    subWeaponType: SubWeaponType;
    subWeaponStats?: StatGroupWithPredicate<S>[];
  }
>(
  stat: keyof StatMap,
  status: S
) => {
  if (
    status.subWeaponType === "arrow" ||
    status.subWeaponType === "dagger" ||
    status.subWeaponType === "shield" ||
    status.subWeaponType === "ninjutsu-scroll"
  ) {
    const total =
      status.subWeaponStats !== undefined
        ? status.subWeaponStats.reduce((total, statGroup) => {
            return statGroup.predicate(status)
              ? statGroup.stats[stat] + total
              : total;
          }, 0)
        : 0;

    return total;
  } else {
    return 0;
  }
};

export const accumulateFromAdditionalGearStats = <
  S extends { additionalGearStats?: StatGroupWithPredicate<S>[] }
>(
  stat: keyof StatMap,
  status: S
) => {
  const total =
    status.additionalGearStats !== undefined
      ? status.additionalGearStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[stat] + total
            : total;
        }, 0)
      : 0;

  return total;
};

export const accumulateFromArmorStats = <
  S extends { armorStats?: StatGroupWithPredicate<S>[] }
>(
  stat: keyof StatMap,
  status: S
) => {
  const total =
    status.armorStats !== undefined
      ? status.armorStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[stat] + total
            : total;
        }, 0)
      : 0;

  return total;
};

export const accumulateFromSpecialGearStats = <
  S extends { specialGearStats?: StatGroupWithPredicate<S>[] }
>(
  stat: keyof StatMap,
  status: S
) => {
  const total =
    status.specialGearStats !== undefined
      ? status.specialGearStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[stat] + total
            : total;
        }, 0)
      : 0;

  return total;
};

export const pipe = <T>(value: T) => {
  return {
    value: value,
    _: <N>(f: (value: T) => N) => pipe(f(value)),
  };
};
